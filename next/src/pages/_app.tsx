import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin', 'cyrillic'], weight: ['400', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
