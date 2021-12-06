import React from 'react';


const Students = ({ id, img, firstName, lastName, email, company, skill, average }) => {
    return (
        <div className= 'container'>
        
            <img src= {img} className= 'img' alt="avatar" size= '100px'/>
            <div>
                <h1> {firstName} {lastName}</h1>
                <div className= 'info'> Email: {email} </div>
                <div className= 'info'> Company: {company} </div>
                <div className= 'info'> Skill: {skill} </div>
                <div className= 'info'> Average: {average}%</div>
            </div>
        </div>
    )
}


export default Students;