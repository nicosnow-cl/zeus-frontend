import { Container, Flex } from '@radix-ui/themes'
import { Metadata } from 'next'

import { Button } from '@/shadcn-components/ui/button'
import { fetchUsers } from '@/features/home/actions/fetchUsers'
import { FilterSheet } from '@/features/home/components/filter-sheet'
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
  console.log(searchParams)

  const userCards = await fetchUsers({ page: 0, limit: 10 })

  return (
    <Container
      size={{
        initial: '1',
        md: '2',
        lg: '3',
        xl: '4',
      }}
    >
      <Flex justify="between" py="4">
        <FilterSheet
          trigger={
            <Button className="rounded-full" variant="default">
              Filtros
            </Button>
          }
        />

        <Button className="rounded-full" variant="outline">
          Sort
        </Button>
      </Flex>

      <CardsContainerInfiniteScroll initialData={userCards} />
    </Container>
  )
}
