import React from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { signInWithGoogle } from './../../firebase/firebaseUtils';
import {AuthService} from '../../api/services/authService';
import {statusCodes} from '../../api/common/api-constans';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = JSON.stringify({
            Username : this.state.username,
            Password : this.state.password
        }); 

        let successFullLogin = false;

        await AuthService.signIn( requestData)
        .then(response => {
            if(response.status === statusCodes.Ok){
                successFullLogin = true;
            }
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

        if(successFullLogin){
            console.log("successfulLOgin");
            return <Redirect to= "/"></Redirect> ;
        }
    }
   
    // dynamically set state on input changes
    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState({[name]: value
        });
    }
    
    render() {
        console.log("sign in render");
        return (
            <Form onSubmit = {this.handleSubmit} className="mt-4">
                <Form.Label>Sign In</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="text" name= "username"  onChange = {this.handleChange}  placeholder="Username"/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" name= "password" onChange = {this.handleChange} placeholder="Password" />
                </FloatingLabel>
                <Button id="sign-in-submit" className="mt-4 mr-2" variant="success" type="submit">
                    Sign In
                </Button>
                <Button id="sign-in-with-google" className="mt-4" variant = "" type="submit" onClick = {signInWithGoogle}>
                    Sign In With Google
                </Button>
            </Form>
        );
    }
}


export default withRouter(SignIn);