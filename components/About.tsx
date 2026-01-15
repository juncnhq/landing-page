'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const t = useTranslations('about');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible, getStaggerDelay } = useStaggerAnimation(4, { staggerDelay: 150 });

  const highlights = [
    {
      key: 'pool',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      key: 'sup',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
    },
    {
      key: 'heritage',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      key: 'rating',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 bg-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            {t('title')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed px-2">
            {t('description')}
          </p>
        </div>

        {/* Highlights Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {highlights.map((highlight, index) => (
            <div
              key={highlight.key}
              className={`stagger-item bg-white rounded-2xl p-6 md:p-8 shadow-lg card-hover
                ${gridVisible ? 'visible' : ''}`}
              style={getStaggerDelay(index)}
            >
              <div className="text-primary mb-4 icon-hover inline-block">
                {highlight.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                {t(`highlights.${highlight.key}.title`)}
              </h3>
              <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                {t(`highlights.${highlight.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
