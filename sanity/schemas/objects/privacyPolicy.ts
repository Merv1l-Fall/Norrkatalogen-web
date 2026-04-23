import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Policy Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Section Heading',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Section Content',
              type: 'text',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
})
