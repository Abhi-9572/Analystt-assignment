import React, { useEffect, useState } from 'react'
import Card from './Card';

const DataFetch = () => {

    const pageLength = 3;

    const pageNoArray = [0, 1, 2, 3]

    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(0)



    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((userData) => {
                const newPageData = userData.slice(pageNo * pageLength, pageLength * (pageNo + 1))
                setData(newPageData)
            })
    }
    useEffect(() => {
        fetchData();
    }, [pageNo])
    return (
        <div>
            
            {
                data.map((val,i) => {
                    return <Card key={i} data={val} />
                })
            }



            <ul className='pagination'>
                <div className='mx-auto d-flex'>
                    <li className={'page-item ' + (pageNo === 0 ? 'disabled' : '')} >
                        <button className='page-link' onClick={() => setPageNo(p => p - 1)}> <span>&laquo;</span> </button>
                    </li>
                    {
                        pageNoArray.map((i) =>
                            <li className={'page-item ' + (pageNo === i ? 'active' : '')} key={i} >
                                <button className='page-link' onClick={() => setPageNo(i)}>
                                    {i + 1}
                                </button>
                            </li>
                        )
                    }
                    <li className={'page-item ' + (pageNo === 3 ? 'disabled' : '')}>
                        <button className='page-link' onClick={() => setPageNo(p => p + 1)}> <span>&raquo;</span> </button>
                    </li>
                </div>
            </ul >

        </div>

    )
}

export default DataFetch