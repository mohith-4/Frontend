import React, { useState } from 'react' ;
import "./style.css" ; 

import axios from 'axios' ;
import {Link} from "react-router-dom" ;

function Signup() {

    const [name , setName] = useState();
    const [email , setEmail ] = useState() ;
    const [password , setPassword] = useState() ;
   

    let handleSubmit = (event) => {
        const obj = {name , email , password} ;
        const url = "https://employeedatabase-fcni.onrender.com/employee/create-employee" ;
        axios.post(url , obj).then((res) => {
          if(res.status === 200) {
            alert("Employee added successfully ") ;
          } else {
            alert("error");
            Promise.reject() ;
          }
        })
        .catch((err) =>{
            alert(err) ;
        }) ; 
        event.preventDefault() ;
    } ; 
  return (
    <form  onSubmit={handleSubmit}>
        <div>
          <h1>Registration Form </h1>
            {console.log(name,email,password)}; 
        <label for="name">Name </label>
        <input type='text' id='name' onChange={(e) => setName(e.target.value)}/>
        <label for="email">Email</label>
        <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} /> 
        <label for="pwd">Password</label>
        <input type='password' id='pwd' onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' /> 

        <h2><Link to='/login'>Login</Link> </h2>  
        <h2> <Link to="/view">View</Link> </h2>
        </div>
    </form>
  );
}

export default Signup ; 