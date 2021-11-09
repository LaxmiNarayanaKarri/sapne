import React from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import {FaTrophy,FaEye,TiLocation} from 'react-icons/fa'
import "./head.css";
const about=()=>
{

    return(
        <div>
           <div id="divofpara">
               <h1>ABOUT US</h1>
               <br></br>
               <p id="paraabout">
               Gully Classes Foundation was registered as a Section 8 Company under the Companies Act, 2013. Gully Classes Foundation founded in 2017 by Abdul Munaf. It is a Not –for –profit Organisation with fully Charitable objectives.

<br></br><br></br>Gully Classes Foundation was started with the objective of creating and delivering high impact and focussed programs to the under privileged sections of the society in the areas of education, healthcare and socio-economic development.

<br></br><br></br>Gully Classes Foundation aims to touch the lives of lakhs of people with poverty, illness and suffering. The work of the foundation is to provide lasting solutions in healthcare, provide help in education, skill development, employment generation and leadership training to deserving students from the underprivileged sections. We are also striving to provide models of sustainable social and economic development in our villages and cities.
               
               <img
        src="favicon.ico"
        alt="First slide"
        width="250vw"
        height="300px"
        id="aboutim"
        />
         </p>
           </div>
            
        <div id="combine">  
        < FaTrophy id="trophy"/>
        
        <div id="mission">
            <h3 id="mhead">
                Mission
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
        </div>   
        <div id="vision">
        < FaEye id="eye" />
            <h3 id="vhead">
                Vision
            </h3>
            <p>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
        </div> 
        </div>    
        <div id="bottom">
            <div id="botcont">
            <img
        src="favicon.ico"
        alt="First slide"
        id="botim"
        />
        <h4 id="botthe">
        Believe in Togetherness
        </h4>
        </div>   
        </div>  
        <br></br> 
        <br></br> 
        <div id="botlink">
        <ul >
            <h3 id="contis">Quick Links</h3>
            <li className="lw">
                <a href="/" className="ah">home</a>
            </li>
            <li className="lw"  >
                <a href="login" className="ah" >login</a>
            </li>
            <li className="lw" >
                <a href="gallery"  className="ah">gallery</a>
            </li>
            <li className="lw"  >
                <a href="contact" className="ah">contact</a>
            </li>
            <li className="lw" >
                <a href="about"  className="ah">about</a>
            </li>
        </ul>
        </div>
        
        <div id="addr">
            <h3 id="conti">
                Contact Info
            </h3>
            <h3>
                Address:
            </h3>
            <p id="p2">
            Address: SHOP NO. 386, NAGORI MILK CENTRE, AZAD NAGAR, CHIRAG NAGAR, GHATKOPAR WEST, MUMBAI- 400086.
            </p>
            <h3>
            Phone:
            </h3>
            <p id="p1">
            +91 9323263322
            </p>
            <h3>
            Email:
            </h3>
            <p id="p3">
            gullyclassesfoundation@gmail.com
            </p>
        </div>
            </div>
           
           
    )



}


export default about