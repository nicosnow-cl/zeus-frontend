import { CardSkeleton } from '@/features/home/components/card-skeleton';
import { Grid } from '@radix-ui/themes';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Grid columns="3" gap="4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </Grid>
  );
}
