import React from 'react';

export default function Booking() {
  return (
    <section id="booking" className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-neutral">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Liên Hệ Đặt Phòng
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Liên hệ trực tiếp với chúng tôi qua điện thoại, Zalo hoặc email
            để được tư vấn và hỗ trợ đặt phòng tốt nhất
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Phone/Zalo */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">Điện thoại / Zalo</h3>
                <a href="tel:+84794945654" className="text-primary hover:text-primary-dark block text-lg mb-2 font-medium">
                  079 494 5654
                </a>
                <a href="tel:+84938598718" className="text-primary hover:text-primary-dark block text-lg font-medium">
                  093 859 8718
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">Email</h3>
                <a href="mailto:varetreat@gmail.com" className="text-primary hover:text-primary-dark block text-lg mb-2 font-medium">
                  varetreat@gmail.com
                </a>
                <a href="mailto:variversideretreat@gmail.com" className="text-primary hover:text-primary-dark block text-sm">
                  variversideretreat@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">Giờ Làm Việc</h3>
                <p className="text-foreground/70 text-lg">
                  24/7 - Luôn sẵn sàng phục vụ
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">Địa Chỉ</h3>
                <p className="text-foreground/70 text-lg">
                  Bến Than, Thủy Xuân<br />
                  Thành phố Huế
                </p>
              </div>
            </div>
          </div>

          {/* Price Info Box */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Thông Tin Giá & Chính Sách</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Giá từ 250,000đ/đêm (Dorm)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Check-in: 14:00 | Check-out: 12:00</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Miễn phí WiFi & Bãi đỗ xe</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hoạt động SUP miễn phí</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hồ bơi ngoài trời view sông</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cách lăng Khải Định chỉ 50m</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
