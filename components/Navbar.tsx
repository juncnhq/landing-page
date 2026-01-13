'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
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
    { name: 'Trang Chủ', href: '#hero' },
    { name: 'Về Chúng Tôi', href: '#about' },
    { name: 'Phòng', href: '#rooms' },
    { name: 'Tiện Nghi', href: '#amenities' },
    { name: 'Đánh Giá', href: '#testimonials' },
    { name: 'Vị Trí', href: '#location' },
    { name: 'Đặt Phòng', href: '#booking-platforms' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Vả Riverside Retreat
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking-platforms"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Liên Hệ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-foreground hover:bg-neutral hover:text-primary rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking-platforms"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 mt-2 bg-primary hover:bg-primary-dark text-white text-center font-semibold px-6 py-3 rounded-full transition-all"
            >
              Liên Hệ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
