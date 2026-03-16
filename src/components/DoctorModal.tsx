import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Clock, Send, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  certificates: string[];
}

interface DoctorModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
}

const DoctorModal = ({ doctor, isOpen, onClose }: DoctorModalProps) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    date: '',
    time: '',
  });
  const [mobileView, setMobileView] = useState<'info' | 'form'>('info');

  useEffect(() => {
    if (isOpen) {
      setMobileView('info');
    }
  }, [isOpen]);

  if (!doctor) return null;

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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl glass-card overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-20 p-2 bg-white/50 rounded-full hover:bg-white transition-colors"
            >
              <X size={24} className="text-teal-600" />
            </button>

            {/* Mobile: step 1 - Doctor Info + Book button */}
            <div className="md:hidden flex flex-col h-full">
              <AnimatePresence mode="wait">
                {mobileView === 'info' ? (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1 overflow-y-auto p-6 pb-8 bg-teal-600/5"
                  >
                    <div className="flex flex-col items-center text-center pt-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-32 h-32 rounded-2xl object-cover shadow-lg border-4 border-white"
                        referrerPolicy="no-referrer"
                      />
                      <h3 className="text-xl font-bold text-teal-600 mt-4 mb-1">{doctor.name}</h3>
                      <p className="text-pink-500 font-semibold text-sm mb-2">{doctor.specialty}</p>
                      {/* <div className="flex items-center gap-2 text-xs text-slate-600 mb-4">
                        <Calendar size={14} />
                        <span>{doctor.experience}</span>
                      </div> */}
                    </div>
                    <div className="space-y-4 text-right flex-1">
                      <div>
                        <h4 className="font-bold text-teal-600 text-sm mb-1">نبذة عن الطبيب</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{doctor.bio}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-teal-600 text-sm mb-1">الشهادات والخبرات</h4>
                        <ul className="space-y-1">
                          {doctor.certificates.map((cert, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0" />
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMobileView('form')}
                      className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 mt-6"
                    >
                      <Calendar size={20} />
                      احجز موعد
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1 overflow-y-auto p-6 pb-8 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setMobileView('info')}
                      className="flex items-center gap-2 text-teal-600 font-semibold mb-6 w-fit"
                    >
                      <ArrowRight size={20} />
                      رجوع لمعلومات الطبيب
                    </button>
                    <h3 className="text-xl font-bold text-teal-600 mb-4">حجز موعد سريع</h3>
                    <form onSubmit={handleWhatsApp} className="space-y-4 flex-1">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600 flex items-center gap-2">
                          <User size={16} />
                          اسم المريض
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="أدخل اسمك الكامل"
                          className="w-full p-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
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
                          className="w-full p-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
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
                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
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
                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full btn-primary flex items-center justify-center gap-3 py-4 mt-4"
                      >
                        <Send size={20} />
                        احجز عبر واتساب
                      </button>
                      <p className="text-center text-xs text-slate-600 mt-3">
                        سيتم توجيهك إلى واتساب لتأكيد الموعد
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop: both panels side by side */}
            <>
              <div className="hidden md:block md:w-1/2 bg-teal-600/5 p-8 overflow-y-auto">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-40 h-40 rounded-3xl object-cover shadow-xl mb-6 border-4 border-white"
                    referrerPolicy="no-referrer"
                  />
                  <h3 className="text-2xl font-black text-teal-600 mb-2">{doctor.name}</h3>
                  <p className="text-pink-500 font-bold mb-4">{doctor.specialty}</p>
                  {/* <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
                    <Calendar size={16} />
                    <span>{doctor.experience}</span>
                  </div> */}
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-teal-600 mb-2">نبذة عن الطبيب</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{doctor.bio}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-600 mb-2">الشهادات والخبرات</h4>
                    <ul className="space-y-2">
                      {doctor.certificates.map((cert, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2 p-8 bg-white overflow-y-auto">
                <h3 className="text-2xl font-black text-teal-600 mb-6">حجز موعد سريع</h3>
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
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
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
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
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
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
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
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-3 py-4 mt-6"
                  >
                    <Send size={20} />
                    احجز عبر واتساب
                  </button>
                  <p className="text-center text-xs text-slate-600 mt-4">
                    سيتم توجيهك مباشرة إلى واتساب لتأكيد الموعد
                  </p>
                </form>
              </div>
            </>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DoctorModal;
