import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeClassList = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="home-class">
      <div className="home-class-list-title">
        <h2>Our</h2>
        <h2>Class</h2>
      </div>
      <div className="image-slide-section">
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
            <motion.div className="items">
              <div className="class-card">
                <img className="image-card" src="./js-card.jpg" alt="" />
                <div className="card-desc">
                  <h3>JavaScript Basic Class</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio iste, expedita suscipit accusantium sequi rerum similique mollitia aut saepe velit?</p>
                </div>
                <div className="button">
                  <button>
                    <Link to="/jscourse" className="btn-link">
                      Join Class
                    </Link>
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div className="items">
              <div className="class-card">
                <img className="image-card" src="./html-card.jpg" alt="" />
                <div className="card-desc">
                  <h3>HTML Basic Class</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio iste, expedita suscipit accusantium sequi rerum similique mollitia aut saepe velit?</p>
                </div>
                <div className="button">
                  <button disabled>
                    <Link to="/" className="btn-link">
                      On Progress...
                    </Link>
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div className="items">
              <div className="class-card">
                <img className="image-card" src="./css-card.jpg" alt="" />
                <div className="card-desc">
                  <h3>CSS Basic Class</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio iste, expedita suscipit accusantium sequi rerum similique mollitia aut saepe velit?</p>
                </div>
                <div className="button">
                  <button disabled>
                    <Link to="/" className="btn-link">
                      On Progress...
                    </Link>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default HomeClassList;

/* <div className="class-card">
          <img className="image-card" src="./js-card.jpg" alt="" />
          <div className="card-desc">
            <h3>JavaScript Basic Class</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio iste, expedita suscipit accusantium sequi rerum similique mollitia aut saepe velit?</p>
          </div>
          <div className="button">
            <button>
              <Link to="/jscourse" className="btn-link">
                Join Class
              </Link>
            </button>
          </div>
        </div> */
