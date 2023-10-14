import { Grid } from '@radix-ui/themes';
import { Metadata } from 'next';

import { CardsContainer } from '@/features/home/components/cards-container';

export const metadata: Metadata = {
  title: 'cl.afrodita.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

function Home() {
  return (
    <Grid columns="3" gap="4">
      <CardsContainer />;
    </Grid>
  );
}

export default Home;
