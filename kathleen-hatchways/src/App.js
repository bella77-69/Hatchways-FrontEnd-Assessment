import React from 'react';
import {useState, useEffect} from 'react';
import Students from './Students'

const App = () => {

  const [studentData, setStudentData] = useState([])

  // -----------------API call

  async function fetchURL(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.students)
    setStudentData(data.students)
  }

  //--------------- USE EFFECT

  useEffect(() => {
    fetchURL(`https://api.hatchways.io/assessment/students`);
  }, []);

  function findAverage(array) {
    let sum = 0;
    for (let i =0; i < array.length; i++){
      sum += parseInt(array[i]);
    }
    let totalAverage = sum /array.length
    return totalAverage;
  }

  return(
      <div>
        <h1> TEST </h1>


            {studentData.map((student) => { 
              
              // console.log(student.firstName)
                return <Students
                key={student.id.toString()}
                img={student.pic}
                firstName={student.firstName}
                lastName={student.lastName}
                email={student.email}
                company={student.company}
                skill={student.skill}
                average={findAverage(student.grades)}
                />

              })
            }
      </div>
  )
}

export default App;
