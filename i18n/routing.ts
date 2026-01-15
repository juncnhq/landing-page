import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'vi'],
  defaultLocale: 'vi',
  localeDetection: true
});

export type Locale = (typeof routing.locales)[number];
