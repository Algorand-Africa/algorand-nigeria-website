import { EmpoweringInnovators } from './empowering-innovators';
import { OneBlockchain } from './one-blockchain';
import { CommunityDrivenBlockchain } from './community-driven-blockchain';
import { Discover } from './discover';
import { StayAhead } from './stay-ahead';
import { JoinTheConversation } from './join-the-conversation';
import { Faq } from './faq';

export const Home = () => {
  return (
    <main>
      <EmpoweringInnovators />
      <OneBlockchain />
      <CommunityDrivenBlockchain />
      <Discover />
      {/* <StayAhead /> */}
      {/* <JoinTheConversation /> */}
      <Faq />
    </main>
  );
};
