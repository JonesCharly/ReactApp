import React from 'react';
import "./Navbar.css"
import { Form, Navbar, FormControl, Button, Nav } from 'react-bootstrap';

class HomeMenu extends React.Component {
    render() {
        return (

            <div className="menu">
                <Navbar variant="dark">

                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">

                    <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>

                </Navbar>
            </div>
        )}
}

export default HomeMenu