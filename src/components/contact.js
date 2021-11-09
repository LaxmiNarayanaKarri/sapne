import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import "./head.css"
import {FaHome,FaMailBulk,FaComments} from 'react-icons/fa';
const contact =()=>
{

    return(
        <div>
           <div id="divofpara">
               <h1>CONTACT US</h1>
               <br></br>
               <p id="paraabout">
                  <h4>We are here to assist you</h4>
        Feel free to contact us or just drop a line here. Our support stuff will reach you very soon
               
         </p>
           </div>
           <br />
           <div>
           <CardGroup className="cardi">

           <Card  className="cards">
           < FaHome id="ihome" />
            <Card.Body>
            <Card.Title>Head Quarter</Card.Title>
            <Card.Text>
            SHOP NO. 386, NAGORI MILK CENTRE, AZAD NAGAR, CHIRAG NAGAR, GHATKOPAR WEST, MUMBAI- 400086.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="cards">
        < FaMailBulk  id="imail"/>
            <Card.Body>
            <Card.Title>Mailing Address</Card.Title>
            <Card.Text>
            Gullyclassessfoundation@gmail.com
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="cards">
        < FaComments  id="icomm"/>
            <Card.Body>
            <Card.Title>Contact Numbers</Card.Title>
            <Card.Text>
            MUMBAI - 9819894341/ 9768983139
KOTA - 7976641976/ 6376861976
NAGAUR - 7208169193/ 9694303421
SHAHJAHANPUR - 8957489212/ 8112571162
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
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
export default contact