import React from 'react';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import Hero from '../../modules/home/hero';
import './styles.css';

export default function Home() {
  return (
    <>
      <main className="wrapper-home">
        <Navigation />
        <Hero />
        <Footer />
      </main>
    </>
  );
}

