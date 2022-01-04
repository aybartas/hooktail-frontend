import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';
import userReducer from './../../redux/user/userReducer';


const NavigationBar = ({ user }) => {
  console.log(`NAVIGATIONBAR ${user}`);
  return (
    <Navbar>
      <Link to="/" style={{ 'textDecoration': 'none' }}>
        <Navbar.Brand>Hooktail</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Col className="col-4">
          <Nav
            className="mr-auto my-lg-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Women</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Sneakers</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Col>

        <Col className="col-4">
          <Form className="d-flex mt-2">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
        <Col className="col-2"> </Col>
        <Col className="col-4 mt-2">
          <ButtonGroup>
            {
              user ?
                <Button variant="outline-danger" onClick={() => auth.signOut()}>Sign Out</Button>

                :
                <div><Link to="/SignIn">
                  <Button variant="success">Sign In</Button>
                </Link>
                  <Link to="/SignIn">
                    <Button variant="outline-dark">Sign Up</Button>
                  </Link></div>
            }
          </ButtonGroup>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = state => ({  // state equals root reducer
  user : state.user.authenticatedUser
});


export default connect(mapStateToProps)(NavigationBar);

