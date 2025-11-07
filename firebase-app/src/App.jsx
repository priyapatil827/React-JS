
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from './firebase'
import './App.css'
import { addDoc,collection } from 'firebase/firestore';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((() => alert("signup successfully !!")))
      .catch((error) => alert(error.message));
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Signin successfully !! " + user.email);
      })
      .catch((error) => alert(error.message));
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert("Google Signin successful !!");
      })
      .catch((error) => alert(error.message));
  }

  const handleaddData = () =>{
    addDoc(collection(db, "books"),{
      "title" : "React JS",
      "author" : "Dan Abramavichus",
    })
    .then(() => alert("Data added successfully"))
    .catch((error)=> alert(error.message));
  }



  return (
    <>
      <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      <button onClick={handleaddData}>Add Data</button>
    </>
  )
}

export default App