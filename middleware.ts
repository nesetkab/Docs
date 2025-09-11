import { createI18nMiddleware } from 'fumadocs-core';
import { i18n } from './lib/i18n';

export default createI18nMiddleware(i18n);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  // You may need to adjust it to ignore static assets in `/public` folder
  matcher: [
  // Exclude API routes, Next.js static/image, and specific public files
  '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ]
};
