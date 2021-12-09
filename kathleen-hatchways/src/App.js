import React from 'react';
import {useState, useEffect} from 'react';
import Students from './components/Students';
import Search from './components/Search';

const App = () => {

  const [studentData, setStudentData] = useState([]);
  const [filterName, setFilterName] =useState([]);

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

    // -------------- Average Grade

  function findAverage(array) {
    let sum = 0;
    for (let i =0; i < array.length; i++){
       sum += parseInt(array[i]);
    }
    let totalAverage = sum /array.length
    return totalAverage;
  }

  // --------------- Name Filter
  const nameFilter = ( filterString ) => {
    filterString = filterString.toLowerCase();
    let filtered = [];
    studentData.forEach((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();

      if(!filterString || fullName.includes(filterString)) {
        filtered.push(student)
      }
    });
    return filtered;
    // setFilterName(newName);
  };

  const filteredStudents = nameFilter(filterName);

  return(
      <div>
        
        <Search
          handleSearchName= {setFilterName}
        />
        <Students
          students={filteredStudents}
          handleAverage= {findAverage}
        />
      </div>
  )
}

export default App;
