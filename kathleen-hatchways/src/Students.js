import React from 'react';


const Students = ({ id, img, firstName, lastName, email, company, skill, average }) => {
    return (
        <div className= 'container'>
        
            <img src= {img} alt="avatar" />
            <h1> {firstName} {lastName}</h1>
            <p>Email: {email} </p>
            <p>Company: {company} </p>
            <p>Skill: {skill} </p>
            <p>Average: {average}%</p>
        </div>
    )
}


export default Students;