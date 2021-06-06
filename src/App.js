//React Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//JavaScript Modules
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import ScrollToTop from './components/ScrollToTop';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//SCSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './scss/branding.scss';
import './scss/responsive.scss';

//Components
import NavBar from './components/navigation/navbar';
import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import ContactForm from './components/component/contact/startProject';
import Footer from './components/component/contact/Footer';

import SpaceCS from './components/component/portfolio/spaceCaseStudy';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Route render={({location}) => (
          <TransitionGroup >
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={ContactForm} />
                <Route exact path="/spaceCaseStudy" component={SpaceCS} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
