import React from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Block1 from '../../modules/about/block-1';
import Block2 from '../../modules/about/block-2';
import Block3 from '../../modules/about/block-3';
import Hero from '../../modules/about/hero/index';
import './styles.css';


function About() {
  return (
    <>
      <div className="wrapper-about">
        <Navigation />
        <Hero />
        <Block1 />
        <Block2 />
        <Block3 />
        <Footer />
      </div>
    </>
  );
}

export default About;