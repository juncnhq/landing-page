import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10" />
        <Image
          src="/images/pool.jpg"
          alt="Vả Riverside Retreat"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Vả Riverside Retreat
            <span className="block mt-2 text-accent">
              Bên Dòng Sông Hương Thơ Mộng
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            View núi Kim Phụng tuyệt đẹp, hồ bơi ngoài trời, và trải nghiệm SUP
            trên sông Hương
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="#booking"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold
                       px-10 py-4 rounded-full text-lg shadow-2xl
                       hover:scale-105 hover:shadow-primary/50 transition-all duration-300"
            >
              Đặt Phòng Ngay
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/80">
              <span className="text-sm">Khám phá thêm</span>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
