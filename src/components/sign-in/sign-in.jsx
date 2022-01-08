import React from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { signInWithGoogle } from './../../firebase/firebaseUtils';
import {AuthService} from '../../api/services/authService';
import {statusCodes} from '../../api/common/api-constans';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './../../redux/user/userActions';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToHome: false
        }
    }

    clearState = () => {
        this.setState( {
            username : '',
            password: ''
        });
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
                const {setCurrentUser} = this.props;
                setCurrentUser({
                    Username : response.data.username,
                    Id : response.data.id,
                    Email : response.data.email,
                    Roles : response.data.userRoles
                });
                successFullLogin = true;
            }
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

        if(successFullLogin){
            console.log("successfulLOgin");
            this.setState({
                redirectToHome : true
            });
        }
    }
   
    // dynamically set state on input changes
    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState({[name]: value
        });
    }
    
    render() {
        if(this.state.redirectToHome){
            return <Redirect to="/" />
        }

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

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default  withRouter(connect(null, mapDispatchToProps)(SignIn));