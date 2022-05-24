import React from 'react';
import Carousel from './Carousel';
import HomeClassList from './HomeClassList';
import About from './About';

const Home = () => {
  return (
    <div className="home">
      <div className="carousel-component">
        <Carousel />
      </div>
      <div className="about-component">
        <About />
      </div>
      <div className="benefit-component"></div>
      <div className="classlist-component">
        <HomeClassList />
      </div>
    </div>
  );
};

export default Home;
