import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialIcons = [Instagram, Twitter, Facebook, Youtube];
  
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <img 
              src="/logo.png" 
              alt="فيتشرز لطب الأسنان" 
              className="h-24 w-auto object-contain brightness-0 invert opacity-90"
              referrerPolicy="no-referrer"
            />
            <p className="text-slate-400 leading-relaxed max-w-xs">
              ملتزمون بتقديم أعلى معايير الجودة في طب الأسنان، مع التركيز على راحة المريض ونتائج تدوم طويلاً.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-500/20 hover:border-teal-500/30 transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              {['الرئيسية', 'الخدمات', 'أطباؤنا', 'آراء المرضى', 'احجز موعد'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">خدماتنا</h4>
            <ul className="space-y-4">
              {['زراعة الأسنان', 'تقويم الأسنان', 'تبييض الأسنان', 'علاج الجذور', 'تجميل الأسنان'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">النشرة البريدية</h4>
            <p className="text-slate-400 text-sm mb-4">اشترك للحصول على أحدث النصائح والعروض.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 p-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
              />
              <button className="px-6 py-4 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition-colors">
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} فيتشرز لطب الأسنان. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
