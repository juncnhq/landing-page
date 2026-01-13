# Vả Riverside Retreat Landing Page

Modern, elegant landing page for Vả Riverside Retreat - a luxury homestay in Hue, Vietnam. Built with Next.js 14 and Tailwind CSS.

## Features

- **Modern Design**: Minimalist, luxury resort aesthetic with warm earth tones
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Complete meta tags, OpenGraph, and semantic HTML
- **Smooth Animations**: Subtle transitions and hover effects throughout
- **Interactive Components**: Booking form, navigation menu, and more

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **React 19**

## Project Structure

```
homestay-landing/
├── app/
│   ├── globals.css       # Global styles and Tailwind config
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page with all sections
├── components/
│   ├── Navbar.tsx        # Sticky navigation with scroll effects
│   ├── Hero.tsx          # Hero section with CTA
│   ├── About.tsx         # About section with highlights
│   ├── Rooms.tsx         # Room gallery with grid layout
│   ├── Amenities.tsx     # Amenities with icons
│   ├── Testimonials.tsx  # Customer reviews and ratings
│   ├── Location.tsx      # Location info and map
│   ├── Booking.tsx       # Booking form and contact info
│   └── Footer.tsx        # Footer with links and newsletter
└── package.json
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Sections

### 1. Navigation
- Fixed navbar that changes style on scroll
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### 2. Hero Section
- Full-screen background image
- Eye-catching headline
- Clear call-to-action button
- Scroll indicator

### 3. About Homestay
- Brief introduction
- 4 key highlights with icons:
  - Peaceful environment
  - Beautiful nature views
  - Convenient location
  - Friendly service

### 4. Rooms & Gallery
- 6 room types displayed in grid
- Hover effects on images
- Room features and details
- "View Details" buttons

### 5. Amenities
- 12 amenities with icons
- Hover effects
- Clean, organized layout

### 6. Testimonials
- 3 customer reviews
- 5-star ratings
- Customer avatars
- Statistics section

### 7. Location
- Address information
- Nearby places
- Google Maps integration
- Distance indicators

### 8. Booking & Contact
- Contact information cards
- Booking form with validation
- Special offers section
- Clear submission button

### 9. Footer
- Brand information
- Quick links
- Contact details
- Newsletter signup
- Social media links
- Back to top button

## Customization

### Colors

Edit the color scheme in `app/globals.css`:

```css
:root {
  --background: #fdfbf7;
  --foreground: #2d2d2d;
  --primary: #8b6f47;
  --primary-dark: #6b5435;
  --secondary: #a8916d;
  --accent: #d4a574;
  --neutral: #f5f1ea;
  --success: #7a9d54;
}
```

### Content

Update content in individual component files:
- `components/Hero.tsx` - Hero text
- `components/About.tsx` - About content and highlights
- `components/Rooms.tsx` - Room information
- etc.

### Images

Replace Unsplash placeholder images with your own:
- Update `src` attributes in component files
- Recommended to use Next.js Image component for optimization

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images
- Minimal JavaScript bundle
- Fast page load times

## SEO

- Semantic HTML structure
- Meta tags configured
- OpenGraph tags for social sharing
- Proper heading hierarchy
- Alt text for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT

## Property Information

- **Name**: Vả Riverside Retreat
- **Location**: Thủy Bằng, Hương Thủy, Huế, Vietnam
- **Phone**: 038.286.1579 / 037.468.1579
- **Booking**: [Booking.com](https://www.booking.com/hotel/vn/va-riverside-retreat-hue.vi.html)
- **Rating**: 9.8/10 on Booking.com
- **Capacity**: 9 bedrooms, up to 32 guests
- **Starting Price**: 250,000 VND per night

## Features

- Outdoor swimming pool with Kim Phung mountain and Perfume River views
- SUP (Stand-Up Paddleboarding) activities on Perfume River
- 50m from Khai Dinh Tomb
- Room types: Dorm, Twin, Deluxe, Family, and full villa rental
- Free WiFi, parking, and amenities

## Contact

For questions or support:
- Phone: 038.286.1579 / 037.468.1579
- Booking.com: [View Property](https://www.booking.com/hotel/vn/va-riverside-retreat-hue.vi.html)
