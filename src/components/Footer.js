import React from 'react'
import "./head.css";
import {Link}  from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import {FaFacebook, FaInstagram ,FaTwitter,FaYoutube,FaLinkedin} from 'react-icons/fa'
import {HiLocationMarker,HiMail} from 'react-icons/hi'
const Footer =() =>  {
    return (
        <div className="footer">
        <br>
        </br>
            <Container > 
  <Row>
    <Col xs="12" md="9">
    <img src="logo1.gif" width="80px" height="78px" id="footimg"></img>
    <p className="footpara1"><h1 className="footpara2">SAPNE NGO</h1><h5 className="footpara3">BE A PART OF SOMEONES DREAM</h5></p>
    <p className="footadd"><HiLocationMarker fontSize='40px' color='pink'/><span>Sapne NGO G-6/203, Pocket 6, Sector 16, Rohini, New Delhi, Delhi 110085</span></p>
    <br></br>
    <p className="footadd"><HiMail fontSize='40px' color='pink'/><span>Sapne NGO info@sapne.org.in</span></p>
    <p className="follow"><h3>FOLLOW US ON:</h3>
    <FaFacebook color='MediumBlue'  className="foot2" onClick={()=>window.open("https://www.facebook.com/Sapnethedreams","_blank")} />
    <FaInstagram color="violet" className="foot2" onClick={()=>window.open("https://www.instagram.com/sapnethedreams/","_blank")}/>
    <FaTwitter color="cyan" className="foot2" onClick={()=>window.open("https://twitter.com/Sapne07","_blank")}/>
    <FaYoutube color=" red"className="foot2" onClick={()=>window.open("https://www.youtube.com/channel/UCZUECOx6Z66xnUjVEi57fSw","_blank")}/>
    <FaLinkedin color="DodgerBlue" className="foot2" onClick={()=>window.open("https://www.linkedin.com/in/sapnethedreams/","_blank")}/></p>
    </Col>
   
    <Col xs="12" md="3" ><h4>Quick Links:</h4>
        <br></br>
        <Link to="/"  id="fw"> Home</Link>
        <br></br>
        <br></br>
        <Link to="/about"  id="fw1">About Us</Link>
        <br></br>
        <br></br>
        <Link to="/impact" id="fw2"> Our impact</Link>
        <br></br>
        <br></br>
        <Link to="/phone"  id="fw3"> Phonebook</Link>
        <br></br>
        <br></br>
        <Link to="/vip"  id="fw4"> Blessind by VIP</Link>
        <br></br>
        <br></br>
        <Link to="/join"  id="fw5">Join Us</Link>
        <br></br>
        <br></br>
        <Link to="/shakti" id="fw6">Shakti</Link>
        <br></br>
    </Col>
  </Row>
</Container>
</div>
    )
}

export default Footer