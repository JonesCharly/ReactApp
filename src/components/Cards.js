import React from 'react';
import { Card } from 'react-bootstrap';
import "./Cards.css";
import picOne from '../assets/picOne.png';

const Cards = () => {
    
    return (
        <div className="cardBlc">

            <Card className="cards">
                <Card.Img variant="top" src={picOne} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="cards">
                <Card.Img variant="top" src={picOne} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="cards">
                <Card.Img variant="top" src={picOne} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cards