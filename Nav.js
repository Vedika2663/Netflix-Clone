import React,{useEffect, useState} from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [show, handleShow]=useState(false);
    const transition=() => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transition);
        return () => window.removeEventListener("scroll",transition);
    },[]);
    const navigate = useNavigate();
  return (
    <div>
        <header className={`nav ${show && 'nav__black'}`}>
      <div className="container">
          <div className="nav__logo">
          <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo" width="80px" 
          onClick={() => navigate("/")} />
          </div>
          <div className='contentsList'>
          <ul class="main-nav">
              <li className="nav-item">Home</li>
              <li className="nav-item">TV Shows</li>
              <li className="nav-item">Movies</li>
              <li className="nav-item">New and Popular</li>
              <li className="nav-item">My List</li>
              <li lassName="nav-item">Browse by language</li>
          </ul>
          </div>
          <div className='contentsItem'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path></svg>
         
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" height="20px" width="20px" className="nav__avatar" 
          onClick={() => navigate("/profile")}
          />
        
          </div>
      
      </div>
      </header>
    </div>
  )
}

export default Nav