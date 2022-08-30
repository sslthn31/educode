import React, {useState, useEffect} from "react";
import axios from "axios";

const Observer = () => {
const [observerData, setObserverData] = useState([]);

const fetchObserverData = () => {
    axios({
        method: "GET",
        url: "https://educode-api-sslthn31.herokuapp.com/v1/view/observer?page=all",
    })
    .then((res) => {
        console.log(res.data.data);
        setObserverData(res.data.data);
    })
    .catch((err) => {
        console.log(err)
    })
}
useEffect(() => {
    fetchObserverData();
}, [Observer])
    return(
        <>
        <div className="observer"
        style={{
            padding: '1rem'
        }}>
            <h1>OBSERVER</h1>
            <div className="userlist">
                {observerData.map((data, index) => {
                    return(
                        <div className="user"
                        style={{
                            border: '1px solid #000',
                            padding: '0 10px',
                            margin: '1rem'
                        }}
                        >
                            <p>Course : {data.course}</p>
                            <p>User : Guest {data.ipAdress}</p>
                            <p>Start At : {data.startedAt}</p>
                            <ol style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: 'wrap',
                                
                            }}>{data.question.map((index, current) =>{
                                    return(
                                        <li style={{margin: "25px"}}>{index}</li>
                                    )
                                })}
                            </ol>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Observer;