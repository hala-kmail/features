import { motion } from 'motion/react';
import { testimonials } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-semibold text-sm tracking-wider uppercase"
          >
            آراء المرضى
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3"
          >
            قصص نجاح وابتسامات سعيدة
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="card-modern p-8 relative"
            >
              <Quote className="absolute top-6 left-6 text-teal-200 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-teal-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                  <p className="text-slate-500 text-sm">مريض سابق</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
