import React from 'react';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import Hero from '../../modules/home/hero';
import './styles.css';

export default function Home() {
  return (
    <>
      <div className="content-home">
        <Navigation />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

