import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Award, Calendar, CheckCircle2, Clock, Phone, Sparkles, User } from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { getDoctorById } from '../data/doctors';
import OptimizedImage from '../components/OptimizedImage';
import ToothIcon from '../components/icons/ToothIcon';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctorId = Number(id);
  const doctor = Number.isFinite(doctorId) ? getDoctorById(doctorId) : undefined;

  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  if (!doctor) {
    return (
      <main className="min-h-screen pt-28 pb-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-600 mb-6">لم يتم العثور على الطبيب.</p>
          <Link to="/#doctors" className="btn-primary inline-flex">
            العودة إلى الأطباء
          </Link>
        </div>
      </main>
    );
  }

  const doctorServices = doctor.practiceScope && doctor.practiceScope.length > 0
    ? doctor.practiceScope
    : ['استشارة طب الأسنان', 'الفحص والتشخيص'];

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedService = formData.service || doctorServices[0];
    const message = `مرحباً، أود حجز موعد:
اسم المريض: ${formData.patientName}
رقم الهاتف: ${formData.phone}
الطبيب: ${doctor.name}
الخدمة المطلوبة: ${selectedService}
التاريخ: ${formData.date}
الوقت: ${formData.time}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966539233000?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 pt-24 pb-14">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-teal-100/60 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-pink-100/60 blur-2xl pointer-events-none" />

      <div className="container relative z-10 mx-auto p-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-5 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-teal-700 shadow-sm transition-all hover:bg-teal-50"
        >
          <ArrowRight size={18} />
          رجوع
        </button>

        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white/85 p-5 shadow-sm shadow-slate-200/50 backdrop-blur md:p-6"
          >
            <section className="relative overflow-hidden border-b border-slate-100 pb-5">
              <div className="absolute inset-0 gradient-mesh opacity-50" />
              <div className="relative flex flex-col gap-5 md:flex-row-reverse md:items-center">
                <div className="relative mx-auto h-52 w-full overflow-hidden rounded-[1.5rem] bg-slate-100 md:mx-0 md:h-60 md:w-52 md:shrink-0">
                  <OptimizedImage
                    src={doctor.image}
                    alt={doctor.name}
                    loading="eager"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                    <span className="inline-flex rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-teal-700 shadow-sm">
                      {doctor.experience}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1 text-right">
                  <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700">
                    <Sparkles size={14} />
                    الملف الطبي
                  </div>
                  <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">{doctor.name}</h1>
                  <p className="mt-2 text-base font-bold leading-relaxed text-pink-500">{doctor.specialty}</p>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{doctor.bio}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3 py-2 text-xs font-bold text-slate-700">
                      <Calendar size={15} className="text-teal-600" />
                      {doctor.experience}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-3 py-2 text-xs font-bold text-slate-700">
                      <ToothIcon size={15} className="text-pink-500" />
                      {doctorServices.length} خدمات
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-5">
              <div className="mb-4 flex items-center gap-3 text-right">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-100">
                  <ToothIcon size={21} />
                </span>
                <div>
                  <h2 className="text-xl font-black text-slate-900">خدمات الطبيب</h2>
                  <p className="text-xs text-slate-500">اختر الخدمة المناسبة عند الحجز</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {doctorServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-700 ring-1 ring-slate-100 transition-colors hover:bg-teal-50"
                  >
                    <CheckCircle2 size={18} className="shrink-0 text-teal-600" />
                    {service}
                  </div>
                ))}
              </div>
            </section>

            {doctor.certificates.length > 0 && (
              <section className="border-t border-slate-100 pt-5">
                <div className="mb-4 flex items-center gap-3 text-right">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-50 text-pink-500 ring-1 ring-pink-100">
                    <Award size={21} />
                  </span>
                  <div>
                    <h2 className="text-xl font-black text-slate-900">الشهادات والخبرات</h2>
                    <p className="text-xs text-slate-500">مؤهلات وخبرات الطبيب</p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {doctor.certificates.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 text-sm leading-7 text-slate-700 ring-1 ring-slate-100"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-500" />
                      {cert}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="h-full"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-teal-100 bg-white shadow-2xl shadow-teal-100/70">
              <div className="bg-gradient-to-l from-teal-600 to-teal-500 p-7 text-white">
                <p className="mb-2 text-sm font-bold text-teal-50">حجز موعد</p>
                <h2 className="text-3xl font-black">احجز مع {doctor.name}</h2>
                <p className="mt-3 text-sm leading-7 text-teal-50">
                  املأ البيانات وسيتم فتح واتساب برسالة جاهزة لتأكيد الموعد.
                </p>
              </div>

              <form onSubmit={handleWhatsApp} className="flex flex-1 flex-col space-y-4 p-7">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <User size={16} />
                    اسم المريض
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Phone size={16} />
                    رقم الهاتف
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="٠٥xxxxxxxx"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <ToothIcon size={16} />
                    الخدمة المطلوبة
                  </label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                    value={formData.service || doctorServices[0]}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    {doctorServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Calendar size={16} />
                      التاريخ
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Clock size={16} />
                      الوقت
                    </label>
                    <input
                      required
                      type="time"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/25 active:scale-[0.98]"
                >
                  <WhatsAppIcon size={22} />
                  احجز عبر واتساب
                </button>
                <p className="text-center text-xs leading-6 text-slate-500">
                  سيتم توجيهك إلى واتساب لتأكيد الموعد مع {doctor.name}
                </p>
              </form>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
};

export default DoctorProfilePage;
