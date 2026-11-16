export type Page = 'home' | 'services' | 'about' | 'service-areas' | 'faqs' | 'blog' | 'contact';

export type ServiceType =
  | 'dog-walking'
  | 'in-home-feeding'
  | 'basic-pet-care'
  | 'short-term-sitting'
  | 'combination-other';

export interface ServiceItem {
  id: ServiceType;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  keyPoints: string[];
  idealFor: string;
  frequency: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  suburbOrPostcode: string;
  petType: 'dog' | 'cat' | 'both';
  petCount: string;
  service: ServiceType;
  preferredDate: string;
  preferredTime: string;
  additionalRequirements: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking & Process' | 'Pet Care & Routines' | 'Service Areas' | 'Changes & Assistance';
}

export interface AdelaideArea {
  region: string;
  description: string;
  suburbs: string[];
  status: 'Covered' | 'Subject to confirmation';
}
