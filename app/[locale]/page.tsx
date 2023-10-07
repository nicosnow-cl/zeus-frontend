import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'cl.afrodita.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

function Home() {
  const t = useTranslations('root');

  return t('hello-world');
}

export default Home;
