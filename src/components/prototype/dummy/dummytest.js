import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

//Axios.get(`http://localhost:5000/v1/dummy/data?page=${page}&perPage=1`)

const DummyTest = () => {
    const [tangkep, setTangkep] = useState([]);
    const [counter, setCounter] = useState(1);
    const [loading, setLoading] = useState(false);
    const nangkepApi = (page) =>{
        Axios.get(`https://educode-api.vercel.app/v1/course/jscourse?page=${page}&perPage=1`)
    .then(res => {
        console.log(res.data.data)
        setTangkep(res.data.data)
        setLoading(true)
    })
    .catch(err => {
        console.log("error :", err)
        setLoading(false)
    })
    }
    useEffect(() => {
        nangkepApi(counter)
    }, [counter]);

    const nextButton = () => {
        setCounter(counter >= 9 ? 9 : counter + 1)
        setLoading()
        console.log(counter);
    }
    const prevButton = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
        setLoading()
        console.log(counter);
    }
    
    if (loading) {
        return(
            <div className="test">
                {tangkep.map(datanya => {
                        return(
                            <div key={datanya._id}>
                                <p>{datanya.title}</p>
                                <iframe width="560" height="315" src={datanya.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div> 
                    )
                })}
             {counter === 1 ? null : <button onClick={prevButton}>PREV</button>}
            {counter === 9 ? <button> <Link to="/examStart">TES</Link></button> : <button onClick={nextButton}>NEXT</button>}
            </div> 
        )
    }return <TailSpin color="#000000" height={200} width={200} />
}

export default DummyTest;
