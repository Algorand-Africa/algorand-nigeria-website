export interface IEvent {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

export interface IUpcomingEvent extends IEvent {
  rsvp: string;
}

export interface IPastEvent extends IEvent {
  images: string[];
}
