import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';

const SummaryJs = () => {
  const history = useHistory();
  const location = useLocation();
  // console.log(location.state);
  const score = location.state.score;

  const option = {
    title : {
      text: 'Statistic',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
      {
      name: 'Statistic',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value: 1100, name:'Front-End Developer'},
        {value: 800, name:'Back-End Developer'},
        {value: 700, name:'Full-Stack Developer'},
        
      ],
      itemStyle: {
        emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      }
    ]
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts) {
    // console.log('echarts is ready', echarts);
  }

  function onChartClick(param, echarts) {
    // console.log(param, echarts);
    setCount(count + 1);
  };

  function onChartLegendselectchanged(param, echarts) {
    // console.log(param, echarts);
  };

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
        You just Finished <b>JAVASCRIPT BASIC CLASS</b>
      </h3>
      <div className="statistic">
        <ReactECharts
        option={option}
        style={{ height: 400 }}
        onChartReady={onChartReady}
        onEvents={{
          'click': onChartClick,
          'legendselectchanged': onChartLegendselectchanged
         }}
      />
      </div>
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
