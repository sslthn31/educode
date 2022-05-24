import React from 'react';
import bgvideo from '../../videos/bg-video.mp4';

const Carousel = () => {
    return(
        <div className="home-carousel">
        <div className="home-title">
            <h3>Welcome To</h3>
            <h1>EDUCODE</h1>
        </div>
        <div className="home-video">
            <video autoPlay loop muted>
              <source src={bgvideo} type='video/mp4'/>
            </video>
        </div>
      </div>
    )
}

export default Carousel;