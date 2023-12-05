import { UsersCardsSkeleton } from '@/features/home/components/ui/presentational/users-cards-skeleton'

export default function Loading() {
  return <UsersCardsSkeleton skeletonCount={20} />
}
