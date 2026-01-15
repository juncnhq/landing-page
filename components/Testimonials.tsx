'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible, getStaggerDelay } = useStaggerAnimation(3, { staggerDelay: 150 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      key: 'review1',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Minh+Anh&background=8b6f47&color=fff&size=80',
    },
    {
      id: 2,
      key: 'review2',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Tuan+Kiet&background=8b6f47&color=fff&size=80',
    },
    {
      id: 3,
      key: 'review3',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Thu+Ha&background=8b6f47&color=fff&size=80',
    }
  ];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={`w-4 h-4 md:w-5 md:h-5 ${filled ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const stats = [
    { key: 'rating' },
    { key: 'rooms' },
    { key: 'distance' },
    { key: 'support' }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-neutral to-white overflow-hidden">
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

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`stagger-item bg-white rounded-2xl p-6 md:p-8 shadow-lg card-hover
                ${cardsVisible ? 'visible' : ''}`}
              style={getStaggerDelay(index)}
            >
              {/* Quote Icon */}
              <div className="text-primary/20 mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <StarIcon key={idx} filled={idx < testimonial.rating} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;{t(`reviews.${testimonial.key}.comment`)}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 md:gap-4 pt-4 border-t border-neutral">
                <img
                  src={testimonial.avatar}
                  alt={t(`reviews.${testimonial.key}.name`)}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">
                    {t(`reviews.${testimonial.key}.name`)}
                  </h4>
                  <p className="text-xs md:text-sm text-foreground/60">
                    {t(`reviews.${testimonial.key}.location`)} &bull; {t(`reviews.${testimonial.key}.date`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className={`mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 scale-in ${statsVisible ? 'visible' : ''}`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 rounded-2xl bg-white/50 backdrop-blur-sm
                       hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                {t(`stats.${stat.key}.number`)}
              </div>
              <div className="text-sm md:text-base text-foreground/70">
                {t(`stats.${stat.key}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
