import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navigation Bar',
  type: 'object',
  fields: [
    defineField({
      name: 'home',
      title: 'Home Link Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'About Link Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contact',
      title: 'Contact Link Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Call-to-Action Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'close',
      title: 'Close Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'languageSwitch',
      title: 'Language Switch Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
