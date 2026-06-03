export type Locale = 'ar' | 'en';

export type DoctorTranslation = {
  id: number;
  image: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  certificates: string[];
  practiceScope: string[];
};

export type ServiceTranslation = {
  id: number;
  title: string;
  description: string;
};

export type WorkingHourTranslation = {
  day: string;
  time: string;
  status: 'open' | 'closed';
};

export type Translations = {
  meta: { title: string };
  common: {
    brand: string;
    bookAppointment: string;
    whatsappAria: string;
    phonePlaceholder: string;
    phoneDisplay: string;
  };
  nav: {
    home: string;
    services: string;
    doctors: string;
    contact: string;
  };
  hero: {
    imageAlt: string;
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaBook: string;
    ctaServices: string;
  };
  services: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    items: ServiceTranslation[];
  };
  doctors: {
    eyebrow: string;
    title: string;
    viewProfileAria: (name: string) => string;
    bookCardTitle: string;
    bookCardSubtitle: string;
    moreDoctors: string;
    list: DoctorTranslation[];
    defaultServices: string[];
  };
  workingHours: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    schedule: WorkingHourTranslation[];
  };
  contact: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    callUs: string;
    whatsapp: string;
    address: string;
    addressParts: string[];
    fullName: string;
    phone: string;
    service: string;
    message: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    submitWhatsApp: string;
    submitHint: string;
    serviceOptions: { value: string; label: string }[];
    whatsappTemplate: {
      intro: string;
      name: string;
      phone: string;
      service: string;
      message: string;
    };
  };
  doctorProfile: {
    notFound: string;
    backToDoctors: string;
    back: string;
    medicalFile: string;
    servicesCount: (n: number) => string;
    servicesTitle: string;
    servicesSubtitle: string;
    certificatesTitle: string;
    certificatesSubtitle: string;
    bookingEyebrow: string;
    bookingTitle: (name: string) => string;
    bookingDescription: string;
    patientName: string;
    patientNamePlaceholder: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    submitWhatsApp: string;
    submitHint: (name: string) => string;
    whatsappTemplate: {
      intro: string;
      patientName: string;
      phone: string;
      doctor: string;
      service: string;
      date: string;
      time: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    ourServices: string;
    copyright: (year: number) => string;
    links: { label: string; href: string }[];
    serviceLinks: { label: string; href: string }[];
  };
};
