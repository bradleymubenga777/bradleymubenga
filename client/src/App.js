//React Modules

//SCSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './scss/branding.scss';

//Components
import NavBar from './components/navigation/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
