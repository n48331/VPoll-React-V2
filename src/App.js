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
axios.defaults.baseURL = 'https://vpollapi.pythonanywhere.com/api/'



 
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

              const interval = setInterval(() => {
              axios.get('voters-list/').then(res=>{
                const allData = res.data;
                setList(allData)
                const allPolled = allData.filter(item=>item.polled===true)
                const allNotPolled = allData.filter(item=>item.polled===false)
                setPolled(allPolled.length);
                setAllCount(res.data.length);
                setnotList(allNotPolled)
              }).catch(err=>{
                  console.log('Error');
              })
            }, 5000);
            return () => clearInterval(interval);

          }
      )()
  },[])


  useEffect(()=>{
    (
      async()=>{
        setToken(localStorage.getItem('token'))
        if(token)
        setLogged(true)
    else
        setLogged(false)
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

          <Route path = '/home' 
          element={<Home token={token}
          list={list} polled={polled} allCountHome={allCount}
          loggedHome={logged}
            />}/> 

          <Route path = '/notpolled' element={
          <Nopoll  notList={notList}
          loggedNopoll={logged}
           />}/>

          <Route exact path = '/stats' element={<Stats
            polled={polled} 
            allCount={allCount}
          />}/>

          <Route exact path = '/login' element={<Login setLogged={setLogged}/>}/>

        </Routes>
  
      </Router>
      </div>
     );

}
 
export default App;
