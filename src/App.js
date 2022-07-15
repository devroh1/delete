import './App.css';
import About from './components/about';
import Contact from './components/contact';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Routes</h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <hr />
        </div>
        <div>
            <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <h1>
      Home
    </h1>
  )
}

export default App;
