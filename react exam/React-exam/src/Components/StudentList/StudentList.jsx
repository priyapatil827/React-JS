import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../../slices/studentSlice";
import { useNavigate } from "react-router-dom";
import "./StudentList.css";

export default function StudentList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { students, loading, error } = useSelector((state) => state.students);

  const [filterClass, setFilterClass] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    if (students.length === 0) {
      dispatch(fetchStudents());
    }
  }, [dispatch, students.length]);

  const handleAddStudent = () => {
    const newId = Date.now();
    navigate(`/student/${newId}?new=true`);
  };

  const handleEditStudent = (id) => {
    navigate(`/student/${id}`);
  };

  const filteredStudents = students
    .filter((s) => (filterClass ? s.class === filterClass : true))
    .filter((s) => s.name.toLowerCase().includes(searchName.toLowerCase()));

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="sms-list-page">
      <div className="sms-header">
        <h2>Student Management</h2>
        <button className="sms-add-btn" onClick={handleAddStudent}>
          + Add Student
        </button>
      </div>

      <div className="sms-filter-bar">
        <select
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
        >
          <option value="">All Classes</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>

        <input
          type="text"
          placeholder="Search student..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      <div className="sms-table-wrapper">
        <table className="sms-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Class</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                onClick={() => handleEditStudent(student.id)}
                className="sms-row"
              >
                <td>{student.id}</td>
                <td>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                    alt="student"
                    className="sms-avatar"
                  />
                </td>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                  {student.marks.math}/{student.marks.science}/
                  {student.marks.english}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
