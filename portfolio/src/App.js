
//Pacote Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//Styled Components
import {
  Template
} from './components/template/style.js'
import Menu from './components/menu'

//Páginas
import Home from './pages/home'
import About from './pages/about'
import Contato from './pages/contato'


function App() {
  return (
    <Router>
      <Template>
        <Menu/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
