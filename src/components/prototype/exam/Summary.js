import React from 'react';
import { useLocation } from 'react-router-dom';

const Summary = () => {
  const location = useLocation();
  console.log(location.state);
  if (location.state.score.correct < 3) return <div>Try Again</div>;

  return <div>LULUS</div>;
};

export default Summary;
