import React,{useState} from "react";
import axios from "axios";
import { Accordion,Card,InputGroup,FormControl,ProgressBar,Badge } from 'react-bootstrap';
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
        <style>{'body { background-color: 	#76def6; }'}</style>
          <div className ='col-md-12'>
          <ProgressBar variant='custom' animated  now={props.polled} 
          
            label={props.polled}
            max ={props.allCount}
             style={{ background:'#ec1c4b'}}
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

          <Accordion style={{ color:'red' }}>

                {props.list?
                  props.list.filter(filterFunction).map((itm,ky) => (

                    <Card >
    
    <Accordion.Item  eventKey={itm.id} >
    <Card.Header style={{ background: itm.polled ? '#3eaca8' : '#f67280' }}>
    <Accordion.Header  style={{ textDecorationLine: itm.polled ? 'line-through' : '',color:itm.polled ?'#000000':'#ec1c4b', }}>
    <span style={{ background: itm.polled ? '#2f9395' : '#ec1c4b', }} className='btn-dark p-2' >{itm.sl}</span>
     <b> <span  className='text-uppercase'  >
     &nbsp; &nbsp; {itm.name}
       </span> </b>
       <span>
        : {itm.house}
       </span>
       </Accordion.Header>
       </Card.Header>
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
                    {/* <Card bg="primary"  style={{ background: itm.polled ? '#2f9395' : '#ec1c4b', }}>
    <Card.Body  style={{ textDecorationLine: itm.polled ? 'line-through' : '',color:itm.polled ?'#000000':'#ec1c4b', }} >
    </Card.Body>
    </Card> */}

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