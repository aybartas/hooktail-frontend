import React from 'react'
import { Card, Container } from 'react-bootstrap';
import './menu-item.css'

const MenuItem = ({ id,title, imageUrl}) => {

    return (
        
        <Card id= {id} className="bg-dark text-white mt-2 mb-2" >
            <Card.Img src={imageUrl} alt="Card image" />
            <Card.ImgOverlay>
                <Container className="align-middle" >
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>SHOP NOW </Card.Text>
                </Container>
            </Card.ImgOverlay>
        </Card>
    );
}

export default MenuItem;

