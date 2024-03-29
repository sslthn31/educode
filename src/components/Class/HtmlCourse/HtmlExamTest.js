import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HtmlQuestionData } from '../../certificationquestiondata/Htmlquestiondata';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { useTimer } from 'react-timer-hook';
import Axios from 'axios';
import axios from 'axios';

const HtmlExamTest = () => {
  const [currentIndex, setCurrentIndext] = useState(0);
  const [ipUser, setIpUser] = useState([]);
  const [quiz, setQuiz] = useState(HtmlQuestionData);
  const { id, question, options } = quiz[currentIndex];
  const [score, setScore] = useState({
    correct: 0,
    false: 0,
  });
  let history = useHistory();
  const timesUp = () => {
    history.push('/');
    alert('Times Up');
  };
  const MENIT = 90 * 60;
  const time = new Date();
  time.setSeconds(time.getSeconds() + MENIT);
  const { seconds, minutes, hours } = useTimer({ expiryTimestamp: time, onExpire: () => timesUp() });

  //   console.log(currentIndex);
  //   console.log(quiz.length - 1);

  const prevButton = () => {
    if (currentIndex === 0) return;
    setCurrentIndext(currentIndex - 1);
  };

  const nextButton = () => {
    if (quiz.length - 1 === currentIndex) return;
    setCurrentIndext(currentIndex + 1);
  };

  const selectedOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      quiz.map((item, index) =>
        index === indexSelected
          ? {
              ...item,
              selected: true,
              options: options.map((item, index) => (index === indexOptionSelected ? { ...item, selected: true } : { ...item, selected: false })),
            }
          : item
      )
    );
  };

  useEffect(() => {
    const fetchIpUser = () => {
      axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_T5NqmEUit0eOk2w1dlymaTQHhMakD')
      .then((res) => {
        // console.log('ini 1', res);
        setIpUser(res.data.ip);
      })
      .catch((err) => {
        console.log(err)
      })
    }
    fetchIpUser()
    
    const ngeMap = quiz.map((nomor) => {
      return nomor.id
    })

    const tanggal = new Date();

    const tanggalSekarang = tanggal.toLocaleString('en-US', {
      weekday: 'short', // long, short, narrow
      day: 'numeric', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: 'long', // numeric, 2-digit, long, short, narrow
      hour: 'numeric', // numeric, 2-digit
      minute: 'numeric', // numeric, 2-digit
      second: 'numeric', // numeric, 2-digit
  })
  const postUserData = () => {
    const dataBody = {
      course: 'HTML Course',
      ipAdress: ipUser,
      question: ngeMap,
      startedAt: tanggalSekarang,
    }
    Axios({
      method: 'POST',
      url: 'https://educode-api.vercel.app/v1/view/observer',
      data: dataBody,
    })
    .then((res) => {
      // console.log("success")
      // console.log('ini 2', res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  postUserData() 
  
  const checkScore = () => {
    const questionAnswered = quiz.filter((item) => item.selected);
    const questionCorrect = questionAnswered.filter((item) => item.options.find((options) => options.correct && options.selected === options.correct));
    setScore({
      correct: questionCorrect.length,
      false: quiz.length - questionCorrect.length,
    });
  };
  checkScore();
  }, [quiz, ipUser]);
  //- Score : {score.correct} : {score.false}
  return (
    <div className="quiz">
      <h3>
        Test is Starting - {hours}:{minutes}:{seconds}
      </h3>
      <div className="quiz-card ">
        <div className="card-header">
          <h4>
            {currentIndex + 1}. {question}
          </h4>
        </div>
        <div className="card-body">
          {options.map((item, index) => (
            <div className="value" key={item.title}>
              <div className="option-icon" onClick={() => selectedOption(currentIndex, index)}>
                {item?.selected ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btn-action">
        {currentIndex === 0 ? null : (
          <button className="prev-btn" onClick={() => prevButton()}>
            <ImArrowLeft />
            PREV
          </button>
        )}
        {currentIndex === quiz.length - 1 ? (
          <button
            onClick={() =>
              history.push({
                pathname: '/summaryHtml',
                state: {
                  quiz,
                  score,
                },
              })
            }
          >
            Finish
          </button>
        ) : (
          <button className="nxt-btn" onClick={() => nextButton()}>
            NEXT <ImArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default HtmlExamTest;
