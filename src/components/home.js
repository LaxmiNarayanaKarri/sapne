import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap'
import "./head.css"
import {Link}  from 'react-router-dom'
import {GiWaterDrop,GiMagnifyingGlass,GiAwareness} from "react-icons/gi"
import {FaInfoCircle,FaBookReader,FaCalendarCheck,FaNewspaper,FaVolumeUp,FaTrophy,FaDollarSign} from "react-icons/fa"
import { Container, Row, Col ,Card,CardGroup,ListGroup,ListGroupItem,Button } from 'react-bootstrap'
import "../index.css";
const home =()=>
{
      
      return(

        <div>
        <Carousel>
         <Carousel.Item>
        <img
        className="d-block w-100"
        src="logo6.png"
        alt="First slide"
        width="1349px"
        height="500px"
        />
        <Carousel.Caption>
        <h3>First slide </h3>
        </Carousel.Caption>
        </Carousel.Item>
       <Carousel.Item>
 <img
   className="d-block w-100"
   src="Carousel3.jpg"
   alt="Second slide"
   width="1349px"
   height="500px"
 />

 <Carousel.Caption>
   <h3>Second slide</h3>
 </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
 <img
   className="d-block w-100"
   src="Carousel4.jpg"
   alt="Third slide"
   width="1349px"
   height="500px"
 />

 <Carousel.Caption>
   <h3>Third slide </h3>
 </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
        <img
        className="d-block w-100"
        src="Carousel4.jpg"
        alt="First slide"
        width="1349px"
        height="500px"
        />
        <Carousel.Caption>
        <h3>Fourth slide </h3>
        </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
        <img
        className="d-block w-100"
        src="Carousel4.jpg"
        alt="First slide"
        width="1349px"
        height="500px"
        />
        <Carousel.Caption>
        <h3>Fivth slide </h3>
        </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
        <img
        className="d-block w-100"
        src="Carousel4.jpg"
        alt="First slide"
        width="1349px"
        height="500px"
        />
        <Carousel.Caption>
        <h3>sixth slide </h3>
        </Carousel.Caption>
</Carousel.Item>

</Carousel>
<br></br>
<p id="scroll" className="scroll"><span><a href="home">Draw Your Dream Final Reasult</a>   <a href="home">  Hospitals Delhi</a>   <a href="home">  Schooks in Delhi</a>   <a href="home">  Women Helpline</a> <a href="home">  Colleges in Delhi</a> <a href="home">  Register for MSME</a> <a href="home">  Apply  For Ration-Card</a> <a href="home">  COVID19 Statistics</a> </span></p>
<br></br>
<p ><center id="aboutcenter"><span>ABOUT US</span></center><center><img src="ending.jpg" width="160px" height="20px" ></img></center></p>
<br></br>
<Container fluid> 
  <Row id="whorow">
    <Col xs="6" md="6">
    <img src="child.jpg" height="98%" width="98%"></img>
    </Col>
    <Col xs="6" md="6">
      <h1>Who We Are</h1>
      <p id="whoi">We're a group of young, dynamic, and enthusiastic individuals from various walks of life,
        fed up with witnessing the unfulfilled dreams due to lack of education. With the sole purpose of 
        improving human life and its quality, this not-for-profit organization was founded on January 15th, 2016...</p>
      <Link to="/whoweare" >Read More</Link>
    </Col>
  </Row>
</Container>
<br></br>
<br></br>
<p ><center id="aboutcenter"><span>OUR MISSION</span></center><center><img src="ending.jpg" width="160px" height="20px" ></img></center></p>
<br></br>
<br></br>
<Container fluid> 
  <Row id="whorow">
    <Col xs="6" md="3">
        <center><h4>Water Sourcing</h4></center>
        <center><GiWaterDrop fontSize="40px"/></center>
        <br></br>
        <center><p>this is sample text.which need to be edited in future by me and looking forward...</p></center>
        <center><Link to="/whoweare" >Read More</Link></center>

    </Col>
    <Col xs="6" md="3">
        <center><h4>Research</h4></center>
        <center><GiMagnifyingGlass fontSize="40px"/></center>
        <br></br>
        <center><p>this is sample text.which need to be edited in future by me and looking forward...</p></center>
        <center ><Link to="/whoweare" >Read More</Link></center>
        <br></br>

    </Col>
    <Col xs="6" md="3">
        <center><h4>Education</h4></center>
        <center><FaBookReader fontSize="40px"/></center>
        <br></br>
        <center><p>this is sample text.which need to be edited in future by me and looking forward...</p></center>
        <center><Link to="/whoweare" >Read More</Link></center>

    </Col>

    <Col xs="6" md="3">
        <center><h4>Renewables</h4></center>
        <center><GiAwareness fontSize="40px"/></center>
        <br></br>
        <center><p>this is sample text.which need to be edited in future by me and looking forward...</p></center>
        <center><Link to="/whoweare" >Read More</Link></center>

    </Col>
  </Row>
</Container>
<br></br>
<p ><center id="aboutcenter"><span>FEATURED EVENTS</span></center><center><img src="ending.jpg" width="160px" height="20px" ></img></center></p>
<br></br>
<Container fluid> 
  <Row id="whorow">
    <Col xs="12" md="4">
    <center><img src="fevents1.PNG" height="100%" width="100%"></img></center>
    <center><p className="ianh2">AAYAAM</p></center>
    <p>Creativity does not wait for the perfect moment!”.
       We are thrilled to showcase your artistic gifts and techniques. 
       Before we can do that make sure to have a thorough look at our given brochure. 
       Here is a great platform to showcase your talents. Never wait to display your creative 
       skills and ideas to the entire world. When you get the right platform, don't miss it....
    </p>
    <p>
    <Link to="/whoweare" >Read More</Link>
    </p>
    <br></br>
    </Col>
    <Col xs="12" md="4">
    <center><img src="fevents2.PNG" height="100%" width="100%"></img></center>
    <center><p className="ianh2">DRAW YOUR DREAM</p></center>
    <p> Everyone has a dream. Still, the children's dreams are pretty unique and wonderful. 
        Through our Draw your dream project, we are showcasing children's talents to the world. 
        If your child has creative ability and artistic skills, then it's an opportunity for your kid
        to showcase his/her talent. Yes! SAPNE has started all India drawing competition 
        'Draw your dream' all over Delhi....
    </p>
    <p>
    <Link to="/whoweare" >Read More</Link>
    </p>
    <br></br>
    </Col>
    <Col xs="12" md="4">
    <center><img src="fevents3.PNG" height="100%" width="100%"></img></center>
    <center><p className="ianh2">FOOD FOR ALL-LIBERATE CHILDREN</p></center>
    <p>In a humanitarian gesture to support the needy, 
        SAPNE NGO has taken an initiative to feed the empty stomach of 
        underprivileged kids with two meals in a day. Let us make sure that not even a 
        single child sleeps with an empty stomach. Knowing that it is our sole responsibility to 
        ensure it, we at Sapne organization strive hard to feed the needy. FEED THE NEEDY, SHARE HUMANITY!...</p>
    <Link to="/whoweare" >Read More</Link>
    <br></br>
    </Col>
  </Row>
</Container>
<br></br>
<p ><center id="aboutcenter"><span>HELP US</span></center><center><img src="ending.jpg" width="160px" height="20px" ></img></center></p>
<br></br>
<Container fluid> 
  <Row id="whorow">
    <Col xs="12" md="6">
    <img src="donate.jpg" height="280vw" width="98%"></img>
    </Col>
    <Col xs="12" md="6">
      <h1>Want To Help Us</h1>
      <p id="whoi">SAPNE has been working in india for over 6years,focusing on 
      alleviating poverty and social exclusions.Your support will go long way in helping us in 
      in our efforts. Donate now to support women and girls get access to quality education,meterial,and
       child health care services,sustainable liveihood opportunity and relief.</p>
      <Link to="/donate" ><Button variant="secondary">Donate Us</Button></Link>
    </Col>
  </Row>
</Container>
<br></br>
<br></br>
<p ><center id="aboutcenter"><span>SAPNE-IAN OF THE MONTH</span></center><center><img src="ending.jpg" width="160px" height="20px" ></img></center></p>
<br></br>
<Container > 
  <Row id="whorow">
    <Col xs="12" md="4">
    <center><img src="ian1.png" height="65%" width="65%"></img></center>
    <br></br>
    <br></br>
    <div className="ianne">
      <div className="iann">
      <center><p className="ianh2">SRISHTI PURI</p></center>
      <center><h5>Social media marketing head</h5></center>
      </div>
    </div>
    </Col>
    <Col xs="12" md="4">
    <center><img src="ian2.png" height="65%" width="65%"></img></center>
    <br></br>
    <br></br>
    <div className="ianne">
      <div className="iann">
      <center><p className="ianh2">RACHEL RAMESH</p></center>
      <center><h5>Graphic designing head</h5></center>
      </div>
    </div>
    </Col>
    <Col xs="12" md="4">
    <center><img src="ian3.png" height="65%" width="65%"></img></center>
    <br></br>
    <br></br>
    <div className="ianne">
      <div className="iann">
      <center><p className="ianh2">AYESHA MALHOTRA</p></center>
      <center><h5>Content writing intern</h5></center>
      </div>
    </div>
    </Col>
  </Row>
</Container>
<p ><center id="aboutcenter"><span>PARTNERS</span></center><center><img src="ending.jpg" width="160px" height="20px" ></img></center></p>
<br></br>
<CardGroup>
  <Card  className="part">
    
    <Card.Img variant="top" src="part11.PNG" />
    <Card.Img variant="top" src="part12.jpg" />
    
    <Card.Body >
      
      
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem><p className="parti"> <center>VIDYA BHARATI SCHOOL</center></p></ListGroupItem>
    </ListGroup>
    
  </Card>
  <Card  className="part">
    
    <Card.Img variant="top" src="part21.PNG" />
    <Card.Img variant="top" src="part22.PNG" />
    <Card.Body>
      
      
      
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem><p className="parti"> <center>K. S. TEXTILES PRIVATE LTD</center></p></ListGroupItem>
    </ListGroup>
  </Card>
  <Card  className="part">
    
    <Card.Img variant="top" src="part3.PNG"/>
    <Card.Body>
      <Card.Text>
        
        
      </Card.Text>
      
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem><p className="parti"> <center>GROWING STEPS</center></p></ListGroupItem>
    </ListGroup>
  </Card>
  <Card  className="part">
    
    <Card.Img variant="top" src="part4.PNG"/>
    <Card.Body>
      <Card.Text>
        
        
      </Card.Text>
      
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem><p className="parti"> <center>THE CHOCOLATE VILLA</center></p></ListGroupItem>
    </ListGroup>
  </Card>
</CardGroup>
<br></br>
</div>
 )
    }

export default home 