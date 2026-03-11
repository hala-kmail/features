import { useState } from 'react';
import { motion } from 'motion/react';
import { doctors } from '../data/doctors';
import DoctorModal from './DoctorModal';
import { Plus } from 'lucide-react';

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-white/80 text-sm mb-4">{doctor.experience}</p>
                  <button
                    onClick={() => handleOpenModal(doctor)}
                    className="w-12 h-12 rounded-xl bg-white text-teal-600 flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                  >
                    <Plus size={24} />
                  </button>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                <p className="text-teal-600 font-semibold mt-1">{doctor.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <DoctorModal
        doctor={selectedDoctor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Doctors;
