export interface NotificationParams {
  id?: string;
  title?: string;
  message: string;
  action?: () => any;
  actionLabel?: string;
  secondAction?: () => any;
  secondActionLabel?: string;
  duration?: number;
}
