import React, { useEffect, useState } from "react";
import "./Chatpage.css";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage ,readMessage} from '../../slice/chatslice'

export default function Chatpage() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentuser } = useSelector((state) => state.user); 
  const location = useLocation();
  const receiver = location?.state;

  useEffect(()=>{
    dispatch(readMessage());
    dispatch(getUser())
  })

  const handleSendMessage = () => {
    if (!message.trim()) return;

    dispatch(sendMessage({
      sender: currentuser?.email,
      receiver: receiver?.email,
      message: message
    }));

    setMessage(""); 
  };

  return (
    <div className="chat-container">

      <div className="chat-header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" className="chat-profile" />
        <h3 className="chat-username">{receiver?.email}</h3>
      </div>

      {/* Show Messages from Redux */}
      <div className="chat-body">
        {receiver?.messages?.map((msg, i) => (
          <div key={i} className={`message ${msg.sender === currentuser.email ? "sent" : "received"}`}>
            {msg.message}
          </div>
        ))}
      </div>

      <div className="chat-input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} className="send-btn">Send</button>
      </div>

    </div>
  );
}
