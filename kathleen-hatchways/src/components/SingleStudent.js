import React from "react";
import { useState } from "react";

const SingleStudent = ({
  id,
  img,
  firstName,
  lastName,
  email,
  company,
  skill,
  average,
  grades,
  student,
  createTagForStudent,
  tag,
}) => {
  const [showGrades, setShowGrades] = useState(false);
  const [newTagName, setNewTagName] = useState("");
  const [searchTag, setSearchTag] = useState([]);

  const fullName = `${firstName} ${lastName}`;

  // --------------- ADD THE TAG TO THE STUDENT

  function saveTag() {
    createTagForStudent(student, newTagName);
  }

  return (
    <div className= 'singleStudent'>
      <img src={img} className="img" alt="avatar" width="150" height="150" />
      <div className="name"></div>
        <h1> {fullName}</h1>
        <button
          className="button"
          onClick={() => {
            setShowGrades(!showGrades);
          }}
        >
          {showGrades ? "-" : "+"}
        </button>
        <div className="info"> Email: {email} </div>
        <div className="info"> Company: {company} </div>
        <div className="info"> Skill: {skill} </div>
        <div className="info"> Average: {average}%</div>

        <div>
          {showGrades &&
            grades.map((grade, index) => {
              return (
                <div className= 'testItem' key={grade + " " + index}>
                  <div>
                    {" "}
                    Test {index + 1} : {grade}%{" "}
                  </div>
                </div>
              );
            })}
        </div>
        <div className= 'tagContainer'>
          
          {" "}
          {
            student.tags.map((tag, index) => {
              return (
                <div className= 'tags' key={student.id + " " + tag}>
                  {tag}
                </div>
              );
            }) // ^^^^^^^ SHOWS THE TAG ON THE INDIVIDUAL STUDENT
          }
        </div>
        <div>
          <input // ADDS THE TAG ON ENTER BUTTON
            onChange={(event) => {
              setNewTagName(event.target.value);
            }}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                saveTag();
                event.target.value = "";
              }
            }}
            type="text"
            placeholder="Add a tag"
            className="tagAdder"
          />
        </div>
      </div>

  );
};

export default SingleStudent;
