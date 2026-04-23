import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Site Content',
      readOnly: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'hero',
    }),
    defineField({
      name: 'navbar',
      title: 'Navigation Bar',
      type: 'navbar',
    }),
    defineField({
      name: 'info',
      title: 'Info Section',
      type: 'infoSection',
    }),
    defineField({
      name: 'adSection',
      title: 'Ad Section',
      type: 'adSection',
    }),
    defineField({
      name: 'about',
      title: 'About Page',
      type: 'aboutPage',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Page',
      type: 'contactPage',
    }),
    defineField({
      name: 'cookies',
      title: 'Cookie Banner',
      type: 'cookieBanner',
    }),
    defineField({
      name: 'forms',
      title: 'Form Configuration',
      type: 'formsConfig',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'privacyPolicy',
    }),
  ],
})
