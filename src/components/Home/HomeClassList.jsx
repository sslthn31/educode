import React from 'react';
import {Link} from 'react-router-dom';

const HomeClassList = () => {
    return(
        <div className="home-class">
        <div className="class-card-list">
          <div className="class-card">
              <img className="image-card" src="./js-card.jpg" alt="" />
            <div className="card-desc">
              <h3>JavaScript Basic Class</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio iste, expedita suscipit accusantium sequi rerum similique mollitia aut saepe velit?</p>
            </div>
              <div className="button">
              <button><Link to='/dummy' className='btn-link'>Join Class</Link></button>
              </div>
          </div>
        </div>
      </div>
    )
}
export default HomeClassList;