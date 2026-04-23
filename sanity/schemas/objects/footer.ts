import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
      name: 'labels',
      title: 'Footer Labels',
      type: 'object',
      fields: [
        defineField({
          name: 'home',
          title: 'Home Link',
          type: 'string',
        }),
        defineField({
          name: 'about',
          title: 'About Link',
          type: 'string',
        }),
        defineField({
          name: 'contact',
          title: 'Contact Link',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Label',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Phone Label',
          type: 'string',
        }),
        defineField({
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'privacy',
          title: 'Privacy Policy Link',
          type: 'string',
        }),
        defineField({
          name: 'terms',
          title: 'Terms of Service Link',
          type: 'string',
        }),
        defineField({
          name: 'cookies',
          title: 'Cookie Settings Link',
          type: 'string',
        }),
      ],
    }),
  ],
})
