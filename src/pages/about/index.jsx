import React from 'react';
import Block1 from '../../modules/about/block-1';
import Block2 from '../../modules/about/block-2';
import Block3 from '../../modules/about/block-3';
import Hero from '../../modules/about/hero/index';
import './styles.css';


function About() {
  return (
    <>
      <div className="wrapper-about">
        <Hero />
        <Block1/>
        <Block2/>
        <Block3/>
      </div>
    </>
  );
}

export default About;