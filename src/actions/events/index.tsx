import { useClient } from '@/hooks/use-client';

import { Paginated } from '@/interface/pagination.interface';
import { IEvent, IGetAllEventsDto } from '@/interface/event.interface';
import { generateQueryFromObject } from '@/utils';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

export const useEventsActions = () => {
  const client = useClient();

  const getAllEvents = useCallback(async (dto: IGetAllEventsDto) => {
    const queryParams = generateQueryFromObject(dto);
    const url = `/events?${queryParams}`;

    const response = await client.get<Paginated<IEvent>>(url);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const getEventById = useCallback(async (id: string) => {
    const url = `/events/${id}`;

    const response = await client.get<IEvent>(url);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const registerForEvent = useCallback(async (id: string) => {
    const url = `/events/${id}/register`;

    const response = await client.post(url);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const markEventAsAttended = useCallback(async (token: string) => {
    const url = `/events/${token}/attendance`;

    const response = await client.post(url);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const markEventAsCollectedNft = useCallback(async (id: string) => {
    const url = `/events/${id}/nft`;
    const response = await client.post(url);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  return {
    getAllEvents,
    getEventById,
    registerForEvent,
    markEventAsAttended,
    markEventAsCollectedNft,
  };
};
