import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const SummaryHtml = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location.state);
  const score = location.state.score;

  if (score.correct <= 75)
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
        You just Finished <b>HTML BASIC CLASS</b>
      </h3>
      <div className="btn-claim">
        <button>
          <a href="https://forms.gle/Vd4hN1i4sputuaAm8" rel="noreferrer" target="_blank">
            Claim Your Certificate
          </a>
        </button>
      </div>
    </div>
  );
};

export default SummaryHtml;
