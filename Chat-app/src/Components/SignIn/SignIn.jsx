import React, { useEffect, useState } from "react";
import { signin, fetchusers, signinwithgoogles } from "../../slice/userslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./SignIn.css";

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(fetchusers());
    }, []);

    const handleLogin = () => {
        dispatch(signin({ email, password }));
        navigate("/home");
    };

    const handleGoogleSignIn = () => {
        dispatch(signinwithgoogles());
        navigate("/home");
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-box">

                <h2 className="title">Let's Chat 💬</h2>
                <p className="subtitle">Login to continue your chats</p>

                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="btn-login" onClick={handleLogin}>
                    Sign In
                </button>

                <div className="divider">
                    <span>OR</span>
                </div>

                <button className="btn-google" onClick={handleGoogleSignIn}>
                    <img src="https://img.icons8.com/color/48/google-logo.png" alt="google" />
                    Continue with Google
                </button>

                <p className="bottom-text">
                    New here?{" "}
                    <span onClick={() => navigate("/signup")} className="link">
                        Create Account
                    </span>
                </p>
            </div>
        </div>
    );
}
