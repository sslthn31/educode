import React from 'react';
import { Link } from 'react-router-dom';

const ClassList = () => {
  return (
    <div className="class">
      <div className="class-title">
        <h2>Class List</h2>
      </div>
      <div className="class-list">
        <div className="class-card">
          <div className="class-image">
            <img src="./js-card.jpg" alt="" />
          </div>
          <div className="card-desc">
            <h3>JavaScript Basic Class</h3>
            <p>Course About basic in JavaScript</p>
          </div>
          <div className="button">
            <button>
              <Link to="/jscourse" className="btn-link">
                Join Class
              </Link>
            </button>
          </div>
        </div>
        <div className="class-card">
          <div className="class-image">
            <img src="./html-card.jpg" alt="" />
          </div>
          <div className="card-desc">
            <h3>HTML Basic Class</h3>
            <p>Course About basic in HTML</p>
          </div>
          <div className="button">
            <button>
              <Link to="/htmlcourse" className="btn-link">
                Join Class
              </Link>
            </button>
          </div>
        </div>
        <div className="class-card">
          <div className="class-image">
            <img src="./css-card.jpg" alt="" />
          </div>
          <div className="card-desc">
            <h3>CSS Basic Class</h3>
            <p>Course About basic in CSS</p>
          </div>
          <div className="button">
            <button>
              <Link to="/csscourse" className="btn-link">
                Join Class
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassList;
