import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'adSection',
  title: 'Ad Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publicationSchedule',
      title: 'Publication Schedule Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'utfallGuide',
      title: 'Bleed Guide Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'frontCoversAlt',
      title: 'Front Covers Alt Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
