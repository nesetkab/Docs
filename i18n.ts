import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  languages: ['en', 'ru'],
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  hideLocale: 'default-locale'
});
