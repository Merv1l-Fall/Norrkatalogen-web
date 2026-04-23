import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cookieBanner',
  title: 'Cookie Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Banner Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Banner Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'acceptButton',
      title: 'Accept Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rejectButton',
      title: 'Reject Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
