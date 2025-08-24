import React from 'react'
import "./About.css";

export default function About(props) {

  const {name,bio}=props.user;

  return (
    <div id='about' className="profile-section">
        <div className="info-section">
            <h2 className="name">Hello , I'm {name}</h2>
            <p className="p1">{bio}</p>
            <p className="p2">"Turning ideas into interactive experiences, I craft clean and responsive websites with modern technologies. Every line of code is a step toward creating seamless digital journeys."</p>
        </div>
        <img src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=" alt="" />
    </div>
  )
}
