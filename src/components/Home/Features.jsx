import React from 'react';

const Features = () => {
  return (
    <div className="features">
      <div className="features-cards-list">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="./webinar.png" alt="" />
          </div>
          <h4>E-Learning Video</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quidem facere ut sequi sed dicta, officiis fuga quisquam dolorum nisi!</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <img src="./online-test.png" alt="" />
          </div>
          <h4>Online Test</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quidem facere ut sequi sed dicta, officiis fuga quisquam dolorum nisi!</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <img src="certificate.png" alt="" />
          </div>
          <h4>Online Certificate</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quidem facere ut sequi sed dicta, officiis fuga quisquam dolorum nisi!</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
