import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import { motion } from 'motion/react';
import WhatsAppIcon from './components/icons/WhatsAppIcon';
import { useLanguage } from './i18n/LanguageContext';

function App() {
  const { t } = useLanguage();

  return (
    <div className="relative">

      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
      </Routes>

      <Footer />

      <motion.a
        href="https://wa.me/966539233000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.whatsappAria}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-shadow hover:bg-[#20bd5a] hover:shadow-[#25D366]/50"
      >
        <WhatsAppIcon size={34} />
      </motion.a>
    </div>
  );
}

export default App;
