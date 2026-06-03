import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import SnapchatIcon from './icons/SnapchatIcon';
import TikTokIcon from './icons/TikTokIcon';
import XIcon from './icons/XIcon';
import { useLanguage } from '../i18n/LanguageContext';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/featuresclinics?igsh=d2UwNzI2NzB4YTN2',
    icon: Instagram,
  },
  {
    label: 'Snapchat',
    href: 'https://snapchat.com/t/GtdRDFJu',
    icon: SnapchatIcon,
  },
  {
    label: 'X',
    href: 'https://x.com/featuresclinics?s=11',
    icon: XIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@featuresdentalclinics?_r=1&_t=ZS-96u3jUsW4F2',
    icon: TikTokIcon,
  },
] as const;

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <img
              src="/logo.png"
              alt={t.common.brand}
              className="h-24 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-slate-400 leading-relaxed max-w-xs">{t.footer.description}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-teal-500/30 hover:bg-teal-500/20 hover:text-white overflow-hidden"
                  >
                    <Icon size={social.label === 'Snapchat' ? 28 : 20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              {t.footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.ourServices}</h4>
            <ul className="space-y-4">
              {t.footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">{t.footer.copyright(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
