import { Metadata } from 'next'

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
  const initialData = await fetchUsers()

  return (
    <div key={Math.random()}>
      <CardsContainerInfiniteScroll initialData={initialData} />
    </div>
  )
}
