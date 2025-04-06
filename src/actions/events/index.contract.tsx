import { EVENT_CLAIMER_ARC32_CONSTANT } from '@/constants/event-claimer-arc32.constant';
import { ApplicationClient } from '@algorandfoundation/algokit-utils/types/app-client';
import { getAlgorandClient } from '@/utils/get-algo-client-config';
import { useWallet } from '@txnlab/use-wallet';
import algosdk, { makeAssetTransferTxnWithSuggestedParamsFromObject } from 'algosdk';
import { useCallback } from 'react';

export const useEventsContractActions = () => {
  const { activeAddress, signer } = useWallet();
  const client = getAlgorandClient();

  const claimEventNft = useCallback(
    async (appId: number, assetId: number) => {
      if (!activeAddress) {
        throw new Error('Connect your wallet to proceed!');
      }

      const appFactory = new ApplicationClient(
        {
          app: JSON.stringify(EVENT_CLAIMER_ARC32_CONSTANT),
          resolveBy: 'id',
          id: appId,
        },
        client.client.algod,
      );

      const atomTransactionComposer = new algosdk.AtomicTransactionComposer();
      const suggestedParams = await client.getSuggestedParams();
      const appAddress = algosdk.getApplicationAddress(appId);

      let isOptedIn = false;

      try {
        // Check if is opted in
        await client.client.algod.accountAssetInformation(activeAddress, assetId).do();
        isOptedIn = true;
      } catch (error) {
        // Opt in
        console.error(error);
        const optInTxn = makeAssetTransferTxnWithSuggestedParamsFromObject({
          from: activeAddress,
          to: activeAddress,
          assetIndex: assetId,
          suggestedParams,
          amount: 0,
        });

        atomTransactionComposer.addTransaction({ txn: optInTxn, signer });
      }

      atomTransactionComposer.addMethodCall({
        method: appFactory.getABIMethod('claimAsset')!,
        methodArgs: [assetId],
        suggestedParams: {
          ...suggestedParams,
          fee: 2_000,
          flatFee: true,
        },
        sender: activeAddress,
        appForeignAssets: [assetId],
        appAccounts: [activeAddress],
        signer,
        appID: appId,
      });

      const response = await atomTransactionComposer.execute(client.client.algod, 8);
      console.log(response);

      return response;
    },
    [activeAddress, signer],
  );

  return {
    claimEventNft,
  };
};
