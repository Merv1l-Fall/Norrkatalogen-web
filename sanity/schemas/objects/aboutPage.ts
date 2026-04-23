import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Intro Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Intro Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'focus',
      title: 'Focus Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Focus Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Focus Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Content Title',
          type: 'string',
        }),
        defineField({
          name: 'items',
          title: 'Content Items',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
      ],
    }),
    defineField({
      name: 'expertise',
      title: 'Expertise Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Expertise Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Expertise Description',
          type: 'text',
        }),
        defineField({
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections Info',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Sections Title',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Sections Intro Text',
          type: 'string',
        }),
        defineField({
          name: 'items',
          title: 'Section Items',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
      ],
    }),
    defineField({
      name: 'publications',
      title: 'Publications Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Publications Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Publications Description',
          type: 'text',
        }),
        defineField({
          name: 'cta',
          title: 'Call-to-Action Text',
          type: 'string',
        }),
        defineField({
          name: 'ctaDescription',
          title: 'CTA Description',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'downloads',
      title: 'Downloads Section',
      type: 'object',
      fields: [
        defineField({
          name: 'publicationSchedule',
          title: 'Publication Schedule Label',
          type: 'string',
        }),
        defineField({
          name: 'utfallGuide',
          title: 'Bleed Guide Label',
          type: 'string',
        }),
      ],
    }),
  ],
})
