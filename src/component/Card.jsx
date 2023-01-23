import React, { useState } from 'react'
import ShowDetails from './ShowDetails';

const Card = ({ data }) => {

    const [show, setShow] = useState(false);
    const showAndHide = (e) => {
        setShow(!show)
    }
    console.log(data);
    return (
        <>
            {

                
                    <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded"><table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">CONTACT</th>
                                <th scope="col">CITY</th>
                                <th scope="col">STREET</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.address.city}</td>
                                <td>{data.address.street}</td>
                                <button  onClick={(e) => showAndHide(e)}>{!show?"Show Details":"Hide Details"}</button>
                            </tr>

                        </tbody>
                    </table>
                       <ShowDetails val={data} show={show}/>

                    </div>
                    
                }
            
        </>
    )
}

export default Card