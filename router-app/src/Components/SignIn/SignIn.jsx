import React, { useRef } from 'react'
import { replace, useNavigate } from 'react-router'
import "./SignIn.css"

export default function SignIn() {
    const navigate = useNavigate();
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const signIn = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email != "" && password != "") {
            localStorage.setItem("user", JSON.stringify({ "email": email, "password": password }));
            navigate("/home", { replace: true });
        }
        else {
            alert("Please enter email and password!");
        }
    }

    return (
        <div>
            <div className="signin-container">
                <div className="signin-box">
                    <h2>Sign In</h2>
                    <form>
                        <div className="input-group">
                            <input type="email" placeholder="Email" required ref={emailRef} />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                ref={passwordRef}
                            />
                        </div>
                        <button type="submit" className="signin-btn" onClick={signIn}>
                            Sign In
                        </button>
                    </form>
                    <p className="links">
                        <a href="#">Forgot password?</a> | <a href="#">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
