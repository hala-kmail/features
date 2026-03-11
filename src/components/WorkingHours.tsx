import { motion } from 'motion/react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

const WorkingHours = () => {
  const hours = [
    { day: 'السبت', time: '٩:٠٠ ص - ٨:٠٠ م', status: 'open' },
    { day: 'الأحد', time: '٩:٠٠ ص - ٨:٠٠ م', status: 'open' },
    { day: 'الاثنين', time: '٩:٠٠ ص - ٨:٠٠ م', status: 'open' },
    { day: 'الثلاثاء', time: '٩:٠٠ ص - ٨:٠٠ م', status: 'open' },
    { day: 'الأربعاء', time: '٩:٠٠ ص - ٨:٠٠ م', status: 'open' },
    { day: 'الخميس', time: '٩:٠٠ ص - ٨:٠٠ م', status: 'open' },
    { day: 'الجمعة', time: 'مغلق', status: 'closed' },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-teal-400 font-medium text-sm mb-3">
              <Clock size={18} />
              <span>أوقات العمل</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              نحن هنا لخدمتك
            </h2>
            <p className="text-slate-400 text-sm">
              مواعيد مرنة — يرجى الحجز مسبقاً
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              {hours.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className={`flex justify-between items-center gap-4 px-5 py-3.5 bg-slate-900/80 ${
                    item.status === 'closed' 
                      ? 'text-red-400' 
                      : 'text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className={item.status === 'closed' ? 'text-red-400' : 'text-teal-400 flex-shrink-0'} />
                    <span className="font-medium text-sm">{item.day}</span>
                  </div>
                  <span className="font-semibold text-sm">{item.time}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-teal-500/10 border-t border-white/10">
              <AlertCircle size={16} className="text-teal-400 flex-shrink-0" />
              <p className="text-xs text-slate-300">يرجى الحجز مسبقاً قبل الحضور للعيادة</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingHours;
