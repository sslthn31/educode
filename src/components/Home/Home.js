import React from 'react';
import Carousel from './Carousel';
import HomeClassList from './HomeClassList';
import About from './About';
import Features from './Features';

const Home = () => {
  return (
    <div className="home">
      <div className="carousel-component">
        <Carousel />
      </div>
      <div className="about-component">
        <About />
      </div>
      <div className="Features-component">
        <Features />
      </div>
      <div className="classlist-component">
        <HomeClassList />
      </div>
    </div>
  );
};

export default Home;
