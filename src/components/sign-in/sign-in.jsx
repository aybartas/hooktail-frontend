import React from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap';

class SignIn extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(){

    }

    // dynamically set state on input changes

    handleChange = (event) => {
        console.log(event);
        const {value,name} = event.target;
        this.setState({[name]: value
        });
    }

    render() {

        return (
            <Form onSubmit = {this.handleSubmit} className="mt-4">
                <Form.Label>Sign In</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" onChange = {this.handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" onChange = {this.handleChange} placeholder="Password" />
                </FloatingLabel>
                <Button id="sign-in-submit" className="mt-4" variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}


export default SignIn;