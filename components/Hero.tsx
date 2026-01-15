'use client';

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Animated Overlay */}
      <div className="absolute inset-0">
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10 z-10 opacity-60" />

        {/* Background image with zoom animation */}
        <div className="absolute inset-0 hero-bg gpu-accelerate">
          <Image
            src="/images/pool.jpg"
            alt="Vả Riverside Retreat"
            fill
            priority
            className="object-cover w-full h-full"
            sizes="100vw"
          />
        </div>

        {/* Subtle animated particles/dots overlay for depth */}
        <div className="absolute inset-0 z-10 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
                             radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '100px 100px, 150px 150px, 80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Main Heading with staggered animation */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {t('title')}
            <span className="block mt-2 md:mt-3 text-accent drop-shadow-lg">
              {t('subtitle')}
            </span>
          </h1>

          {/* Subtitle with animation delay */}
          <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4">
            {t('description')}
          </p>

          {/* CTA Button with enhanced effects */}
          <div className="hero-cta pt-6 md:pt-8">
            <a
              href="#booking-platforms"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold
                       px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg
                       shadow-2xl btn-hover pulse-glow
                       active:scale-95 touch-manipulation"
            >
              {t('cta')}
            </a>
          </div>

          {/* Trust badges - mobile optimized */}
          <div className="hero-cta pt-4 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{t('badge1')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{t('badge2')}</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - smooth animation */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 hero-scroll">
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-xs sm:text-sm font-light tracking-wider">{t('scroll')}</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}
