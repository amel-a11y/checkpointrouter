import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Accueil from './Components/Accueil';
import Projets from './Components/Projets';

function App() {
  return (
    <div className="App">
          <Router forceRefresh={true}>
     <Navigation/>
     <Switch>
     <Route path="/" exact component={Accueil}/>
     <Route path="/Projets"  component={Projets}/>
     <Route path="/" component={()=><h1>Page introuvable</h1>}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
