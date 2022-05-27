import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const SummaryJs = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location.state);
  const score = location.state.score;

  if (score.correct <= 7)
    return (
      <div className="summaryjs">
        <h2>SORRY</h2>
        <h3>You Failed the Test</h3>
        <div className="btn-try-again">
          <button onClick={() => history.push('/JsExamTest')} className="btn-fail">
            Try Again
          </button>
        </div>
      </div>
    );
  return (
    <div className="summaryjs">
      <h2>CONGRATULATION</h2>
      <h3>
        You just Finished <b>JAVASCRIPT BASIC CLASS</b>
      </h3>
      <div className="btn-claim">
        <button>
          <a href="https://forms.gle/NqN744YkD5BG5wNt7" rel="noreferrer" target="_blank">
            Claim Your Certificate
          </a>
        </button>
      </div>
    </div>
  );
};

export default SummaryJs;
