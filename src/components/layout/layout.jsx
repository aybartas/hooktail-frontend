import React from 'react'
import NavigationBar from './../navbar/navbar';
import MenuItem from './../menu-item/menu-item';
import { Container, Row, Col } from 'react-bootstrap';


const Layout = () => {

    return (
        <Container>
            <Row>
                <NavigationBar></NavigationBar>
            </Row>
            <Row>
                <Col> <MenuItem></MenuItem></Col>
                <Col><MenuItem></MenuItem></Col>
                <Col><MenuItem></MenuItem></Col>
            </Row>
        </Container>
    );
}

export default Layout;

