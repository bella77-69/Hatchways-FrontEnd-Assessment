import React from 'react';

const SingleStudent = ({ id, img, firstName, lastName, email, company, skill, average }) => {

    const fullName = `${firstName} ${lastName}`;

    return (
        <div className= 'container'>
            <img src= {img} className= 'img' alt="avatar" size= '100px'/>
            <div>
                <h1> {fullName}</h1>
                <div className= 'info'> Email: {email} </div>
                <div className= 'info'> Company: {company} </div>
                <div className= 'info'> Skill: {skill} </div>
                <div className= 'info'> Average: {average}%</div>
            </div>
        </div>
    )
}


export default SingleStudent;