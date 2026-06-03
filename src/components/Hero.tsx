import { motion } from 'motion/react';
import { Calendar, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t, isRtl } = useLanguage();
  const ExploreIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden gradient-mesh">
      <div className="absolute inset-0 bg-gradient-to-bl from-teal-50/80 via-white to-pink-50/50" />
      <div className="absolute top-0 end-0 w-[50%] h-[60%] bg-teal-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 start-0 w-[40%] h-[50%] bg-pink-100/40 rounded-full blur-3xl" />

      {/* عربي: الصورة يسار | إنجليزي: الصورة يمين — عبر end */}
      <div className="absolute end-4 lg:end-20 top-24 bottom-0 w-[calc(100%-2rem)] lg:w-[60%] overflow-hidden rounded-3xl md:rounded-s-none md:rounded-e-3xl">
        <img
          src="/tooth2.webp"
          alt={t.hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* تدرج أبيض جهة النص (start) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent rtl:bg-gradient-to-l rtl:from-white rtl:via-white/85 rtl:to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex min-h-[calc(100vh-6rem)] pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xl lg:max-w-lg flex flex-col justify-start py-16 text-center lg:text-start"
        >
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-medium mb-8 mx-auto lg:mx-0"
          >
            <Sparkles size={16} className="text-pink-500" />
            {t.hero.badge}
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            {t.hero.titleLine1}
            <br />
            <span className="text-gradient">{t.hero.titleLine2}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center"
          >
            <a href="#contact" className="w-fit btn-primary flex items-center gap-2 text-lg px-8 py-4">
              <Calendar size={20} />
              {t.hero.ctaBook}
            </a>
            <a
              href="#services"
              className="w-fit flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
            >
              {t.hero.ctaServices}
              <ExploreIcon size={20} className="ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
