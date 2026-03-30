import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { Plus } from 'lucide-react';

const Doctors = () => {
  return (
    <section id="doctors" className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-semibold text-sm tracking-wider uppercase"
          >
            نخبة الأطباء
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3"
          >
            فريق طبي متخصص لرعايتك
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 gap-3">
                  <Link
                    to={`/doctor/${doctor.id}`}
                    className="inline-flex items-center gap-3 rounded-xl bg-white text-teal-600 px-4 py-3 shadow-xl hover:scale-[1.02] transition-transform w-fit max-w-full"
                    aria-label={`تعرف على ${doctor.name}`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                      <Plus size={22} />
                    </span>
                    <span className="font-bold text-sm text-slate-800">تعرف على الطبيب</span>
                  </Link>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                <p className="text-teal-600 font-semibold mt-1">{doctor.specialty}</p>
                <Link
                  to={`/doctor/${doctor.id}`}
                  className="inline-block mt-3 text-sm font-bold text-teal-600 hover:text-teal-700 underline-offset-4 hover:underline"
                >
                  تعرف على الطبيب
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
