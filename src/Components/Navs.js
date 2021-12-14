import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navs(props) {
const logout=async()=>{
  
  await localStorage.removeItem('token');
  props.setLogged()
}
  let menu;
if(props.logged){
  menu =(
    <Link className='nav-link' to="/login" onClick={logout}>logout</Link>
   
  )
}else{
  menu =(
   <Link className='nav-link' to="/login">login</Link>)
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
      {menu}




     
    </Nav>
  </Navbar.Collapse>

  </Container>
  
</Navbar>
      );
   }



//  class Navs extends Component {
//    constructor(props) {
//      super(props);
//      this.state = { 
//       func:null,
//       login:'',
//       log:this.props.islogged
//       }
//       this.logout = this.logout.bind(this)

//    }
   
//    componentDidMount(){
//     this.state.log?
//       this.setState({func:this.logout,login:'logout'}):
//       this.setState({login:'login'})

//     }


//     logout(e){
//     e.preventDefault();
//     localStorage.clear();
//     this.setState({login:'login',func:null})

//    }
//    render() { 
//      return ( 
//   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='uvs-bottom'> 
//   <Container >
//   <Link className='nav-link' to="/home"><Navbar.Brand> V-POLL</Navbar.Brand></Link>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto">
//     <Link className='nav-link' to="/home">Home</Link>
//       <Link className='nav-link' to="/notpolled">Not Polled</Link>
//       <Link className='nav-link' to="/stats">Stats</Link>


//       <Link className='nav-link' to="/login" onClick={this.state.func}>{this.state.login}</Link>



     
//     </Nav>
//   </Navbar.Collapse>

//   </Container>
  
// </Navbar>
//       );
//    }
//  }
  
 export default Navs;