import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import ShopPage from './pages/shop';
import NavigationBar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
