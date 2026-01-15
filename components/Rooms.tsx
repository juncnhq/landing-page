'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function Rooms() {
  const t = useTranslations('rooms');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible, getStaggerDelay } = useStaggerAnimation(6, { staggerDelay: 100 });

  const rooms = [
    {
      id: 1,
      key: 'dorm',
      image: '/images/dorm.jpg',
    },
    {
      id: 2,
      key: 'twin',
      image: '/images/Deluxetwin.jpg',
    },
    {
      id: 3,
      key: 'deluxe',
      image: '/images/Deluxedouble.jpg',
    },
    {
      id: 4,
      key: 'family',
      image: '/images/Family.jpg',
    },
    {
      id: 5,
      key: 'villa',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070',
    },
    {
      id: 6,
      key: 'riverView',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
    }
  ];

  return (
    <section id="rooms" className="py-16 md:py-24 lg:py-32 px-4 bg-background overflow-hidden">
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

        {/* Rooms Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`stagger-item group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover
                ${gridVisible ? 'visible' : ''}`}
              style={getStaggerDelay(index)}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={t(`types.${room.key}.name`)}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick view badge on hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100
                              translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-foreground text-sm
                                 px-3 py-1.5 rounded-full font-medium">
                    {t('quickView')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                  {t(`types.${room.key}.name`)}
                </h3>
                <p className="text-sm md:text-base text-foreground/60 mb-4">
                  {t(`types.${room.key}.description`)}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(t.raw(`types.${room.key}.features`) as string[]).map((feature: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs md:text-sm bg-neutral text-foreground px-3 py-1 rounded-full
                               transition-colors duration-200 hover:bg-primary/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold
                                 py-3 rounded-lg transition-all duration-300 btn-hover
                                 active:scale-95 touch-manipulation">
                  {t('viewDetails')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
