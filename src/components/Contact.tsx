import { motion } from 'motion/react';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-pink-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-teal-600 font-semibold text-sm tracking-wider uppercase"
            >
              تواصل معنا
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-6 leading-tight"
            >
              هل لديك أي استفسار؟
              <br />
              <span className="text-gradient">نحن هنا للمساعدة</span>
            </motion.h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              فريقنا جاهز للرد على جميع تساؤلاتك وتنسيق موعدك القادم.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: 'اتصل بنا', value: '+966506030256', color: 'teal' },
                { icon: MessageCircle, label: 'واتساب', value: '+966506030256', color: 'pink' },
                { icon: MapPin, label: 'موقعنا', value: 'الرياض، حي الملقا، طريق الملك فهد', color: 'teal' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-6 p-3 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    item.color === 'teal' ? 'bg-teal-50 text-teal-600' : 'bg-pink-50 text-pink-600'
                  }`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900" dir={item.label === 'موقعنا' ? 'rtl' : 'ltr'}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-modern p-10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col items-start">
                  <label className="text-sm font-semibold text-slate-700 ">الاسم الكامل</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك"
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 flex flex-col items-start">
                  <label className="text-sm font-semibold text-slate-700">رقم الهاتف</label>
                  <input
                    type="tel"
                    placeholder="٠٥xxxxxxxx"
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2 flex flex-col items-start">
                <label className="text-sm font-semibold text-slate-700">الخدمة المطلوبة</label>
                <select className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300 appearance-none">
                  <option>زراعة الأسنان</option>
                  <option>تقويم الأسنان</option>
                  <option>تبييض الأسنان</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div className="space-y-2 flex flex-col items-start">
                <label className="text-sm font-semibold text-slate-700">رسالتك</label>
                <textarea
                  rows={4}
                  placeholder="كيف يمكننا مساعدتك؟"
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg font-semibold">
                <Send size={20} />
                إرسال الرسالة
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
