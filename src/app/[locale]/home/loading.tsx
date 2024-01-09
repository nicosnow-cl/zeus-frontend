import { UsersCardsSkeleton } from '@/features/home/components/presentationals/users-cards-skeleton'

export default function Loading() {
  return <UsersCardsSkeleton skeletonCount={20} />
}
