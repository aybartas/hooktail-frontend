import React from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        this.setState({
            email:'',
            password:'',
            username:''
        });
        event.preventDefault();
    }

    // dynamically set state on input changes
    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState({[name]: value
        });
    }

    render() {
        return <Form className="mt-4" onSubmit = {this.handleSubmit}>
            <Form.Label>Sign Up</Form.Label>
            <FloatingLabel
                controlId="sign-up-email"
                label="Email address"
                className="mb-3">
                <Form.Control type="email" name = "email" placeholder="name@example.com"  onChange = {this.handleChange} />
            </FloatingLabel>

            <FloatingLabel
                controlId="sign-up-username"
                label="Username"
                className="mb-3">
                <Form.Control type="text" name = "username" placeholder="username" onChange = {this.handleChange} />
            </FloatingLabel>

            <FloatingLabel controlId="sign-up-password" label="Password">
                <Form.Control  type="password"  name = "password" placeholder="Password" />
            </FloatingLabel>
            <Button id="sign-up-submit" className="mt-4" variant="success" type="submit">
                Submit
            </Button>
        </Form>
    }
}

export default SignUp;