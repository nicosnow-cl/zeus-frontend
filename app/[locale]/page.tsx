import { Grid } from '@radix-ui/themes';
import { Metadata } from 'next';

// import { CardsContainer } from '@/features/home/components/cards-container';
// import { FilterDrawer } from '@/features/home/components/filter-drawer';

export const metadata: Metadata = {
  title: 'cl.afrodita.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

function Home() {
  return 'huehue';

  // return (
  //   <>
  //     <FilterDrawer />
  //     <Grid columns="3" gap="4">
  //       <CardsContainer />
  //     </Grid>
  //   </>
  // );
}

export default Home;
