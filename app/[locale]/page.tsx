import { CardsContainer } from '@/features/home/components/cards-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'cl.afrodita.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

function Home() {
  return <CardsContainer />;
}

export default Home;
