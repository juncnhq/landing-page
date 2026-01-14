'use client';

import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function Location() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: placesRef, isVisible: placesVisible, getStaggerDelay } = useStaggerAnimation(4, { staggerDelay: 100 });
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation();

  const nearbyPlaces = [
    {
      name: 'Lăng Khải Định',
      distance: '50m',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'Lăng Tự Đức',
      distance: '2.8 km',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: 'Cầu Trường Tiền',
      distance: '7.6 km',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      name: 'Chợ Đông Ba',
      distance: '8.1 km',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="location" className="py-16 md:py-24 lg:py-32 px-4 bg-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            ref={contentRef}
            className={`fade-in-left ${contentVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Vị Trí Thuận Tiện
            </h2>
            <p className="text-base md:text-lg text-foreground/70 mb-6 md:mb-8 leading-relaxed">
              Homestay của chúng tôi tọa lạc tại vị trí đắc địa, vừa gần gũi với
              thiên nhiên, vừa dễ dàng tiếp cận các tiện ích và điểm tham quan
              trong khu vực.
            </p>

            {/* Address */}
            <div className="bg-white rounded-xl p-5 md:p-6 mb-6 md:mb-8 shadow-md card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="text-primary mt-1 icon-hover">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Địa chỉ</h3>
                  <p className="text-foreground/70 text-sm md:text-base">
                    Bến Than, phường Thủy Xuân<br />
                    Thành phố Huế, Thừa Thiên Huế
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby Places */}
            <div className="mb-6 md:mb-8">
              <h3 className="font-semibold text-foreground text-base md:text-lg mb-4">
                Địa điểm lân cận
              </h3>
              <div
                ref={placesRef}
                className="grid grid-cols-2 gap-3 md:gap-4"
              >
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className={`stagger-item flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4
                      shadow-sm card-hover cursor-pointer ${placesVisible ? 'visible' : ''}`}
                    style={getStaggerDelay(index)}
                  >
                    <div className="text-primary icon-hover">
                      {place.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-xs md:text-sm">
                        {place.name}
                      </p>
                      <p className="text-xs text-foreground/60">
                        {place.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Button */}
            <a
              href="https://maps.google.com/maps/place/Vả+Riverside+Retreat/@16.4201117,107.5630442,17z/data=!4m5!3m4!1s0x3141a57395f27fd1:0x5b090b886a12cd5a!8m2!3d16.4194449!4d107.5648856?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold
                       px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 btn-hover shadow-lg
                       active:scale-95 touch-manipulation text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Xem Trên Google Maps
            </a>
          </div>

          {/* Right - Map Placeholder */}
          <div
            ref={mapRef}
            className={`relative rounded-2xl overflow-hidden shadow-2xl h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]
              scale-in ${mapVisible ? 'visible' : ''}`}
          >
            {/* Map Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074"
                alt="Location map"
                className="w-full h-full object-cover opacity-90 img-zoom"
                loading="lazy"
              />
            </div>

            {/* Map Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl text-center max-w-sm
                            transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4
                              animate-pulse">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Tìm Chúng Tôi Tại Đây
                </h3>
                <p className="text-foreground/70 mb-3 md:mb-4 text-sm md:text-base">
                  Nestled in the heart of nature, easy to reach
                </p>
                <div className="text-xs md:text-sm text-foreground/60">
                  Lat: 16.419452° N, Long: 107.5623067° E
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
