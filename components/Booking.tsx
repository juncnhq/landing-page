'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function Booking() {
  const t = useTranslations('booking');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible, getStaggerDelay } = useStaggerAnimation(4, { staggerDelay: 100 });
  const { ref: priceRef, isVisible: priceVisible } = useScrollAnimation();

  const contactCards = [
    {
      key: 'phone',
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      content: (
        <>
          <a href="tel:+84794945654" className="text-primary hover:text-primary-dark block text-base md:text-lg mb-2 font-medium transition-colors">
            079 494 5654
          </a>
          <a href="tel:+84938598718" className="text-primary hover:text-primary-dark block text-base md:text-lg font-medium transition-colors">
            093 859 8718
          </a>
        </>
      )
    },
    {
      key: 'email',
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      content: (
        <>
          <a href="mailto:varetreat@gmail.com" className="text-primary hover:text-primary-dark block text-base md:text-lg mb-2 font-medium transition-colors break-all">
            varetreat@gmail.com
          </a>
          <a href="mailto:variversideretreat@gmail.com" className="text-primary hover:text-primary-dark block text-xs md:text-sm transition-colors break-all">
            variversideretreat@gmail.com
          </a>
        </>
      )
    },
    {
      key: 'workingHours',
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      isText: true
    },
    {
      key: 'address',
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      isText: true
    }
  ];

  const featureKeys = ['price', 'checkInOut', 'freeWifi', 'freeSup', 'pool', 'nearKhaiDinh'];

  return (
    <section id="booking" className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-white to-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            {t('title')}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed px-2">
            {t('description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {contactCards.map((card, index) => (
              <div
                key={card.key}
                className={`stagger-item flex items-start gap-3 md:gap-4 bg-white rounded-xl p-5 md:p-8 shadow-lg card-hover
                  ${cardsVisible ? 'visible' : ''}`}
                style={getStaggerDelay(index)}
              >
                <div className="text-primary mt-1 icon-hover">
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {t(card.key === 'phone' ? 'phone' : card.key === 'email' ? 'email' : card.key === 'workingHours' ? 'workingHours' : 'addressTitle')}
                  </h3>
                  {card.isText ? (
                    <p className="text-foreground/70 text-base md:text-lg whitespace-pre-line">
                      {t(card.key === 'workingHours' ? 'workingHoursValue' : 'addressValue')}
                    </p>
                  ) : (
                    card.content
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Price Info Box */}
          <div
            ref={priceRef}
            className={`bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 md:p-8 lg:p-10
              scale-in ${priceVisible ? 'visible' : ''}`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
              {t('pricePolicy')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {featureKeys.map((key, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 md:gap-3 group"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base">{t(`features.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
