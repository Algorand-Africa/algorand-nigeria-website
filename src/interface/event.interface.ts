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

export type EventCategory = 'virtual' | 'irl';
export type EventRegistrationStatus = 'registered' | 'attended';
export type EventType = 'webinar' | 'conference' | 'hackathon' | 'other';
export type EventStatus = 'upcoming' | 'past';
export type EventDatePeriod = 'TODAY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY' | 'ALL';
export type UserEventStatus = 'registered' | 'attended' | 'collected_nft';

export interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  date: string;
  category: EventCategory;
  type: EventType;
  status: EventStatus;
  eventSummary: string;
  imageGallery: string[];
  numberOfRegistrations: number;
  numberOfAttendees: number;
  userStatus?: UserEventStatus;
  smartContractId?: string;
  asaId?: string;
}

export interface IGetAllEventsDto {
  page?: number;
  pageSize?: number;
  search?: string;
  order?: 'ASC' | 'DESC';
  sort?: string;
  category?: EventCategory;
  type?: EventType;
  status?: EventStatus;
  datePeriod?: EventDatePeriod;
}
