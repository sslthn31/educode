import React from 'react';
import { useHistory } from 'react-router-dom';
const Fail = () => {
  const history = useHistory();
  return (
    <div className="summaryjs">
      <h2>SORRY</h2>
      <h3>You Failed the Test</h3>
      <div className="btn-try-again">
        <button onClick={() => history.push('/')} className="btn-fail">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Fail;
