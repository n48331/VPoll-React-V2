import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navs(props) {
const logout=async()=>{
  
  localStorage.removeItem('token');
  props.setLogged()
}
     return ( 
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='uvs-bottom'> 
  <Container >
  <Link className='nav-link' to="/home"><Navbar.Brand> V-POLL</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className='nav-link' to="/home">Home</Link>
      <Link className='nav-link' to="/notpolled">Not Polled</Link>
      <Link className='nav-link' to="/stats">Stats</Link>


      {props.logged?
        <Link className='nav-link' to="/login" onClick={logout}>logout</Link>:
         <Link className='nav-link' to="/login">login</Link>}


     
    </Nav>
  </Navbar.Collapse>

  </Container>
  
</Navbar>
      );
   }


  
 export default Navs;