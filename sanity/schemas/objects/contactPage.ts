import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactFormTitle',
      title: 'Contact Form Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactFormDescription',
      title: 'Contact Form Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'magazineTitle',
      title: 'Magazine Signup Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'magazineDescription',
      title: 'Magazine Signup Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
