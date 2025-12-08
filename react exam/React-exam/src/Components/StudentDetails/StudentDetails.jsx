import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateStudent, addStudent, deleteStudent } from "../../slices/studentSlice";
import "./StudentDetails.css";

export default function StudentDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isNew = searchParams.get("new") === "true";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { students } = useSelector((state) => state.students);

  const existingStudent = students.find((s) => s.id.toString() === id);

  const [formData, setFormData] = useState({
    id: existingStudent ? existingStudent.id : "",
    name: "",
    age: 18,
    class: "12th",
    email: "",
    phone: "",
    address: "",
    marks: { math: 0, science: 0, english: 0 },
  });

  useEffect(() => {
    if (existingStudent) setFormData(existingStudent);
  }, [existingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (formData.marks && name in formData.marks) {
      setFormData({ ...formData, marks: { ...formData.marks, [name]: Number(value) } });
    } else if (name === "age" || name === "id") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    if (!formData.id) { alert("Please enter Student ID"); return; }
    if (existingStudent) dispatch(updateStudent(formData));
    else dispatch(addStudent(formData));
    navigate("/students");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteStudent(formData.id));
      navigate("/students");
    }
  };

  return (
    <div className="student-details-page">
      <div className="student-details-card">
        <h2>{existingStudent ? "Edit Student" : "Add New Student"}</h2>

        <div className="student-form">
          <input type="number" name="id" placeholder="Student ID" value={formData.id} onChange={handleChange} />
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
          <input type="text" name="class" placeholder="Class" value={formData.class} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

          <h4>Marks</h4>
          <div className="marks-grid">
            <input type="number" name="math" placeholder="Math" value={formData.marks.math} onChange={handleChange} />
            <input type="number" name="science" placeholder="Science" value={formData.marks.science} onChange={handleChange} />
            <input type="number" name="english" placeholder="English" value={formData.marks.english} onChange={handleChange} />
          </div>

          <div className="form-buttons">
            <button className="btn-save" onClick={handleSave}>
              {existingStudent ? "Update Student" : "Add Student"}
            </button>
            {existingStudent && <button className="btn-delete" onClick={handleDelete}>Delete</button>}
            <button className="btn-back" onClick={() => navigate("/students")}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
