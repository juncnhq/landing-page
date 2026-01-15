'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'rooms', href: '#rooms' },
    { key: 'booking', href: '#booking-platforms' },
    { key: 'contact', href: '#booking' }
  ];

  const contactInfo = [
    { key: 'phone', value: '079 494 5654 / 093 859 8718' },
    { key: 'email', value: 'varetreat@gmail.com' },
    { key: 'address', value: 'Bến Than, Thủy Xuân, Huế' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61574560211265',
      hoverBg: 'hover:bg-[#1877f2]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/va_riverside_retreat',
      hoverBg: 'hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      )
    },
    {
      name: 'Booking.com',
      href: 'https://www.booking.com/hotel/vn/va-riverside-retreat-hue.vi.html',
      hoverBg: 'hover:bg-[#003580]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.06 10.00 L3.06 14.00 L6.70 14.00 C7.00 14.00 7.26 13.74 7.26 13.44 L7.26 10.56 C7.26 10.26 7.00 10.00 6.70 10.00 L3.06 10.00 M21.00 10.00 L17.30 10.00 C17.00 10.00 16.74 10.26 16.74 10.56 L16.74 13.44 C16.74 13.74 17.00 14.00 17.30 14.00 L21.00 14.00 L21.00 10.00 M9.06 10.00 L9.06 14.00 L12.70 14.00 C13.00 14.00 13.26 13.74 13.26 13.44 L13.26 10.56 C13.26 10.26 13.00 10.00 12.70 10.00 L9.06 10.00 Z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@variversideretreat',
      hoverBg: 'hover:bg-black',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <footer
        ref={footerRef}
        className={`bg-gradient-to-b from-foreground to-black text-white fade-in-up ${footerVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <img
                  src="/images/Logo.jpg"
                  alt="Vả Riverside Retreat"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-lg"
                />
                <h3 className="text-xl md:text-2xl font-bold text-accent">
                  Vả Riverside Retreat
                </h3>
              </div>
              <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {t('brandDescription')}
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 ${social.hoverBg} rounded-full flex items-center justify-center
                              transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-accent">
                {t('quickLinks')}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2
                               text-sm md:text-base group"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {t(`links.${link.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-accent">
                {t('contactInfo')}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className="text-white/70 text-sm md:text-base">
                    <span className="font-medium text-white">{t(`contactLabels.${info.key}`)}:</span>
                    <br />
                    <span className="text-xs md:text-sm">{info.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-accent">
                {t('newsletter')}
              </h4>
              <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base">
                {t('newsletterDesc')}
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  className="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white/10 border border-white/20 text-white
                           placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary
                           text-sm md:text-base transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 md:py-3
                           rounded-lg transition-all duration-300 btn-hover active:scale-95 touch-manipulation
                           text-sm md:text-base"
                >
                  {t('subscribe')}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
                &copy; {currentYear} Vả Riverside Retreat. {t('allRights')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  {t('privacy')}
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  {t('terms')}
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  {t('cancellation')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 md:bottom-8 right-6 md:right-8 bg-primary hover:bg-primary-dark text-white
                  p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 z-50
                  active:scale-95 touch-manipulation
                  ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
