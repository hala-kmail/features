import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-teal-50/80 via-white to-pink-50/50" />
      <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-teal-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-pink-100/40 rounded-full blur-[100px]" />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Image as background on the left - not full width, rounded left edges */}
      <div className="absolute left-4 lg:left-20 top-24 bottom-0 w-[calc(100%-2rem)] lg:w-[60%] overflow-hidden rounded-l-3xl">
        <img
          src="/tooth2.jpg"
          alt="عيادة الأسنان"
          className="absolute left-0 top-0 h-full w-full object-cover object-left"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex  min-h-[calc(100vh-6rem)] pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xl lg:max-w-lg flex flex-col justify-start py-16 text-center lg:text-right"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-medium mb-8 mx-auto lg:mx-0"
          >
            <Sparkles size={16} className="text-pink-500" />
            عيادة فيتشرز لطب الأسنان
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            ابتسامتك تبدأ
            <br />
            <span className="text-gradient">من هنا</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            نجمع بين الخبرة الطبية والتقنيات الحديثة لنمنحك الابتسامة التي تستحقها. رعاية شاملة في بيئة مريحة وآمنة.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center"
          >
            <a href="#contact" className="w-fit btn-primary flex items-center gap-2 text-lg px-8 py-4">
              <Calendar size={20} />
              احجز موعدك الآن
            </a>
            <a href="#services" className="w-fit flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
              اكتشف خدماتنا
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 flex items-center gap-5"
          >
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="Patient"
                  className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <p className="text-slate-900 font-bold">+٥٠٠٠ مريض سعيد</p>
              <p className="text-slate-500 text-sm">يثقون بنا ونثق بهم</p>
            </div>
          </motion.div> */}

        
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
