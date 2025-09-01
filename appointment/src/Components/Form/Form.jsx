import React, { useState } from 'react'
import "./Form.css";
import ListView from '../ListView/ListView';

export default function Form() {
    const date = new Date();

    const [formList, setFormList] = useState([]);

    const [formData, setFormDate] = useState({
        name: "",
        phone: "",
        gender: "Female",
        age: "",
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        doctor: "",
        problem: "",
    });

    const handleInputForm = (e) => {
        const { name, value } = e.target;
        const newData = {
            ...formData,
            [name]: value.trim()
        };
        setFormDate(newData);
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        
        if (formData.name != "" && formData.age != "" && formData.problem != "" && formData.phone != "") {
            console.log(formData);
            let arr = [...formList];
            arr.push(formData);
            setFormList(arr);
        }
        else {
            alert("all field are required");
        }
    }


    return (
        <div className='main'>
            <div className='form-box'>
                <h2>Book Appointment</h2>
                <form action="" className='form' onSubmit={submitForm}>
                    <label htmlFor="name">Full Name</label>
                    <input onChange={handleInputForm} type="text" name="name" />

                    <label htmlFor="phone">Contact No.</label>
                    <input onChange={handleInputForm} type="phone" name="phone" />

                    <label htmlFor="gender">Gender</label>
                    <div className='gender'>
                        <div>
                            <input onChange={handleInputForm} type="radio" value={"Male"} name="gender" />
                            <label htmlFor="">Male</label>
                        </div>

                        <div>
                            <input onChange={handleInputForm} type="radio" value={"Female"} name="gender" />
                            <label htmlFor="">Female</label>
                        </div>
                    </div>

                    <label htmlFor="age">Age</label>
                    <input onChange={handleInputForm} type="number" name="age" />

                    <label htmlFor="date">Appointment Date</label>
                    <input onChange={handleInputForm} type="date" name="date" />

                    <label htmlFor="doctor">Select Doctor</label>
                    <select onChange={handleInputForm} name="doctor" id="">
                        <option value="Dr.Magenta">Dr.Magenta</option>
                        <option value="Dr.Orange">Dr.Orange</option>
                        <option value="Dr.Red">Dr.Red</option>
                        <option value="Dr.Blue">Dr.Blue</option>
                    </select>

                    <label htmlFor="problem">Share your problem...</label>
                    <textarea onChange={handleInputForm} name="problem" id=""></textarea>

                    <button type='submit'>Book Appointment</button>
                </form>
            </div>

            <div className='detail'>
                <ListView formList={formList} />
            </div>
        </div>
    )
}
