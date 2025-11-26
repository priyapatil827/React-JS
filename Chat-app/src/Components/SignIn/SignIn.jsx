import React, { useEffect, useState } from "react";
import { signin, fetchusers, signinwithgoogles, signup } from "../../slice/userslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchusers());
    }, [dispatch]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="signin-wrapper">
            <div className="signin-card">
                <h2 className="title">Welcome Back</h2>
                <div className="input-group">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>
                <button
                    className="btn signin-btn"
                    onClick={() => {
                        dispatch(signin({ email, password }));
                        navigate("/home");
                    }}
                >
                    Sign In
                </button>

                <button
                    className="btn google-btn"
                    onClick={() => dispatch(signinwithgoogles({ email, password }))}
                >
                    Sign In with Google
                </button>

                <div className="signup-text">
                    <span>Don't have an account?</span>
                    <button
                        className="btn signup-link"
                        onClick={() => {
                            dispatch(signup({ email, password }));
                            navigate("/signup");
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
