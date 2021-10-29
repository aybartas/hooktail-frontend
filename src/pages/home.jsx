
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import NavigationBar from './../components/navbar/navbar';
import MenuDirectory from './../components/menu-directory/menu-directory';


const HomePage = (props) => {
    return(
        <Container>
            <Row>
                <NavigationBar></NavigationBar>
            </Row>

            <Row>
                <MenuDirectory></MenuDirectory>

            </Row>
        </Container>
    );
}

export default HomePage;