import React from 'react';
import {useState, useEffect} from 'react';
import Students from './Students'

const App = () => {

  const [studentData, setStudentData] = useState([])

  // -----------------API call

  async function fetchURL(url) {
    const response = await fetch(url);
    const data = await response.json();
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
            {studentData.map((student) => { 
                return <Students
                key={student.id.toString()}
                img={student.pic}
                firstName={student.firstName.toUpperCase()}
                lastName={student.lastName.toUpperCase()}
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
