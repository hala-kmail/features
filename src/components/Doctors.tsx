import { Link } from 'react-router-dom';
import { ArrowUpLeft, ArrowUpRight, CalendarCheck, Users } from 'lucide-react';
import ToothIcon from './icons/ToothIcon';
import OptimizedImage from './OptimizedImage';
import { useLanguage } from '../i18n/LanguageContext';

const Doctors = () => {
  const { t, isRtl } = useLanguage();
  const doctors = t.doctors.list;
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="doctors" className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase">
            {t.doctors.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
            {t.doctors.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group h-full transition-transform duration-300 hover:-translate-y-2"
            >
              <Link
                to={`/doctor/${doctor.id}`}
                className="relative block h-full overflow-hidden rounded-[2.25rem] border border-white/80 bg-white p-3 shadow-xl shadow-slate-200/60 transition-shadow duration-300 group-hover:border-teal-100 group-hover:shadow-2xl group-hover:shadow-teal-100/70"
                aria-label={t.doctors.viewProfileAria(doctor.name)}
              >
                <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950">
                  <div className="absolute start-5 top-5 z-10 rounded-full border border-white/20 bg-slate-900/50 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg">
                    {doctor.experience}
                  </div>
                  <div className="absolute end-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/95 text-teal-600 shadow-lg">
                    <ToothIcon size={20} />
                  </div>
                  <OptimizedImage
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    fetchPriority="low"
                    className="h-[26rem] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] will-change-transform"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(20,184,166,0.18),transparent_34%),linear-gradient(to_top,rgba(15,23,42,0.78),rgba(15,23,42,0.08),transparent)] pointer-events-none" />
                  <div className="absolute inset-x-5 bottom-5 pointer-events-none">
                    <div className="rounded-3xl border border-white/15 bg-slate-950/40 p-3 text-start shadow-2xl">
                      <h3 className="text-2xl font-black leading-tight text-white">{doctor.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-5 text-start">
                  <p className="min-h-12 text-sm font-bold leading-relaxed text-slate-600">
                    {doctor.specialty}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {doctor.practiceScope.slice(0, 2).map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-3 rounded-3xl bg-slate-50 p-3 ring-1 ring-slate-100 transition-colors group-hover:bg-teal-50/70">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-pink-500 shadow-sm">
                        <CalendarCheck size={20} />
                      </span>
                      <div>
                        <p className="text-sm font-black text-slate-900">{t.doctors.bookCardTitle}</p>
                        <p className="text-xs font-semibold text-slate-500">{t.doctors.bookCardSubtitle}</p>
                      </div>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg shadow-teal-500/25 transition-transform duration-300 group-hover:-translate-y-1 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                      <ArrowIcon size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-100 bg-teal-50/80 px-5 py-2.5 shadow-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-white">
              <Users size={14} />
            </span>
            <span className="text-sm font-semibold text-teal-700">{t.doctors.moreDoctors}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
