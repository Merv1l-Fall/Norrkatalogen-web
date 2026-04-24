import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'infoSection',
  title: 'Info Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title2',
      title: 'Secondary Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description2',
      title: 'Secondary Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subDescription',
      title: 'Subtitle Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titles',
      title: 'Stat Titles',
      type: 'object',
      fields: [
        defineField({
          name: 'title1',
          title: 'First Stat Title',
          type: 'string',
        }),
        defineField({
          name: 'title2',
          title: 'Second Stat Title',
          type: 'string',
        }),
        defineField({
          name: 'title3',
          title: 'Third Stat Title',
          type: 'string',
        }),
      ],
    }),
  ],
})
