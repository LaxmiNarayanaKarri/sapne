import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link}  from 'react-router-dom'
import {LinkContainer}  from 'react-router-bootstrap'
import {FaHome,FaInfoCircle,FaHeart,FaPhone,FaHandshake,FaUsers} from "react-icons/fa"
import {GrRestroomWomen} from "react-icons/gr"
import "./head.css";
const NAVBAR = () => {
    return (
          <Navbar  variant="dark" expand="lg" collapseOnSelect className="navi" >
          <Container >
            <LinkContainer to='/'>
            <img src="logo1.gif" width="55px" height="45px" id="img"></img>
            </LinkContainer>
            <LinkContainer to='/'>
            <Navbar.Brand  id='gul'>Sapne NGO</Navbar.Brand>
           </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle" />
    <Navbar.Collapse id="basic-navbar-nav" classname="toggle">
      <Nav className="me-auto" id='head' >
        <Link to="/" className="me-auto1" id="w"> <FaHome /> Home</Link>
        <Link to="/" className="me-auto1" id="w1"><FaInfoCircle/> About Us</Link>
        <Link to="/ourimpact" className="me-auto1" id="w2"><FaHeart/> Our impact</Link>
        <Link to="/numbers" className="me-auto1" id="w3"><FaPhone /> Phonebook</Link>
        <Link to="/vip" className="me-auto1" id="w4"><FaHandshake/> Blessind by VIP</Link>
        <Link to="/join" className="me-auto1" id="w5"><FaUsers/> Join Us</Link>
        <Link to="/shakti" className="me-auto1" id="w6"><GrRestroomWomen color="brown"/>Shakti</Link>
      </Nav>
    </Navbar.Collapse>
     </Container>
</Navbar>
    )
}

export default NAVBAR