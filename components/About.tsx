import React from 'react';

export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Hồ Bơi Ngoài Trời',
      description: 'Hồ bơi với view núi Kim Phụng và sông Hương tuyệt đẹp, không gian thư giãn hoàn hảo'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      title: 'Hoạt Động SUP',
      description: 'Trải nghiệm chèo ván đứng SUP trên dòng sông Hương thơ mộng'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Gần Di Tích Lịch Sử',
      description: 'Cách lăng Khải Định chỉ 50m, dễ dàng khám phá các di sản văn hóa Huế'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: 'Đánh Giá 9.8/10',
      description: 'Được khách hàng đánh giá cao với điểm số xuất sắc trên Booking.com'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-neutral">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Về Vả Riverside Retreat
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Nằm bên dòng sông Hương thơ mộng với view núi Kim Phụng, Vả Riverside Retreat
            là không gian lý tưởng để thư giãn và khám phá văn hóa Huế. Với 9 phòng nghỉ
            đa dạng, hồ bơi ngoài trời và các hoạt động SUP trên sông, chúng tôi mang đến
            trải nghiệm nghỉ dưỡng đáng nhớ cho mọi du khách.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {highlight.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
