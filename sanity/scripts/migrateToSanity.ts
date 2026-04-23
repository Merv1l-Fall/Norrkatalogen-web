#!/usr/bin/env node
/**
 * Migration script to import JSON content into Sanity
 * Usage: npx tsx sanity/scripts/migrateToSanity.ts
 */

import { config } from 'dotenv'
import { join } from 'path'

// Load environment variables FIRST, before importing anything that uses them
config({ path: join(process.cwd(), '.env.local') })

// Now import modules that depend on env vars
import { readFileSync } from 'fs'
import { client } from '../lib/client'

async function migrateContent(lang: 'en' | 'sv') {
  const filePath = join(
    process.cwd(),
    'src/messages',
    `${lang}.json`
  )

  try {
    const content = JSON.parse(readFileSync(filePath, 'utf-8'))

    // Create a settings document for each language
    const doc = {
      _type: 'settings',
      _id: `settings-${lang}`,
      language: lang,
      title: `Site Content (${lang.toUpperCase()})`,
      hero: content.hero,
      navbar: content.navbar,
      info: content.info,
      adSection: content.adSection,
      about: content.about,
      contact: content.contact,
      cookies: content.cookies,
      forms: content.forms,
      footer: content.footer,
      privacyPolicy: content.privacyPolicy,
    }

    await client.createOrReplace(doc)
    console.log(`✓ Successfully migrated ${lang}.json to Sanity`)
    return true
  } catch (error) {
    console.error(`✗ Failed to migrate ${lang}.json:`, error)
    return false
  }
}

async function main() {
  console.log('Starting Sanity content migration...\n')

  const results = await Promise.all([
    migrateContent('en'),
    migrateContent('sv'),
  ])

  const success = results.every((r) => r === true)

  if (success) {
    console.log('\n✓ Migration complete! Your content is now in Sanity.')
    console.log('You can now delete src/messages/en.json and src/messages/sv.json if desired.')
    process.exit(0)
  } else {
    console.error('\n✗ Migration failed. Check errors above.')
    process.exit(1)
  }
}

main()