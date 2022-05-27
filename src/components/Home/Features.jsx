import React from 'react';

const Features = () => {
  return (
    <div className="features">
      <h2>Our Features</h2>
      <div className="features-cards-list">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="./webinar.png" alt="" />
          </div>
          <h4>E-Learning Video</h4>
          <p>You Will learn in interactive video and easy to understand</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <img src="./online-test.png" alt="" />
          </div>
          <h4>Online Test</h4>
          <p>after E-Learning, You will do a test to find out your Skill</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <img src="certificate.png" alt="" />
          </div>
          <h4>Online Certificate</h4>
          <p>after you passed the test, you will get online certificate. to proof you already passed the class</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
