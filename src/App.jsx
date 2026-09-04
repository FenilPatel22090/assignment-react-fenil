import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("students");

  const students = [
    {
      name: "Vishal",
      course: "BCA",
      semester: "5th Semester",
    },
    {
      name: "Shravan",
      course: "Arts",
      semester: "1st Semester",
    },
    {
      name: "Gitesh",
      course: "BCom",
      semester: "6th Semester",
    },
  ];

  return (
    <div className="app">

      {/* STUDENT PAGE */}
      {page === "students" && (
        <>
          <h1>Student Profile</h1>

          <div className="student-container">
            {students.map((student, index) => (
              <StudentCard
                key={index}
                name={student.name}
                course={student.course}
                semester={student.semester}
              />
            ))}
          </div>

          {/* TEXT ANALYZER BUTTON */}
          <button
            className="analyzer-btn"
            onClick={() => setPage("analyzer")}
          >
            Text Analyzer
          </button>
        </>
      )}

      {/* TEXT ANALYZER PAGE */}
      {page === "analyzer" && (
        <TextAnalyzer
          onBack={() => setPage("students")}
        />
      )}

    </div>
  );
}


/* STUDENT CARD */

function StudentCard({ name, course, semester }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="student-card">

      <h2>{name}</h2>

      <p>-Course: {course}</p>

      <p>Semester: {semester}</p>

      <button
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="details">
          <p>Name: {name}</p>
          <p>Course: {course}</p>
          <p>Semester: {semester}</p>
        </div>
      )}

    </div>
  );
}


/* TEXT ANALYZER */

function TextAnalyzer({ onBack }) {
  const [text, setText] = useState("");

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const characters = text.length;

  return (
    <div className="analyzer-page">

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Student Profile
      </button>

      <h1>Text Analyzer</h1>

      <textarea
        placeholder="Write something here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="stats">

        <div className="stat-box">
          <span>Words</span>
          <strong>{words}</strong>
        </div>

        <div className="stat-box">
          <span>Characters</span>
          <strong>{characters}</strong>
        </div>

      </div>

    </div>
  );
}

export default App;