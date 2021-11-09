import React from 'react'
import Button from 'react-bootstrap/Button'
import {FaBalanceScale,FaUserLock} from "react-icons/fa"
import {GrAttachment} from "react-icons/gr"
import {IoReceiptOutline} from "react-icons/io5"
import { Container, Row, Col,Card,CardGroup } from 'react-bootstrap'
import "./head.css";
const donate=()=>
{

    return(
        <div>
            <div>
            <br></br>
            <center><h3>SAPNE</h3></center>
            <Container><center><p id="dp">SAPNE is a non-profit organisation.Your donation is eligible for tax exemption under 80 G You can also donate by sending your cheque/draft in favour of SAPNE for Sustainable Development to G-6/203,Sector-16 Rohini Delhi 89</p></center>
            </Container>
            </div>
            <br></br>
            <div>
           <CardGroup className="cardi">

           <Card bg="light" className="cards">
            <Card.Body>
            <Card.Title><FaBalanceScale /> FINANCIAL DETAILS</Card.Title>
            <Card.Text>
            Permanent Account Number: AAQTS5142M Registration Number: 171/dt-16/1/2016
            </Card.Text>
            </Card.Body>
        </Card>
        <Card bg="light" className="cards">
            <Card.Body>
            <Card.Title>< FaUserLock /> Privacy Statement</Card.Title>
            <Card.Text>
            Sapne is committed to protect the privacy of user of this website.The Information recieved is kept confidential and is disclosed to such third parties as may be nacessary to process the donation.view the complete privacy statement here
            </Card.Text>
            </Card.Body>
        </Card>
        <Card bg="light" className="cards">
            <Card.Body>
            <Card.Title><GrAttachment /> Personal Information</Card.Title>
            <Card.Text>
            All rights,personal data and privacy and maintained by Sapne.No information or data is shared.All rights are secured and safe.
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
    </div>
    <br></br>

    <Container >
    <Row>
    <Col xs="6" md="6">
        <h3>FOR INDIAN USERS:</h3>
        <img src="qr.PNG" height="200vw" width="40%"></img>
        <p >I give my consent for authorized representatives of Sapne to contact me occasionally by mobile and email for informing on the latest developments and updated offrings.</p>
        <a href="/"><Button variant="secondary">Proceed</Button></a>

    </Col>
    <Col xs="6" md="6">
        <h3>FOR INTERNATIONAL USERS :</h3>
        <img src="interna.PNG" height="320vw" width="90%"></img>
    </Col>
    </Row>
    </Container>
    <br></br>
    <br></br>
    <Container>
        <h3><IoReceiptOutline /> RECEIPT</h3>
        <p > For receipt, please send your name, amount, email ID, tel no. 
        and address to info@sapne.org.in , with date & mode of transfer, transfer code/cheque number.
         As per Indian Tax Laws, it is mandatory to have full name and address of a contributor else its
          treated as anonymous and is subject to taxation. In case you have a foreign address, we’ll need 
          a copy of your passport as advised by the Foreign Contribution Regulation Act, 2010 Kindly note that
           above examples are for decriptive purposes only.They indicate the impact that your donetion can bring 
           about in the lives of entire families,including women and children,SAPNE will allocate resources to areas 
           where the need is greatest. For any feedback on our fundraising efforts,Please contact info@sapne.org.in</p>
    </Container>
    <br></br>
    <br></br>
    
        </div>
    )
}
export default donate