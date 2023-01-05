import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {  Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="/home">LinkGraph</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' style={{color:'white', textDecoration: 'none', padding: '20px'}}>Home</Link>
            <Link to='/dashboard' style={{color:'white', textDecoration: 'none', padding: '20px'}}>Dashboard</Link>
            {/* <Link  to="/get" style={{color:'white', textDecoration: 'none', padding: '20px'}}>Get Categories</Link> */}
            {/* <Link  to="/post" style={{color:'white', textDecoration: 'none', padding: '20px'}}>Post Categories</Link> */}
            <Link  to="/add" style={{color:'white', textDecoration: 'none', padding: '20px'}}>Add Categories</Link>
            {/* <Link  to="/posts" style={{color:'white', textDecoration: 'none', padding: '20px'}}>Posts</Link> */}
            <Link  to="/addposts" style={{color:'white', textDecoration: 'none', padding: '20px'}}>Add Posts Categories</Link>



          </Nav>
          
        </Container>
        
      </Navbar>

    </div>
  )
}

export default NavBar