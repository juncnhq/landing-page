'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function BookingPlatforms() {
  const t = useTranslations('bookingPlatforms');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible, getStaggerDelay } = useStaggerAnimation(5, { staggerDelay: 100 });
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();

  const platforms = [
    {
      key: 'booking',
      name: 'Booking.com',
      rating: '9.8/10',
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.06 10.00 L3.06 14.00 L6.70 14.00 C7.00 14.00 7.26 13.74 7.26 13.44 L7.26 10.56 C7.26 10.26 7.00 10.00 6.70 10.00 L3.06 10.00 M21.00 10.00 L17.30 10.00 C17.00 10.00 16.74 10.26 16.74 10.56 L16.74 13.44 C16.74 13.74 17.00 14.00 17.30 14.00 L21.00 14.00 L21.00 10.00 M9.06 10.00 L9.06 14.00 L12.70 14.00 C13.00 14.00 13.26 13.74 13.26 13.44 L13.26 10.56 C13.26 10.26 13.00 10.00 12.70 10.00 L9.06 10.00 Z" />
        </svg>
      ),
      url: 'https://www.booking.com/hotel/vn/va-riverside-retreat-hue.vi.html',
      color: 'from-[#003580] to-[#0057b8]',
      textColor: 'text-white'
    },
    {
      key: 'agoda',
      name: 'Agoda',
      rating: 'Best Price',
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2M12 4.18L19.09 8L12 11.82L4.91 8L12 4.18M4 9.68L11 13.5V19.32L4 15.5V9.68M13 19.32V13.5L20 9.68V15.5L13 19.32Z" />
        </svg>
      ),
      url: 'https://www.agoda.com/',
      color: 'from-[#d10068] to-[#ff0080]',
      textColor: 'text-white'
    },
    {
      key: 'facebook',
      name: 'Facebook',
      rating: 'Follow Us',
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: 'https://www.facebook.com/profile.php?id=61574560211265',
      color: 'from-[#1877f2] to-[#0d5dce]',
      textColor: 'text-white'
    },
    {
      key: 'instagram',
      name: 'Instagram',
      rating: 'Gallery',
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      ),
      url: 'https://instagram.com/va_riverside_retreat',
      color: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
      textColor: 'text-white'
    },
    {
      key: 'tiktok',
      name: 'TikTok',
      rating: 'Videos',
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      url: 'https://tiktok.com/@variversideretreat',
      color: 'from-[#000000] to-[#69C9D0]',
      textColor: 'text-white'
    }
  ];

  return (
    <section id="booking-platforms" className="py-16 md:py-24 lg:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            {t('title')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-foreground/70 px-2">
            {t('description')}
          </p>
        </div>

        {/* Platforms Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {platforms.map((platform, index) => (
            <a
              key={platform.key}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`stagger-item group relative overflow-hidden rounded-2xl shadow-lg card-hover
                active:scale-95 touch-manipulation ${gridVisible ? 'visible' : ''}`}
              style={getStaggerDelay(index)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Animated background effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Icon */}
                <div className={`${platform.textColor} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>

                {/* Platform Name */}
                <h3 className={`text-xl md:text-2xl font-bold ${platform.textColor} mb-2`}>
                  {platform.name}
                </h3>

                {/* Description */}
                <p className={`${platform.textColor} opacity-90 mb-4 text-sm md:text-base`}>
                  {t(`platforms.${platform.key}.description`)}
                </p>

                {/* Rating/Info */}
                <div className={`${platform.textColor} opacity-80 text-sm`}>
                  <div className="font-semibold">{platform.rating}</div>
                  <div className="text-xs md:text-sm">{t(`platforms.${platform.key}.reviews`)}</div>
                </div>

                {/* Arrow Icon */}
                <div className={`absolute bottom-6 md:bottom-8 right-6 md:right-8 ${platform.textColor}
                  opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0
                  transition-all duration-300`}>
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Contact */}
        <div
          ref={contactRef}
          className={`mt-12 md:mt-16 bg-gradient-to-r from-neutral to-white rounded-2xl p-6 md:p-8 lg:p-12 text-center
            scale-in ${contactVisible ? 'visible' : ''}`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            {t('directContact')}
          </h3>
          <p className="text-sm md:text-base text-foreground/70 mb-6 max-w-2xl mx-auto">
            {t('directContactDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href="tel:+84794945654"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark
                       text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300
                       btn-hover shadow-lg active:scale-95 touch-manipulation"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              079 494 5654
            </a>
            <a
              href="tel:+84938598718"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-primary-dark
                       text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300
                       btn-hover shadow-lg active:scale-95 touch-manipulation"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              093 859 8718
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
