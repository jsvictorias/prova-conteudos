import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { Capa } from '@/components/atoms/capa';
import { Header } from '@/components/atoms/header';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Description Home'
};

const Home = (): ReactNode => {
  return (
    <>
      <Header />
      <Capa />
    </>
  );
};

export default Home;