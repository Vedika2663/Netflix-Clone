import React from 'react';
import Nav from './Nav';
import './ProfileScreen.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function ProfileScreen() {

    const navigate = useNavigate();
    const user= useSelector(selectUser);
    function signout(){
        window.location.href='/'
        auth.signOut();
    }
  return (
    <div>
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" height="100px" width="100px" className="nav__avatar" />
            <div className='profileScreen__details'>
                <h2> {user.email} </h2>
            
            <div className='profileScreen__plans'>
                <h2>Plans (Current Plan: Laptop)</h2>
                <h3>Phone (149/month)</h3> <button onClick={() => navigate("/home")} className='button'>Subscribe</button>
                <h3>Tablet (349/month)</h3> <button onClick={() => navigate("/home")} className='button'>Subscribe</button>
                <h3>Laptop (599/month)</h3> <button onClick={() => navigate("/home")} className='button'>Subscribed</button>
                <h3>Family Pack (999/month)</h3>  <button onClick={() => navigate("/home")} className='button'>Subscribe</button>
                <button 
                // onClick={() => auth.signOut().then(() => window.location.href = '/') }
                onClick={signout}
                className='profileScreen__button'>
                Sign Out</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen