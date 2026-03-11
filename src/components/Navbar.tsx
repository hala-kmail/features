import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الخدمات', href: '#services' },
    { name: 'أطباؤنا', href: '#doctors' },
    { name: 'آراء المرضى', href: '#testimonials' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 py-2' 
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="فيتشرز لطب الأسنان" 
            className="h-18 md:h-14 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('.fallback-logo')) {
                const fallback = document.createElement('div');
                fallback.className = 'fallback-logo flex items-center gap-2';
                fallback.innerHTML = '<div class="w-10 h-10 rounded-xl flex items-center justify-center bg-teal-500"><span class="text-white font-bold text-xl">F</span></div>';
                parent.appendChild(fallback);
              }
            }}
          />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative font-medium py-2 transition-colors group text-slate-600 hover:text-teal-600"
            >
              {link.name}
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/25"
          >
            <Phone size={18} />
            احجز موعد
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg transition-colors text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-slate-700 hover:text-teal-600 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                احجز موعد
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
