import React ,{useState} from 'react' ;
import axios from 'axios';

function Login() {
    const [name , setName] = useState();
    const [email , setEmail ] = useState() ;
    const [password , setPassword] = useState() ;

    const handleSubmit = () => {
        const url = "https://employeedatabase-fcni.onrender.com/employee/login" ;
        const obj = {name , email , password} ;
        axios.post(url ,obj)
        .then((res) => {
            alert(res.data) ;
        })
        .catch((err) => {
            alert(err) ;
        });
    }
  return (
    <form  onSubmit={handleSubmit}>
    <div>
      <h1>Login Form </h1>
       
    <label for="name">Name </label>
    <input type='text' id='name' onChange={(e) => setName(e.target.value)}/>
    <label for="email">Email</label>
    <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} /> 
    <label for="pwd">Password</label>
    <input type='password' id='pwd' onChange={(e) => setPassword(e.target.value)} />
    <input type='submit' /> 

     
    </div>
</form>
  )
}

export default Login ; 