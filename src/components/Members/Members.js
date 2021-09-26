import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import MoreDetails from '../MoreDetails/MoreDetails';
import './Members.css'

const Members = () => {
    const [members, setMembers] = useState([])
    const [showDetails, setShowDetails] = useState([])

    // fetch Api
    useEffect(() => {
        fetch('team.JSON')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setMembers(data))
    }, [])

    //handle btn
    const handleDetailsBtn = (member) => {
        let newCartAdd = [...showDetails]
        const memberArray = showDetails.find(memberKey => memberKey === member)
        if (memberArray) {
            member.quantity = member.quantity + 1
        }
        else {
            member.quantity = 1
            newCartAdd.push(member)
        }
        setShowDetails(newCartAdd)
    }
    return (
        <div>
            <div className='members'>
                <div className="row row-cols-1 row-cols-lg-3 g-4 members-right">
                    {
                        members.map(member => <Details
                            key={member.name}
                            handleDetailsBtn={handleDetailsBtn}
                            member={member}
                        ></Details>)
                    }
                </div>
                <div>
                    <MoreDetails
                        showDetails={showDetails}
                    ></MoreDetails>
                </div>
            </div>
        </div >

    );
};

export default Members;