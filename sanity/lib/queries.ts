import { defineQuery } from 'next-sanity'

/**
 * Query to fetch all site content from the settings document
 * This replaces the need to import JSON files
 */
export const SETTINGS_QUERY = defineQuery(`
  *[_type == "settings"][0] {
    _id,
    hero,
    navbar,
    info,
    adSection,
    about,
    contact,
    cookies,
    forms,
    footer,
    privacyPolicy,
  }
`)

/**
 * Query specific sections (optimize if you only need parts of the content)
 */
export const HERO_QUERY = defineQuery(`
  *[_type == "settings"][0].hero
`)

export const NAVBAR_QUERY = defineQuery(`
  *[_type == "settings"][0].navbar
`)

export const ABOUT_QUERY = defineQuery(`
  *[_type == "settings"][0].about
`)

export const CONTACT_QUERY = defineQuery(`
  *[_type == "settings"][0].contact
`)

export const PRIVACY_POLICY_QUERY = defineQuery(`
  *[_type == "settings"][0].privacyPolicy
`)

export const FORMS_QUERY = defineQuery(`
  *[_type == "settings"][0].forms
`)

export const FOOTER_QUERY = defineQuery(`
  *[_type == "settings"][0].footer
`)

export const AD_SECTION_QUERY = defineQuery(`
  *[_type == "settings"][0].adSection
`)

export const COOKIES_QUERY = defineQuery(`
  *[_type == "settings"][0].cookies
`)

export const INFO_QUERY = defineQuery(`
  *[_type == "settings"][0].info
`)
