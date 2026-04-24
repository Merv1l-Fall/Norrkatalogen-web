import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'formsConfig',
  title: 'Forms Configuration',
  type: 'object',
  fields: [
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'object',
      fields: [
        defineField({
          name: 'contact',
          title: 'Contact Form Submit Button',
          type: 'string',
        }),
        defineField({
          name: 'contactLoading',
          title: 'Contact Form Loading Button',
          type: 'string',
        }),
        defineField({
          name: 'magazine',
          title: 'Magazine Subscribe Button',
          type: 'string',
        }),
        defineField({
          name: 'magazineLoading',
          title: 'Magazine Loading Button',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'labels',
      title: 'Form Labels',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name Label',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Label',
          type: 'string',
        }),
        defineField({
          name: 'companyName',
          title: 'Company Name Label',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address Label',
          type: 'string',
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code Label',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City Label',
          type: 'string',
        }),
        defineField({
          name: 'message',
          title: 'Message Label',
          type: 'string',
        }),
        defineField({
          name: 'consentContact',
          title: 'Contact Consent Label',
          type: 'string',
        }),
        defineField({
          name: 'consentMagazine',
          title: 'Magazine Consent Label',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'placeholders',
      title: 'Form Placeholders',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'companyName',
          title: 'Company Name Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'message',
          title: 'Message Placeholder',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'validation',
      title: 'Validation Messages',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name Validation',
          type: 'object',
          fields: [
            defineField({
              name: 'required',
              title: 'Required Message',
              type: 'string',
            }),
            defineField({
              name: 'minLength',
              title: 'Min Length Message',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'email',
          title: 'Email Validation',
          type: 'object',
          fields: [
            defineField({
              name: 'required',
              title: 'Required Message',
              type: 'string',
            }),
            defineField({
              name: 'invalid',
              title: 'Invalid Message',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'companyName',
          title: 'Company Name Validation',
          type: 'object',
          fields: [
            defineField({
              name: 'required',
              title: 'Required Message',
              type: 'string',
            }),
            defineField({
              name: 'minLength',
              title: 'Min Length Message',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'address',
          title: 'Address Validation',
          type: 'object',
          fields: [
            defineField({
              name: 'required',
              title: 'Required Message',
              type: 'string',
            }),
            defineField({
              name: 'minLength',
              title: 'Min Length Message',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code Validation',
          type: 'object',
          fields: [
            defineField({
              name: 'required',
              title: 'Required Message',
              type: 'string',
            }),
            defineField({
              name: 'pattern',
              title: 'Pattern Message',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'city',
          title: 'City Validation',
          type: 'object',
          fields: [
            defineField({
              name: 'required',
              title: 'Required Message',
              type: 'string',
            }),
            defineField({
              name: 'minLength',
              title: 'Min Length Message',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'message',
          title: 'Message Validation',
          type: 'object',
          fields: [
            defineField({
              name: 'required',
              title: 'Required Message',
              type: 'string',
            }),
            defineField({
              name: 'minLength',
              title: 'Min Length Message',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'consent',
          title: 'Consent Validation',
          type: 'object',
          fields: [
            defineField({
              name: 'required',
              title: 'Required Message',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
