'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      setIsMenuAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsMenuAnimating(false);
      }, 250);
    } else {
      setIsMobileMenuOpen(true);
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      setIsMenuAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsMenuAnimating(false);
      }, 250);
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t('home'), href: '#hero' },
    { name: t('about'), href: '#about' },
    { name: t('rooms'), href: '#rooms' },
    { name: t('amenities'), href: '#amenities' },
    { name: t('testimonials'), href: '#testimonials' },
    { name: t('location'), href: '#location' },
    { name: t('booking'), href: '#booking-platforms' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-b from-black/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 transition-all duration-300"
            >
              <img
                src="/images/Logo.jpg"
                alt="Vả Riverside Retreat"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md"
              />
              <span className={`text-lg md:text-xl font-bold hidden sm:block ${
                isScrolled ? 'text-primary' : 'text-white drop-shadow-md'
              }`}>
                Vả Riverside
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`font-medium text-sm xl:text-base transition-all duration-300 hover:text-primary relative
                    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary
                    after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <LanguageSwitcher isScrolled={isScrolled} />
              <a
                href="#booking-platforms"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-full
                         transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/30
                         active:scale-95"
              >
                {t('contact')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher isScrolled={isScrolled} />
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg transition-all duration-300 touch-manipulation
                  ${isScrolled ? 'text-foreground' : 'text-white'}
                  ${isMobileMenuOpen ? 'bg-neutral' : ''}`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ease-out
                      ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}
                  />
                  <span
                    className={`absolute left-0 top-3 block w-6 h-0.5 bg-current transition-all duration-200
                      ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}
                  />
                  <span
                    className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ease-out
                      ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {(isMobileMenuOpen || isMenuAnimating) && (
          <div
            className={`lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-white/98 backdrop-blur-lg
              ${isMenuAnimating && !isMobileMenuOpen ? 'mobile-menu-exit' : 'mobile-menu-enter'}`}
          >
            <div className="h-full overflow-y-auto overscroll-contain px-4 py-6">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-4 text-lg text-foreground hover:bg-neutral hover:text-primary
                             rounded-xl transition-all duration-200 active:scale-98
                             border-b border-neutral/50 last:border-0"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      opacity: isMenuAnimating && !isMobileMenuOpen ? 0 : 1,
                      transform: isMenuAnimating && !isMobileMenuOpen ? 'translateX(-10px)' : 'translateX(0)',
                      transition: `opacity 0.2s ease ${index * 50}ms, transform 0.2s ease ${index * 50}ms`
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 px-4">
                <a
                  href="#booking-platforms"
                  onClick={closeMobileMenu}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center
                           font-semibold py-4 rounded-full transition-all duration-300
                           shadow-lg active:scale-95"
                >
                  {t('contactNow')}
                </a>
              </div>

              {/* Quick Contact Info */}
              <div className="mt-8 px-4 pt-6 border-t border-neutral">
                <p className="text-sm text-foreground/60 mb-3">{t('quickContact')}</p>
                <div className="space-y-3">
                  <a
                    href="tel:+84794945654"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">079 494 5654</span>
                  </a>
                  <a
                    href="tel:+84938598718"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">093 859 8718</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
