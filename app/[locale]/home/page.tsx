import { Metadata, Viewport } from 'next'
import { randomUUID } from 'crypto'

import { CardsContainerInfiniteScroll } from '@/features/home/components/cards-container-infinite-scroll'
import { fetchUsers } from '@/features/home/actions/users/fetch-users'
import { TSearchParams } from '@/common/types/misc/search-params.type'

export const metadata: Metadata = {
  title: 'cl.afrodita.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default async function Home({ searchParams }: { searchParams?: TSearchParams }) {
  const res = await fetchUsers(searchParams)

  if (res.status === 'error') throw new Error(res.error)

  return (
    <CardsContainerInfiniteScroll
      key={randomUUID()}
      initialData={res.data}
      initialTotal={res.metadata.total}
    />
  )
}
