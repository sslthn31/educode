import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';
const SummaryHtml = () => {
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
        {value:400, name:'Front-End Developer'},
        {value:80, name:'Back-End Developer'},
        {value:54, name:'Full-Stack Developer'},
        
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
          <button onClick={() => history.push('/HtmlExamTest')} className="btn-fail">
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
          <a href="https://forms.gle/Vd4hN1i4sputuaAm8" rel="noreferrer" target="_blank">
            Claim Your Certificate
          </a>
        </button>
      </div>
    </div>
  );
};

export default SummaryHtml;
