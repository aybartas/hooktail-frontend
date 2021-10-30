
import React from 'react'
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


const ProductCard = ({ id, price, imageUrl, name, history, match }) => {
    return (
        <Card  onClick={() => history.push(`${match.url}/${id}`)}
            className="bg-dark text-white mt-2 mb-2"
            style={{ width: '18rem',
            transition: '0.3s',


             }} >
            <Card.Img variant="top" style = {{height:'20rem'}} src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Row>
                    <Col><h4><Badge bg="alert">{price}$</Badge></h4>
                    </Col>
                    <Col><Button variant="success" > BUY</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default withRouter(ProductCard);
