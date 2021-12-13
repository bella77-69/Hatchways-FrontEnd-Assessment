import React from "react";
import { useState, useEffect } from "react";
import Students from "./components/Students";
import SearchName from "./components/SearchName";
import SearchTag from "./components/SearchTag";

const App = () => {
  const [studentData, setStudentData] = useState([]);
  const [studentNameFilter, setStudentNameFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  // -----------------API call

  async function fetchURL(url) {
    const response = await fetch(url);
    const data = await response.json();
    const students = data.students;
    students.forEach((student) => {
      student.tags = [];
    });
    setStudentData(students);
  }

  //--------------- USE EFFECT

  useEffect(() => {
    fetchURL(`https://api.hatchways.io/assessment/students`);
  }, []);

  // -------------- Average Grade

  function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += parseInt(array[i]);
    }
    let totalAverage = sum / array.length;
    return totalAverage;
  }

  // --------------- Name Search

  const nameFilter = (filterString) => {
    if (filterString && filterString.toLowerCase) {
      filterString = filterString.toLowerCase();
    }
    let filtered = [];
    studentData.forEach((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();

      if (!filterString || fullName.includes(filterString)) {
        filtered.push(student);
      }
    });
    return filtered;
  };

  //----------------- Adding a Tag

  const createTagForStudent = (student, newTag) => {
    student.tags.push(newTag);

    const indexOfStudent = studentData.findIndex((s) => s.id === student.id);
    let studentDataWithChanges = [
      ...studentData.slice(0, indexOfStudent),
      student,
      ...studentData.slice(indexOfStudent + 1),
    ];
    setStudentData(studentDataWithChanges);
  };

  // ------------------- Search Tags

  const searchTags = (tagInput) => {
    if (tagInput && tagInput.toLowerCase) {
      tagInput = tagInput.toLowerCase();
    }

    let searchTagsArray = [];
    studentData.forEach((student) => {
      let tagExists = false;
      student.tags.forEach((t) => {
        if (t.toLowerCase().includes(tagInput)) {
          tagExists = true;
        }
      });

      if (!tagInput || tagExists) {
        searchTagsArray.push(student);
      }
    });
    return searchTagsArray;
  };

  const filteredByNameStudents = nameFilter(studentNameFilter);
  const filteredByTagStudents = searchTags(tagFilter);
  const combinedFilteredStudents = [];

  //-------------- Combine Search Arrays

  filteredByNameStudents.forEach((student) => {
    if (filteredByTagStudents.includes(student)) {
      combinedFilteredStudents.push(student);
    }
  });

  //------------------- Return

  return (
    <div className="container">
      <div className="searchName" fontFamily="Raleway" fontSize="100px">
        <SearchName
          handleSearchName={setStudentNameFilter}
          placeholder="Search by name"
        />
      </div>
      <div className="searchTag" fontFamily="Raleway">
        <SearchTag handleSearchTag={setTagFilter} placeholder="Search by tag" />
      </div>
      <div>
        {" "}
        <Students
          students={combinedFilteredStudents}
          handleAverage={findAverage}
          createTagForStudent={createTagForStudent}
        />
      </div>
    </div>
  );
};

export default App;
