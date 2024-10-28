import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">
            A brand and product designer working with clients globally
          </h1>

          <div className="hero__box">
            <p>Expertise</p>
            <p>Branding</p>
            <p>Product</p>
            <p>Design Systems</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
