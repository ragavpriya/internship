
import React, { useState } from "react";

function App() {
  const [studentCount, setStudentCount] = useState(3);

  const students = [
    {
      id: 1,
      name: "Ravi",
      age: 20,
      city: "Chennai",
      marks: 95,
      course: "MCA",
    },
    {
      id: 2,
      name: "Priya",
      age: 21,
      city: "Salem",
      marks: 88,
      course: "",
    },
    {
      id: 3,
      name: "Karthik",
      age: 22,
      city: "Coimbatore",
      marks: 90,
      course: "BCA",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Details</h1>

      <h3>Total Students: {studentCount}</h3>

    
      <button onClick={() => setStudentCount(studentCount + 1)}>
        Increase Student Count
      </button>

      <hr />


      {students
        .filter((student) => student.marks > 75)
        .map((student) => (
          <div
            key={student.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2>{student.name}</h2>

         
            <p>Age: {student.age}</p>

         
            <p>City: {student.city}</p>

            <p>Marks: {student.marks}</p>

   
            {student.marks > 90 && (
              <h3 style={{ color: "green" }}>🏆 Topper</h3>
            )}

         
            {student.course && <p>Course: {student.course}</p>}
          </div>
        ))}
    </div>
  );
}

export default App;

