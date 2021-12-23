import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import ShopPage from './pages/shop';
import NavigationBar from './components/navbar/navbar';
import SignInAndSignUp from './pages/sign-in';
import { auth } from './firebase/firebaseUtils';
import React from 'react';
class  App extends React.Component {
  unsubscribeFromAuth = null;

  constructor(){
    super();
    this.state = {
      authenticatedUser:null
    };
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({authenticatedUser:user});
    });
    
  }

  render(){
    console.log('app.js render user:'+this.state.authenticatedUser)
    return(
      <div className="App">
      <NavigationBar currentUser = {this.state.authenticatedUser}></NavigationBar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path = "/signIn" component = {SignInAndSignUp}></Route>
      </Switch>
    </div>
    );
  }
}

export default App;
