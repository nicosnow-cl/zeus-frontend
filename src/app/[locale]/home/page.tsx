import { Metadata, Viewport } from 'next'
import { randomUUID } from 'crypto'

import { fetchUsers } from '@/features/home/actions/users/fetch-users'
import { TSearchParams } from '@/common/types/misc/search-params.type'
import { UsersCardsInfiniteScrollContainer } from '@/features/home/components/presentationals/users-cards-infinite-scroll'
import { UsersCardsSkeleton } from '@/features/home/components/presentationals/users-cards-skeleton'

export const metadata: Metadata = {
  title: 'cl.afrodita.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default async function Home({ searchParams }: { searchParams?: TSearchParams }) {
  if (searchParams) searchParams.limit = '30'

  const res = await fetchUsers(searchParams)

  if (res.status === 'error') throw new Error(res.error)

  return (
    // <UsersCardsInfiniteScrollContainer
    //   key={randomUUID()}
    //   initialData={res.data}
    //   initialTotal={res.metadata.total}
    // />
    <UsersCardsSkeleton skeletonCount={20} />
  )
}
