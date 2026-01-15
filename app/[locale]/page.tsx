import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import BookingPlatforms from '@/components/BookingPlatforms';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Testimonials />
      <Location />
      <BookingPlatforms />
      <Booking />
      <Footer />
    </main>
  );
}
