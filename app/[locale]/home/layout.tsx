import { FilterSheet } from '@/features/home/components/filter-sheet'
import { Button } from '@/shadcn-components/ui/button'
import { Container, Flex } from '@radix-ui/themes'

export type TLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: TLayoutProps) {
  return (
    <section>
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

        {children}
      </Container>
    </section>
  )
}
