import React from 'react';
import SingleStudent from './SingleStudent';


const Students = ({students, handleAverage}) => {

    return (
    <div>
         {students.map((student) => { 
             return <SingleStudent
                 key={student.id.toString()}
                 img={student.pic}
                 firstName={student.firstName.toUpperCase()}
                 lastName={student.lastName.toUpperCase()}
                 email={student.email}
                 company={student.company}
                 skill={student.skill}
                 average={handleAverage(student.grades)}
             />
         })}
     </div>
    )
}

// return (
//     <div>
//          {studentData.map((student) => { 
//              return <SingleStudent
//                  key={student.id.toString()}
//                  img={student.pic}
//                  firstName={student.firstName.toUpperCase()}
//                  lastName={student.lastName.toUpperCase()}
//                  email={student.email}
//                  company={student.company}
//                  skill={student.skill}
//                  average={handleAverage}
//              />
//          })}
//      </div>
// )


export default Students;
