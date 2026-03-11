import { motion } from 'motion/react';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-semibold text-sm tracking-wider uppercase"
          >
            خدماتنا المتميزة
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight"
          >
            رعاية صحية
            <br />
            <span className="text-gradient">بأعلى المعايير</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="card-modern p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:scale-110 transition-all duration-300">
                  <service.icon size={28} className="text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>اقرأ المزيد</span>
                  <span className="w-8 h-0.5 bg-teal-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
