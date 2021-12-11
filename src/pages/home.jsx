
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import MenuDirectory from './../components/menu-directory/menu-directory';


const HomePage = (props) => {
    console.log("home page render");
    return(
        <Container>
            <Row>
                <MenuDirectory></MenuDirectory>
            </Row>
        </Container>
    );
}

export default HomePage;