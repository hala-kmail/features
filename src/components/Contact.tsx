import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { useLanguage } from '../i18n/LanguageContext';

const WHATSAPP_NUMBER = '966539233000';

const Contact = () => {
  const { t, dir } = useLanguage();
  const defaultService = t.contact.serviceOptions[0]?.value ?? 'implants';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
    message: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: t.contact.serviceOptions[0]?.value ?? 'implants',
    }));
  }, [t.contact.serviceOptions]);

  const getServiceLabel = (value: string) =>
    t.contact.serviceOptions.find((o) => o.value === value)?.label ?? value;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tmpl = t.contact.whatsappTemplate;
    const text = `${tmpl.intro}

${tmpl.name} ${formData.name}
${tmpl.phone} ${formData.phone}
${tmpl.service} ${getServiceLabel(formData.service)}

${tmpl.message}
${formData.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const contactItems = [
    { icon: Phone, label: t.contact.callUs, value: t.common.phoneDisplay, color: 'teal' as const },
    { icon: WhatsAppIcon, label: t.contact.whatsapp, value: t.common.phoneDisplay, color: 'whatsapp' as const },
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressParts,
      color: 'teal' as const,
    },
  ];

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 end-0 w-[50%] h-[70%] bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2" />
      <div className="absolute bottom-0 start-0 w-[40%] h-[60%] bg-pink-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-teal-600 font-semibold text-sm tracking-wider uppercase"
            >
              {t.contact.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-6 leading-tight"
            >
              {t.contact.titleLine1}
              <br />
              <span className="text-gradient">{t.contact.titleLine2}</span>
            </motion.h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">{t.contact.description}</p>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-6 p-3 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      item.color === 'whatsapp'
                        ? 'bg-[#25D366]/10 text-[#25D366]'
                        : 'bg-teal-50 text-teal-600'
                    }`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {Array.isArray(item.value) ? (
                      <p
                        className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base font-bold text-slate-900"
                        dir={dir}
                      >
                        {item.value.map((part, i) => (
                          <span key={part} className="inline-flex items-center gap-3">
                            {i > 0 && (
                              <span className="text-teal-300 font-normal" aria-hidden>
                                ·
                              </span>
                            )}
                            {part}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p className="text-lg font-bold text-slate-900" dir="ltr">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-modern p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col items-start">
                  <label className="text-sm font-semibold text-slate-700">{t.contact.fullName}</label>
                  <input
                    required
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2 flex flex-col items-start">
                  <label className="text-sm font-semibold text-slate-700">{t.contact.phone}</label>
                  <input
                    required
                    type="tel"
                    placeholder={t.common.phonePlaceholder}
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2 flex flex-col items-start">
                <label className="text-sm font-semibold text-slate-700">{t.contact.service}</label>
                <select
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300 appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {t.contact.serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 flex flex-col items-start">
                <label className="text-sm font-semibold text-slate-700">{t.contact.message}</label>
                <textarea
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/25 active:scale-[0.98]"
              >
                <WhatsAppIcon size={22} />
                {t.contact.submitWhatsApp}
              </button>
              <p className="text-center text-xs text-slate-500">{t.contact.submitHint}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
