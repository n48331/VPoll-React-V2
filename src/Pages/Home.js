import React,{useEffect,useState} from "react";
import axios from "axios";


const Home=(props)=>{
    const [list, setList] = useState();
    const [name, setName] = useState();
    useEffect(()=>{   
      (
      
        async()=>{
          let header = {
            headers: {
              'Authorization': `token ${props.token}`
            }
          }
          axios.get('voters-list/',header).then(res=>{
              setList(res.data[0])
              setName(res.data[2].name)
              console.log(res.data);

          }).catch(err=>{
              console.log('Error');
          })

        }

          )()
  
    },[])
    return(
        <div>
        {name}
        {props.logged?'Home':'Not Logged in'}
        </div>
    )

}

export default Home;