
import axios from 'axios';
import React ,{useState}from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
import { Form,Button,FloatingLabel, } from 'react-bootstrap';


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
    <div >

    {/* <form onSubmit={login}>
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
</form> */}

<Form onSubmit={login}>

<br/>
<br/>

  <>
  <FloatingLabel
    controlId="floatingInput"
    label="Username"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="name" onChange={(e)=>{setUsername(e.target.value)} } />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
  </FloatingLabel>
</>

<br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


    </div> )

}
 
