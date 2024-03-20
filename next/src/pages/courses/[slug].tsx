import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header/Header';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  return (
    <>
      <Head>
        <title>Сalligraphy studio</title>
        <meta name="description" content="Katerina Kiseleva's Сalligraphy studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} `}>
        {/* <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        <div className={styles.grid}>{location.pathname}</div>
      </main>
    </>
  );
}
