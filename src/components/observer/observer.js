import React, {useState, useEffect} from "react";
import axios from "axios";

const Observer = () => {
const [observerData, setObserverData] = useState([]);

const fetchObserverData = () => {
    axios({
        method: "GET",
        url: "https://educode-api-sslthn31.herokuapp.com/v1/view/observer",
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
        <div className="observer">
            <h1>INI OBSERVER</h1>
            <div className="userlist">
                {observerData.map((data, index) => {
                    return(
                        <div className="user">
                            <p>{data.course}</p>
                            <p>{data.ipAdress}</p>
                            <ul style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: 'wrap',
                                listStyle: 'none'
                            }}>{data.question.map((index, current) =>{
                                    return(
                                        <li style={{margin: "10px"}}>{index}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Observer;