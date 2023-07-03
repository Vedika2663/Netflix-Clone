import React, { useRef } from 'react';
import './SignIn.css';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignIn() {
  const emailref= useRef(null);
  const passref=useRef(null);
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    })
  }
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailref.current.value, passref.current.value)
            .then((userCredential) => {
              console.log(userCredential);
            })
            .catch((error) => {
                alert(error);
            });
  }
  
  return (
    <div className='signIn'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailref} type="email" placeholder='Email Address' />
            <input ref={passref} type="password" placeholder='Password' />
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4><span>New to Netflix? </span><a href="/" onClick={register}>Sign up now.</a></h4>
        </form>
    </div>
  )
};

export default SignIn;