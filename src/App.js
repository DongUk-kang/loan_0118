import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {

    // 1. 데이터 담을 공간
    const [loans, setLoans] = useState([])
    const [loading, setLoading] = useState(true)

    //3. 네트워킹 함수
    const getData = async () => {
        return (
            await axios.get('https://api.kivaws.org/v1/loans/newest.json')
                 // .then(aaa => console.log(aaa.data.loans))
                .then(aaa => {
                    setLoans(aaa.data.loans)
                    setLoading(false)
                })
                .catch(err => console.log(err))

        )
    }

    //2. 자동실행 함수 useEffect
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {loading ?
                <div>
                    <h1>
                        loading ...
                    </h1>
                </div>
            : (
                    <div>
                        {loans.map(loan => (
                            <>
                                <h1>{loan.name}</h1>
                                <h2>{loan.status}</h2>
                                <h3>{loan.loan_amount}</h3>
                            </>
                        ))}
                    </div>

                )
            }
        </>

    );
};

export default App;
