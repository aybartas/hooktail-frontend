import React from 'react'
import { Card, Container } from 'react-bootstrap';
import './menu-item.css'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ key,title, imagePath,linkUrl, history, match}) => {

    let props = { key,title, imagePath,linkUrl, history, match};

    return (
        // use match.url to fetch where menuitem has been matched and append linkUrl to get result url 
        <Card id= {key} className="bg-dark text-white mt-2 mb-2 w-30 h-25" onClick = {() => history.push(`${match.url}${linkUrl}`)} >
            <Card.Img src={imagePath} alt="Card image" />
            <Card.ImgOverlay>
                <Container className="align-middle" >
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>SHOP NOW </Card.Text>
                </Container>
            </Card.ImgOverlay>
        </Card>
    );
}

export default withRouter(MenuItem);

