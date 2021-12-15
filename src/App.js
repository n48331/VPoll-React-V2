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

  const [polled, setPolled] = useState(0);
  const [allCount, setAllCount] = useState(0);
  const [list, setList] = useState();
  const [notList, setnotList] = useState();


  useEffect(()=>{
      (
          
          async()=>{
          setToken(localStorage.getItem('token'))
              if(token){
                  setLogged(true)
              }else{
                  setLogged(false)
              }

              let header = {
                headers: {
                  'Authorization': `token ${token}`
                }
              }
              const interval = setInterval(() => {
              axios.get('voters-list/',header).then(res=>{
                const allData = res.data;
                setList(allData)
                  console.log(list);
                const allPolled = allData.filter(item=>item.polled===true)
                const allNotPolled = allData.filter(item=>item.polled===false)
                setPolled(allPolled.length);
                setAllCount(res.data.length);
                setnotList(allNotPolled)
    
              }).catch(err=>{
                  console.log('Error');
              })
            }, 3000);
            return () => clearInterval(interval);

          }
      )()
  },[])
    return ( 
      <div className = 'container-fluid'>
      <Router>
      <Navs logged={logged} setLogged={setLogged}/>
        <Routes>
        <Route/>
          <Route path = '/' element={<Login/>}/> 
          <Route path = '/home' 
          element={<Home logged={logged} token={token}
           list={list} polled={polled} allCount={allCount}
            />}/> 
          <Route path = '/notpolled' element={<Nopoll  notList={notList} />}/>
          <Route exact path = '/stats' element={<Stats/>}/>
          <Route exact path = '/login' element={<Login setLogged={setLogged}/>}/>
        </Routes>
  
      </Router>
      </div>
     );

}
 
export default App;
