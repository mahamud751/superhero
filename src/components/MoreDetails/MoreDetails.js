import React from 'react';
import './MoreDetails.css'

const MoreDetails = (props) => {
    const { showDetails } = props
    let totalQuantity = 0;
    let salary = 0;
    let name = [];
    for (const member of showDetails) {
        totalQuantity = totalQuantity + member.id
        salary = salary + member.salary
        name = name + " :: " + member.name
    }
    return (
        <div>
            <h1 className='text-center'>Total Members: {totalQuantity}</h1>
            <br />
            <h4 className='text-center'>Salary: ${salary}</h4>
            <br />
            <div className='card-body text-center fs-2 name p-5'>
                <i class="fa-solid fa-user"></i>
                <h1 className='fs-2'>
                    {name}
                </h1>
            </div>

        </div>
    );
};

export default MoreDetails;