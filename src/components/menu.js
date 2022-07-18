import React from "react";
import { Navbar, Offcanvas, Nav, NavDropdown, Container, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';


const Menu = ()=>{
  let expand="sm"
  const [openMenu, setOpenMenu] = useState(false);
  const handleClose = () => {
    setOpenMenu(false)
  }
  const toggleMenu = () =>{
    setOpenMenu(!openMenu)
  }
    return(
    
    <>
    <Navbar key={expand} expand={expand} className="mb-3 menu header" fixed="top">
      <Container fluid>
        <Navbar.Brand>
        <Link to="/"><img src='./images/logo.png' className='logo' alt='logo' /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleMenu} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          restoreFocus={false}
          show={openMenu}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <Link to="/"><img src='./images/logo.png' className='logo' alt='logo' onClick={toggleMenu} /></Link> 
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="nav-link" to="/booking" onClick={toggleMenu} >BOOKING</Link>
              <Link className="nav-link" to="/cargo" onClick={toggleMenu}>CARGO</Link>
              <Link className="nav-link" to="/terminals" onClick={toggleMenu}>TERMINALS</Link>
              <NavDropdown
                title="SERVICES"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item>
                    <Link to="/interstate" onClick={toggleMenu}>Inter-State Travels</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <Link to="/cargo-transport" onClick={toggleMenu}>Cargo & Parcel Transport</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link className="nav-link" to="/about" onClick={toggleMenu}>ABOUT</Link>
              <Link className="nav-link" to="/contact" onClick={toggleMenu}>CONTACT</Link>
              <Link className="nav-link" to="/faq" onClick={toggleMenu}>FAQ</Link>
            </Nav>

              <Link  to="/" onClick={toggleMenu} className=' btn-C'>Login / Sign Up</Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
)
}

export default Menu;