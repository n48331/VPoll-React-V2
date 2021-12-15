import React,{useEffect,useState} from "react";
import axios from "axios";
import { Accordion,Card,InputGroup,FormControl,ProgressBar } from 'react-bootstrap';
import BackToTop from "react-back-to-top-button";
import { ArrowUpCircleFill as Up } from 'react-bootstrap-icons';
import Toggle from 'react-toggle'
import "react-toggle/style.css"


const Home=(props)=>{
    const [search, setSearch] = useState('');
    const filterFunction = (item) => {
      const searchAll=item.name+item.house+item.sl
      return searchAll.toUpperCase().indexOf(search.toUpperCase()) > -1
    }

    
    const pollFunction =(e)=>{
      const vid = e.target.id
      axios.patch(`voters-details/${vid}/`,{
        "polled": e.target.checked
      })

    }

    return(
        <div>
        <div className='row'>
        <style>{'body { background-color: 	#000000; }'}</style>
          <div className ='col-md-12'>
          <ProgressBar variant='custom' animated  now={props.polled} 
          
            label={props.polled}
            max ={props.allCount}
             style={{ background:'#f67280',color:'#f67280'}}
          />
      <InputGroup className="mb-3" material>

    <FormControl
    className='btn-dark p-2 mr2'
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      placeholder="Search Something...."
      value={search}
      onChange={(e)=>{setSearch(e.target.value)}}
    />

  </InputGroup>

          <Accordion >

                {props.list?
                  props.list.filter(filterFunction).map((itm,ky) => (
                    <Card bg="primary" style={{ background: itm.polled ? '#3eaca8' : '#f67280', }}>
    
    <Accordion.Item  eventKey={itm.id} style={{ background: itm.polled ? '#3eaca8' : '#f67280' }}>
    <Accordion.Header >
    <Card.Body style={{ textDecorationLine: itm.polled ? 'line-through' : '',color:itm.polled ?'green':'red' }}>
    <span className='btn-dark p-2 mr2'>{itm.sl}</span>
     <b> <span className='text-uppercase'>
      {itm.name}
       </span> </b>
       <span>
        : {itm.house}
       </span>
       </Card.Body>
       </Accordion.Header>
       
    <Accordion.Body>
    Polled:
      
      <Toggle
  id={ String(itm.id) }
  checked={itm.polled}
  onChange={pollFunction}    
  /> 
    </Accordion.Body>
    
  </Accordion.Item>
  </Card>
                )):"loading"
                
                }
            </Accordion>


          </div>
          <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <Up />
      </BackToTop>       
        </div>
        </div>

        
    )

}

export default Home;