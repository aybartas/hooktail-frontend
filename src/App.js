import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import ShopPage from './pages/shop';
import NavigationBar from './components/navbar/navbar';
import SignInAndSignUp from './pages/sign-in';
import { auth } from './firebase/firebaseUtils';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentuser } from './redux/user/userActions';

class  App extends React.Component {
  unsubscribeFromAuth = null;
  
  constructor(){
    super();
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.props.setCurrentuser(user);
    });
  }


  render(){
    return(
      <div className="App">
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path = "/signIn" component = {SignInAndSignUp}></Route>
      </Switch>
    </div>
    );
  }
}

export default connect(null, {setCurrentuser})(App);
