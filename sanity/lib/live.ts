import { client } from './client'

/**
 * Simple sanityFetch wrapper for server-side data fetching
 * This fetches from Sanity and returns the data
 */
export async function sanityFetch<T = any>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, any>
  tags?: string[]
}): Promise<{ data: T | null }> {
  try {
    const data = await client.fetch<T>(query, params, {
      next: { revalidate: 60, tags },
    })
    return { data }
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return { data: null }
  }
}

/**
 * SanityLive component - placeholder for real-time updates
 * For now, this is a no-op component that can be added to layouts
 */
export function SanityLive() {
  return null
}

