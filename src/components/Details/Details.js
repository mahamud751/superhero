import React from 'react';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'


const Details = (props) => {
    const { name, age, position, salary, img, contract } = props.member
    return (
        <div>
            <div className=''>
                <div className="card h-100">
                    <div className='text-center pb-5'>
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                    <div className="card-body">
                        <h4>Name: {name}</h4>
                        <h4>Age: {age}</h4>
                        <h4>Salary: ${salary}</h4>
                        <h4>Position: {position}</h4>
                        <h4><FontAwesomeIcon icon={faPhone} />{contract}</h4>
                        <div className='pt-5 text-center'>
                            <button onClick={() => props.handleDetailsBtn(props.member)} className='normal-btn'>
                                <FontAwesomeIcon icon={faUser} />  Details More</button>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <small className=""> <i className="fa-brands fa-facebook fa-2x"></i> <i className="fa-brands fa-facebook-messenger fa-2x p-3"></i> <i className="fa-brands fa-twitter fa-2x"></i></small>
                    </div>

                </div >
            </div>






            {/* <div classNameName='details text-center'>
                <div classNameName=''>
                    <img src={img} alt="" />
                </div>
                <div classNameName='text-white'>
                    <h4>Name: {name}</h4>
                    <h4>Age: {age}</h4>
                    <h4>Position: {position}</h4>
                    <h4>Salary: {salary}</h4>
                </div>
            </div> */}
        </div >
    );
};

export default Details;