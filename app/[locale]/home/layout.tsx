import { UserCardsFiltersContainer } from '@/features/home/components/containers/user-cards-filters-container'

export type TLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: TLayoutProps) {
  return (
    <section className="grid-wrapper">
      <UserCardsFiltersContainer />

      {children}
    </section>
  )
}
