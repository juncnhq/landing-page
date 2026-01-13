import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Minh Anh',
      location: 'Hà Nội',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Minh+Anh&background=8b6f47&color=fff&size=80',
      comment: 'View sông Hương và núi Kim Phụng thật tuyệt! Hồ bơi rất đẹp, không gian yên tĩnh. Gần lăng Khải Định nên rất tiện để tham quan. Chủ nhà thân thiện, nhiệt tình.',
      date: 'Tháng 12, 2024'
    },
    {
      id: 2,
      name: 'Tuấn Kiệt',
      location: 'TP. Hồ Chí Minh',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Tuan+Kiet&background=8b6f47&color=fff&size=80',
      comment: 'Trải nghiệm SUP trên sông Hương rất thú vị! Phòng sạch sẽ, đầy đủ tiện nghi. Vị trí gần các lăng tẩm nên thuận tiện cho việc tham quan Huế. Giá cả hợp lý.',
      date: 'Tháng 11, 2024'
    },
    {
      id: 3,
      name: 'Thu Hà',
      location: 'Đà Nẵng',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Thu+Ha&background=8b6f47&color=fff&size=80',
      comment: 'Homestay tuyệt vời cho những ai muốn trốn khỏi sự ồn ào của thành phố. View đẹp, không khí trong lành. Thiết kế đẹp và thoải mái. Highly recommended!',
      date: 'Tháng 10, 2024'
    }
  ];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 bg-gradient-to-b from-neutral to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Niềm vui của khách hàng là động lực để chúng tôi không ngừng cải thiện dịch vụ
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} filled={index < testimonial.rating} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-foreground/60">
                    {testimonial.location} • {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '9.8/10', label: 'Đánh Giá Booking.com' },
            { number: '9 Phòng', label: 'Tối đa 32 khách' },
            { number: '50m', label: 'Đến Lăng Khải Định' },
            { number: '24/7', label: 'Hỗ Trợ Khách Hàng' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
