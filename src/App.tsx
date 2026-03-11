import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import WorkingHours from './components/WorkingHours';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-500 z-[60] origin-right"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Doctors />
        <WorkingHours />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/970594056090"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 z-40 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-500/50 transition-shadow"
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 4.7 1.4L22 3l-1 5.5z" />
        </svg>
      </motion.a>
    </div>
  );
}

export default App;
