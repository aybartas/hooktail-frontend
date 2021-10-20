import React from 'react'
import NavigationBar from './../navbar/navbar';
import { Container, Row } from 'react-bootstrap';
import MenuDirectory from '../menu-directory/menu-directory';


const Layout = () => {

    return (
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

export default Layout;

