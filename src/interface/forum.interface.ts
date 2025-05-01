export interface IComment {
  id: string;
  createdAt: string;
  message: string;
  createdBy: string;
  likes: number;
  downvotes: number;
  replies: IComment[];
}

export interface IForumCategory {
  createdAt: Date;
  id: string;
  name: string;
  description: string;
  color: string;
  textColor: string;
  image: string;
  totalPosts: number;
}

export type ForumPostStatus = 'answered' | 'open' | 'closed' | 'flagged';

export interface IForumPost {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  categoryTextColor: string;
  createdAt: string;
  numberOfComments: number;
  numberOfUpVotes: number;
  posterUsername: string;
  posterAvatar: string;
  status: ForumPostStatus;
  image: string;
  upVoted: boolean;
  downVoted: boolean;
  saved: boolean;
  message: string;
  images: string[];
}

export type IForumPostPreview = Omit<IForumPost, 'message' | 'images'>;

export interface ICreateForumComment {
  message: string;
  postId: string;
  parentCommentId?: string;
}

export interface ICreateForumPost {
  title: string;
  message: string;
  categoryId: string;
  images: string[];
}
