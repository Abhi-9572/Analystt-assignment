import React from 'react'

const ShowDetails = ({val,show}) => {
    
    return (
        <div>

            {show &&   <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <h5>Description</h5>
                <div>{val.company.catchPhrase}</div>
                <br/>
                <div className='description'>
                    <div className='left'>
                    <h5>Contact Person</h5>
                    <div>{val.name}</div>
                    <h5>Designation</h5>
                    <div>{val.address.street}</div>
                    <h5>Emails</h5>
                    <div>{val.email}</div>
                    </div>
                    <div className='right'>
                    <h5>Address</h5>
                    <div>{val.address.city}</div> 
                    <h5>Company</h5>
                    <div>{val.company.name}</div> 
                    <h5>Country</h5>
                    <div>India</div> 
                    </div>
                </div>
                
            </div>
            }
        </div>
    )
}

export default ShowDetails