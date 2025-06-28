import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const initialStudents = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  // Add more students...
];

export default function Dashboard() {
  const [students] = useState(initialStudents);
  const [present, setPresent] = useState([...initialStudents]);
  const [absent, setAbsent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/login');
    }
  }, []);

  const handleAbsent = (student) => {
    setAbsent([...absent, student]);
    setPresent(present.filter(s => s.id !== student.id));
  };

  const handlePresent = (student) => {
    setPresent([...present, student]);
    setAbsent(absent.filter(s => s.id !== student.id));
  };

  return (
    <div className="dashboard">
      <h1>Class Attendance</h1>
      <div className="list-container">
        {/* Present List */}
        <div className="present-list">
          <h2>Present ({present.length})</h2>
          {present.map(student => (
            <div key={student.id} className="student-card">
              <span>{student.name}</span>
              <button onClick={() => handleAbsent(student)}>Mark Absent</button>
            </div>
          ))}
        </div>
        
        {/* Absent List */}
        <div className="absent-list">
          <h2>Absent ({absent.length})</h2>
          {absent.map(student => (
            <div key={student.id} className="student-card">
              <span>{student.name}</span>
              <button onClick={() => handlePresent(student)}>Mark Present</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}