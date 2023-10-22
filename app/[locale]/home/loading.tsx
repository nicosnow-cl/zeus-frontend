import { Grid } from '@radix-ui/themes'

import { Skeleton } from '@/features/home/components/user-card'

export default function Loading() {
  return (
    <Grid
      columns={{
        initial: '1',
        md: '2',
        lg: '3',
      }}
      gap="4"
    >
      {Array.from({ length: 10 }).map((_, idx) => (
        <Skeleton key={idx} />
      ))}
    </Grid>
  )
}