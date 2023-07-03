import React from 'react'
import './Payment.css';
import { useNavigate } from 'react-router-dom';
function Payment(props) {
    const navigate = useNavigate();
    const home = () => {
        if (props.name==="Laptop" || props.name === "Family Pack"){
            navigate("home");
        }
        else{
            navigate("error");
        }
    }
  return (
    <div className='payment'>
        <h1>{props.name}</h1>
        <h2>{props.amount}</h2>
        {/* <button onClick={() => props.name==="Laptop" && navigate("/home")}>Subscribe</button> */}
        <button onClick={home}>Subscribe</button>
    </div>
  )
}

export default Payment
//<script async src="https://js.stripe.com/v3/pricing-table.js"></script>