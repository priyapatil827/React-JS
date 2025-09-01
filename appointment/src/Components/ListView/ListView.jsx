import React from "react";
import "./ListView.css";

export default function ListView(props) {
    return (
        <div>
            {props.formList.map((form, index) => (
                <div className="card" key={index}>
                    <h3 className="card-heading">Appointment {index + 1}</h3>
                    <p><b>Name :</b>{form.name}</p>
                    <p><b>Mobile No :</b>{form.phone}</p>
                    <p><b>Gender :</b>{form.gender}</p>
                    <p><b>Age :</b>{form.age}</p>
                    <p><b>Date :</b>{form.date}</p>
                    <p><b>Doctor :</b>{form.doctor}</p>
                    <p><b>Problem :</b>{form.problem}</p>
                </div>
            ))}
        </div>
    );
}
