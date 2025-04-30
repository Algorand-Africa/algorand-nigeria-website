export interface IComment {
  id: string;
  createdAt: string;
  message: string;
  createdBy: string;
  likes: number;
  downvotes: number;
  replies: IComment[];
}

export interface ICategory {
  createdAt: Date;
  id: string;
  name: string;
  description: string;
  color: string;
  textColor: string;
  image: string;
  totalPosts: number;
}
