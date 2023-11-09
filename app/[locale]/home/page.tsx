import { Metadata } from 'next'
import { randomUUID } from 'crypto'

import { fetchUsers } from '@/features/home/actions/fetchUsers'
import { CardsContainerInfiniteScroll } from '@/features/home/components/cards-container-infinite-scroll'

export const metadata: Metadata = {
  title: 'cl.afrodita.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const res = await fetchUsers({ filters: { ...searchParams } })

  if (res.status === 'error') {
    throw new Error(res.error)
  }

  return (
    <CardsContainerInfiniteScroll
      key={randomUUID()}
      initialData={res.data}
      initialTotal={res.metadata.total}
    />
  )
}
