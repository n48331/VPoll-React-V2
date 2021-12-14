
import axios from 'axios';
import React ,{Component, useState}from 'react';
import './Login.css';
import { useNavigate } from 'react-router';


export default function Login (props) {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  async function login(e){
    e.preventDefault();
    let cred = {username,password}
    await axios.post('login/',cred)
    .then(res=>{
      localStorage.setItem('token',res.data.token)
      navigate('/home')
      props.setLogged()

    })
    .catch(err=>{console.log(err);})
  }
    return (    
    <div className="login-wrapper">Login

    <form onSubmit={login}>
  <label>
    <p>Username</p>
    <input type="text" onChange={(e)=>{setUsername(e.target.value)} } />
  </label>
  <label>
    <p>Password</p>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
  </label>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>

    </div> )

}
 
