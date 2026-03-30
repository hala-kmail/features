import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Phone, Clock, Send } from 'lucide-react';
import { getDoctorById } from '../data/doctors';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctorId = Number(id);
  const doctor = Number.isFinite(doctorId) ? getDoctorById(doctorId) : undefined;

  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
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

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً، أود حجز موعد:
اسم المريض: ${formData.patientName}
الطبيب: ${doctor.name}
التاريخ: ${formData.date}
الوقت: ${formData.time}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966506030256?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-teal-600 font-semibold mb-8 hover:text-teal-700"
        >
          <ArrowRight size={20} />
          رجوع
        </button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-teal-600/5 rounded-2xl p-6 md:p-8 border border-teal-100/50"
          >
            <div className="flex flex-col items-center text-center md:items-start md:text-right">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-40 h-40 rounded-3xl object-cover shadow-xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
              <h1 className="text-2xl md:text-3xl font-black text-teal-600 mt-6 mb-2">{doctor.name}</h1>
              <p className="text-pink-500 font-bold text-sm md:text-base mb-4">{doctor.specialty}</p>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
                <Calendar size={16} />
                <span>{doctor.experience}</span>
              </div>
            </div>

            <div className="space-y-6 text-right">
              <div>
                <h2 className="font-bold text-teal-600 mb-2">نبذة عن الطبيب</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{doctor.bio}</p>
              </div>
              <div>
                <h2 className="font-bold text-teal-600 mb-2">الشهادات والخبرات</h2>
                <ul className="space-y-2">
                  {doctor.certificates.map((cert, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
              {doctor.practiceScope && doctor.practiceScope.length > 0 && (
                <div>
                  <h2 className="font-bold text-teal-600 mb-2">نطاق الممارسة</h2>
                  <ul className="space-y-2">
                    {doctor.practiceScope.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-2xl font-black text-teal-600 mb-2">تواصل وحجز موعد</h2>
            <p className="text-slate-600 text-sm mb-6">
              املأ النموذج وسيتم توجيهك إلى واتساب مع تفاصيل الموعد والطبيب المختار.
            </p>
            <form onSubmit={handleWhatsApp} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 flex items-center gap-2">
                  <User size={16} />
                  اسم المريض
                </label>
                <input
                  required
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 flex items-center gap-2">
                  <Phone size={16} />
                  رقم الهاتف
                </label>
                <input
                  required
                  type="tel"
                  placeholder="٠٥xxxxxxxx"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 flex items-center gap-2">
                    <Calendar size={16} />
                    التاريخ
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 flex items-center gap-2">
                    <Clock size={16} />
                    الوقت
                  </label>
                  <input
                    required
                    type="time"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-3 py-4 mt-2"
              >
                <Send size={20} />
                احجز عبر واتساب
              </button>
              <p className="text-center text-xs text-slate-600">
                سيتم توجيهك إلى واتساب لتأكيد الموعد مع {doctor.name}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default DoctorProfilePage;
