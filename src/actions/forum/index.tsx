import { useClient } from '@/hooks/use-client';

import { FetchPaginatedDataDto, Paginated } from '@/interface/pagination.interface';
import { generateQueryFromObject } from '@/utils';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import {
  IForumCategory,
  IForumPostPreview,
  ICreateForumPost,
  ICreateForumComment,
  IForumPost,
  IComment,
} from '@/interface/forum.interface';

export const useForumActions = () => {
  const client = useClient();

  const getAllForumCategories = useCallback(async (dto: FetchPaginatedDataDto) => {
    const queryParams = generateQueryFromObject({ ...dto, pageSize: 100 });
    const url = `/forum/posts/categories?${queryParams}`;

    const response = await client.get<Paginated<IForumCategory>>(url);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const getForumCategoryById = useCallback(async (id: string) => {
    const response = await client.get<IForumCategory>(`/forum/posts/categories/${id}`);

    if (response.data) {
      return response.data;
    }
  }, []);

  const getAllPostPreviews = useCallback(
    async (dto: FetchPaginatedDataDto & { categoryId?: string }) => {
      const queryParams = generateQueryFromObject(dto);
      const url = `/forum/posts/previews?${queryParams}`;

      const response = await client.get<Paginated<IForumPostPreview>>(url);

      if (response.data) {
        return response.data;
      } else {
        toast.error(String(response.error?.toString()));
      }
    },
    [],
  );

  const getPostById = useCallback(async (id: string) => {
    const response = await client.get<IForumPost>(`/forum/posts/${id}`);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const createPost = useCallback(async (dto: ICreateForumPost) => {
    const response = await client.post<IForumPostPreview>(`/forum/posts`, dto);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const createComment = useCallback(async (dto: ICreateForumComment) => {
    const response = await client.post(`/forum/posts/comment`, dto);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const savePost = useCallback(async (id: string) => {
    const response = await client.post(`/forum/posts/save/${id}/post`);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const upvotePost = useCallback(async (id: string) => {
    const response = await client.post(`/forum/posts/upvote/${id}/post`);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const downvotePost = useCallback(async (id: string) => {
    const response = await client.post(`/forum/posts/downvote/${id}/post`);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const upvoteComment = useCallback(async (id: string) => {
    const response = await client.post(`/forum/posts/upvote/${id}/comment`);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const downvoteComment = useCallback(async (id: string) => {
    const response = await client.post(`/forum/posts/downvote/${id}/comment`);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const getCommentsByPostId = useCallback(async (id: string) => {
    const response = await client.get<IComment[]>(`/forum/posts/${id}/comments`);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  return {
    getAllForumCategories,
    getForumCategoryById,
    getAllPostPreviews,
    getPostById,
    createPost,
    createComment,
    savePost,
    upvotePost,
    downvotePost,
    upvoteComment,
    downvoteComment,
    getCommentsByPostId,
  };
};
