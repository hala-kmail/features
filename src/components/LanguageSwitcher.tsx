import { useLanguage } from '../i18n/LanguageContext';
import type { Locale } from '../i18n/types';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  const options: { code: Locale; label: string }[] = [
    { code: 'ar', label: 'عربي' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div
      className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1 text-sm font-bold"
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setLocale(opt.code)}
          className={`rounded-lg px-3 py-1.5 transition-colors ${
            locale === opt.code
              ? 'bg-teal-500 text-white shadow-sm'
              : 'text-slate-600 hover:text-teal-600'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
