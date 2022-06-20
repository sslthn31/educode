import React from 'react';

const NewFeatures = () => {
  return (
    <div className="newfeatures">
      <div className="newfeatures-container">
        <div className="newfeatures-img">
          <img src="./text-editor.png" alt="" />
        </div>
        <div className="newfeatures-desc">
          <h3>We Have New Features</h3>
          <h4>You Can Write HTML, CSS, and Javascript From Your Browser</h4>
          <button>
            <a target="_blank" rel="noreferrer" href="https://educode-online-text-editor.netlify.app/">
              Try Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFeatures;
