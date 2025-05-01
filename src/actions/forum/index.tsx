import { useClient } from '@/hooks/use-client';

import { FetchPaginatedDataDto, Paginated } from '@/interface/pagination.interface';
import { generateQueryFromObject } from '@/utils';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { IForumCategory } from '@/interface/forum.interface';

export const useForumActions = () => {
  const client = useClient();

  const getAllForumCategories = useCallback(async (dto: FetchPaginatedDataDto) => {
    const queryParams = generateQueryFromObject(dto);
    const url = `/forum/posts/categories?${queryParams}`;

    const response = await client.get<Paginated<IForumCategory>>(url);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  return {
    getAllForumCategories,
  };
};
