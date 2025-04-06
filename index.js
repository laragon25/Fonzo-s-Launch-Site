import Head from 'next/head';
import FonzosLaunchPage from '../components/FonzosLaunchPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fonzo's Launch Event</title>
        <meta name="description" content="Fonzo's Dual Hideaway Experience Event" />
      </Head>
      <FonzosLaunchPage />
    </>
  );
}
