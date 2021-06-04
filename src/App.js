//React Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//SCSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './scss/branding.scss';

//Components
import NavBar from './components/navigation/navbar';
import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import ContactForm from './components/component/contact/startProject';
import Footer from './components/component/contact/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={ContactForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
