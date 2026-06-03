import type { Locale, DoctorTranslation } from '../i18n/types';
import { translations } from '../i18n/translations';

export type Doctor = DoctorTranslation;

export function getDoctors(locale: Locale): Doctor[] {
  return translations[locale].doctors.list;
}

export function getDoctorById(id: number, locale: Locale): Doctor | undefined {
  return getDoctors(locale).find((d) => d.id === id);
}
