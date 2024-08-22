import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
        <Navbar style={{padding:"10px 25px"}} bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav style={{marginLeft:"50px"}} className="me-auto">
            <Nav.Link  className='ms-5' style={{fontSize:"20px",color:"white"}} as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link  className='ms-5' style={{fontSize:"20px",color:"white"}} as={Link} to="display">Display</Nav.Link>
            <Nav.Link  className='ms-5' style={{fontSize:"20px",color:"white"}} as={Link} to="search">Search</Nav.Link>
            <Nav.Link  className='ms-5' style={{fontSize:"20px",color:"white"}} as={Link} to="update">Update</Nav.Link>
          </Nav>
      </Navbar>
      <div id="wrapper">
          <Outlet/>
      </div>
      <hr size='6' color='darkred' />
      <div style={{display:"flex",justifyContent:"center", alignContent:"center", width:"100%",height:"50px",backgroundColor:"black",color:"white",fontSize:"20px"}}>This is dashboard developed using React</div>
      
        </>
    )
}


export default Layout;