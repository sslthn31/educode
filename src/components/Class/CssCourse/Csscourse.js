import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const CssCourse = () => {
  const [tangkep, setTangkep] = useState([]);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);
  const nangkepApi = (page) => {
    Axios.get(`https://educode-api-sslthn31.herokuapp.com/v1/course/csscourse?page=${page}&perPage=1`)
      .then((res) => {
        console.log(res.data.data);
        setTangkep(res.data.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log('error :', err);
        setLoading(false);
      });
  };
  useEffect(() => {
    nangkepApi(counter);
  }, [counter]);

  const nextButton = () => {
    setCounter(counter >= 10 ? 10 : counter + 1);
    setLoading();
    console.log(counter);
  };
  const prevButton = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    setLoading();
    console.log(counter);
  };

  if (loading) {
    return (
      <div className="course">
        {tangkep.map((datanya) => {
          return (
            <div className="course-container" key={datanya._id}>
              <h2>{datanya.title}</h2>
              <div className="course-desc">
                <p>{datanya.description}</p>
              </div>
              <div className="course-desc-image">
                <img src={`https://educode-api-sslthn31.herokuapp.com/${datanya.image}`} alt="" />
              </div>
              <div className="link-text-editor">
                <button>
                  <a href="https://educode-online-text-editor.netlify.app/" target="_blank">
                    Try Here
                  </a>
                </button>
              </div>
            </div>
          );
        })}
        <div className="course-button-list">
          {counter === 1 ? (
            <button disabled onClick={prevButton}>
              PREV
            </button>
          ) : (
            <button onClick={prevButton}>PREV</button>
          )}
          {counter === 10 ? (
            <button>
              <Link to="/CssExamTest" className="test-link">
                TES
              </Link>
            </button>
          ) : (
            <button onClick={nextButton}>NEXT</button>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="loading">
      <TailSpin color="#000000" height={200} width={200} />
    </div>
  );
};

export default CssCourse;
