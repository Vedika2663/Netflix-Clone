import React, { useState } from 'react';
import './LoginScreen.css';
import SignIn from './SignIn';

function LoginScreen() {
  const [signIn, setSignIn]= useState(false);

  const pay= () => {
    setSignIn(true);
  }
  return (
    <div>
    <div className='loginscreen'>
        <img 
        className='loginscreen__logo'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" width="200px" alt="netflix-logo" />

        <button className='loginscreen__button'
        onClick={() => setSignIn(true)}
        style={{visibility:signIn ? "hidden" : "block"}}>
          Sign In</button>
        <div className='loginscreen__background' />
        </div>
        
          {
            signIn ? ( <SignIn /> ) :
            (
            <>
            <div className='loginscreen__body'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginscreen__input'>
            <form>
            <input type="email" placeholder='Email address'></input>
            <button 
            // onClick={() => setSignIn(true)}
            onClick={pay}
            >Get Started </button>
            </form>
            </div>
            </div>
        </>
        )
          }
          
    </div>
  )
}

export default LoginScreen