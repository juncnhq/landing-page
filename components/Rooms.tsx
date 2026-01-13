import React from 'react';

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: 'Phòng Dorm',
      image: '/images/dorm.jpg',
      description: 'Phòng ký túc xá giá rẻ cho du khách bụi',
      features: ['Nhiều giường', 'Từ 250,000đ', 'Phù hợp nhóm']
    },
    {
      id: 2,
      name: 'Phòng Twin',
      image: '/images/Deluxetwin.jpg',
      description: 'Phòng đôi với 2 giường đơn tiện nghi',
      features: ['2 giường đơn', 'Điều hòa', 'View sông']
    },
    {
      id: 3,
      name: 'Phòng Deluxe',
      image: '/images/Deluxedouble.jpg',
      description: 'Phòng cao cấp với đầy đủ tiện nghi',
      features: ['Giường King', 'Ban công riêng', 'View núi Kim Phụng']
    },
    {
      id: 4,
      name: 'Phòng Family',
      image: '/images/Family.jpg',
      description: 'Phòng gia đình rộng rãi cho 4-6 người',
      features: ['4-6 người', 'Nhiều giường', 'Không gian lớn']
    },
    {
      id: 5,
      name: 'Thuê Nguyên Căn',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070',
      description: 'Villa 9 phòng cho nhóm lớn hoặc sự kiện',
      features: ['Tối đa 32 người', '9 phòng ngủ', 'Hồ bơi riêng']
    },
    {
      id: 6,
      name: 'View Sông Hương',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
      description: 'Phòng với view sông Hương tuyệt đẹp',
      features: ['View sông', 'Ban công', 'Yên tĩnh']
    }
  ];

  return (
    <section id="rooms" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Phòng & Không Gian
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Khám phá các loại phòng được thiết kế tinh tế,
            mang đến sự thoải mái tối đa cho kỳ nghỉ của bạn
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-foreground/60 mb-4">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-neutral text-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                  Xem Chi Tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
