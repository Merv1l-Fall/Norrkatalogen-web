/**
 * Get a Sanity API token for authenticated requests (draft mode, preview)
 * This is used in draft-mode and preview routes
 */
export function getToken(): string | undefined {
  const token = process.env.SANITY_API_WRITE_TOKEN

  if (!token) {
    console.warn('SANITY_API_WRITE_TOKEN is not set')
  }

  return token
}
