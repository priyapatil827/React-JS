import React, { use, useState } from 'react'
import { signIn } from '../slice/userslice'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithCredential } from 'firebase/auth';

export default function SignIn() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => dispatch(signIn({ email, password }))}>Sign In with goggle</button>
        </div>
    )
}
