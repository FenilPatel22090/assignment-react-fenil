import StudentCard from "./components/StudentCard";
import TextAnalyzer from "./components/TextAnalyzer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Student Profile</h1>

      <div className="student-container">
        <StudentCard
          name="Vishal"
          course="BCA"
          semester="5th Semester"
          email="vishal@gmail.com"
          phone="9876543210"
          city="Navsari"
        />

        <StudentCard
          name="Shravan"
          course="Arts"
          semester="1st Semester"
          email="Shravan@gmail.com"
          phone="1234567890"
          city="Maroli"
        />

        <StudentCard
          name="Gitesh"
          course="Bcom"
          semester="6th Semester"
          email="gitesh@gmail.com"
          phone="9876512340"
          city="Billimora"
        />
      </div>

      <TextAnalyzer />
    </div>
  );
}

export default App;