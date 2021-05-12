//React Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//SCSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './scss/branding.scss';

//Components
import NavBar from './components/navigation/navbar';
import HomePage from './components/pages/home';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
