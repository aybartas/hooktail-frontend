import React from 'react'
import SignIn from '../components/sign-in/sign-in';
import SignUp from './../components/sign-up/sign-up';
import {Row, Col} from 'react-bootstrap';

const SignInAndSignUp = () => {
    return (
        <div id="sign-in-and-sign-up" className = "mt-4">
            <Row>
                <Col>
                    <SignIn></SignIn>

                </Col>
                <Col>
                    <SignUp></SignUp>

                </Col>
            </Row>
        </div>
    );
};

export default SignInAndSignUp;