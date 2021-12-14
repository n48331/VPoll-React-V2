import React, {useState,useEffect}from 'react';
import Nopoll from './Pages/Nopoll';
import Stats from './Pages/Stats';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navs from './Components/Navs';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'



 
function App()  {
  const [token, setToken] = useState();
  const [logged, setLogged] = useState();

  useEffect(()=>{
      (
          
          async()=>{
          setToken(localStorage.getItem('token'))
              if(token){
                  setLogged(true)
              }else{
                  setLogged(false)
              }

          }
      )()
  })
    return ( 
      <div className = 'container-fluid'>
      <Router>
      <Navs logged={logged} setLogged={setLogged}/>
        <Routes>
        <Route/>
          <Route path = '/' element={<Login/>}/> 
          <Route path = '/home' element={<Home logged={logged} token={token}/>}/> 
          <Route path = '/notpolled' element={<Nopoll/>}/>
          <Route exact path = '/stats' element={<Stats/>}/>
          <Route exact path = '/login' element={<Login setLogged={setLogged}/>}/>
        </Routes>
  
      </Router>
      </div>
     );

}
 
export default App;
