import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';


const HatPage = (props) => {
  console.log(props);
  return (
    <div>
    <Link to = '/topics'> link to topics</Link>
  <div> its hat page</div>

    </div>
  );
}


const TopicPage = () => {
  return (<div> topic page </div> )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/hats" component={HatPage}></Route>
        <Route path="/topics/:topicId" component={TopicPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
