import { UsersCardsFiltersContainer } from '@/features/home/components/containers/users-cards-filters'

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="grid-wrapper">
      <UsersCardsFiltersContainer />

      {children}
    </section>
  )
}
