import { UsersCardsFiltersContainer } from '@/features/home/components/containers/users-cards-filters'

export type TLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: TLayoutProps) {
  return (
    <section className="grid-wrapper">
      <UsersCardsFiltersContainer />

      {children}
    </section>
  )
}
