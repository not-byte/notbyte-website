import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'pl'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Add this to resolve dynamic routes
  pathnames: {
    '/': '/',
    '/projects/[projectID]': {
      en: '/projects/[projectID]',
      pl: '/projekty/[projectID]'
    },
    '/profiles/[profileID]': '/profiles/[profileID]'
  }
});