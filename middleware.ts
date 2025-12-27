import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*'],
};
