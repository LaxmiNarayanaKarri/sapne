<Navbar  variant="dark" expand="lg" collapseOnSelect className="navi" >
            
            <Container >
            <img src="logo1.gif" width="60px" height="50px" id="img"></img>
            <Navbar.Brand  id='gul'>SAPNE NGO </Navbar.Brand>
            
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" id='head'>
        <Link to="/" className="me-auto1" id="w"> <FaHome /> Home</Link>
        <Link to="/about" className="me-auto1" id="w1"><FaInfoCircle/> About Us</Link>
        <Link to="/impact" className="me-auto1" id="w2"><FaHeart/> Our impact</Link>
        <Link to="/phone" className="me-auto1" id="w3"><FaPhone /> Phonebook</Link>
        <Link to="/vip" className="me-auto1" id="w4"><FaHandshake/> Blessind by VIP</Link>
        <Link to="/join" className="me-auto1" id="w5"><FaUsers/> Join Us</Link>
        <Link to="/shakti" className="me-auto1" id="w6"><GrRestroomWomen color="brown"/>Shakti</Link>
      </Nav>
    </Navbar.Collapse>
     </Container>
</Navbar>