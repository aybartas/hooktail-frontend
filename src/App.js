import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import ShopPage from './pages/shop';
import NavigationBar from './components/navbar/navbar';
import SignInAndSignUp from './pages/sign-in';
import { auth } from './firebase/firebaseUtils';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        // TODO: save to firebase
      }
      console.log("auth changed");
      //setCurrentUser(user);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route
            exact path="/signIn"
            render  ={() => this.props.currentUser ? ( <Redirect to='/'></Redirect>) :
              (<SignInAndSignUp></SignInAndSignUp>)}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


const mapStateToProps = ({ user }) => ({
  currentUser: user.authenticatedUser
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
