export interface IComment {
  id: string;
  createdAt: string;
  message: string;
  createdBy: string;
  likes: number;
  downvotes: number;
  replies: IComment[];
}
