import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './ProfileScreen';
import Payment from './Payment';
import Pay from './Pay';
import Error from './Error';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //log in
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      } else{
        //logout
        dispatch(logout());
      }
    });
    return unsubscribe;
},[dispatch]);
function pay(option){
  return(
    <Payment 
    key={option.id}
    name={option.name}
    amount={option.amount}
    />
  )
}
// function screen(option){
//   return(
//     <ProfileScreen 
//     key={option.id}
//     name={option.name}
//     amount={option.amount}
//     />
//   )
// }
  const router = createBrowserRouter([
    {
      path: "/",
      // element: !user? <LoginScreen /> : <HomeScreen /> ,
      element: !user? <LoginScreen /> : <div className='pay'> {Pay.map(pay)} </div> ,
    },
    {
      path: "/home",
      element: user && <HomeScreen />,
    },
    {
      path: "/profile",
      element: user && <ProfileScreen />,
    },
    {
      path: "/error",
      element: user && <Error />,
    },
  ]);
  return (
    <div className="App">
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  );
}

export default App;
