export interface IEvent {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  id: string;
}

export interface IUpcomingEvent extends IEvent {
  rsvp: string;
}

export interface GalleryImage {
  url: string;
  alt?: string;
  fullWidth?: boolean; // true if image should span both columns on desktop
}

export interface IPastEvent extends IEvent {
  images: GalleryImage[];
  descriptionParagraphs: string[];
}
