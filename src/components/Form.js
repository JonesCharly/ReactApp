import React from 'react';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import "./Form.css"

class WelcomeForm extends React.Component {

    state = {
        firstname: "",
        lastname: ""
    }

    handleChange = event => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        console.log(this.state)
        return (
        <div className="formBlk">
            <Form>
                <Row>
                    <Col xs lg="2"> </Col>
                        <Col>
                        <p>Your firstname: {this.state.firstname}</p>
                        <Form.Control placeholder="First name" name="firstname" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                        <p>Your lastname: {this.state.lastname}</p>
                        <Form.Control placeholder="Last name" name="lastname" onChange={this.handleChange}/>
                        </Col>
                    <Col xs lg="2"> </Col>
                </Row>
            </Form>

        </div>
        )}
}

export default WelcomeForm