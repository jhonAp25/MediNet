import React  from "react";
import { BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import '../src/Assets/App.css'
import Index from './Pages/index'
import FormularioEmpl from "./Components/FormularioEmpl";




function App() {
  return (

    <Router>

      <Index/>

        <Switch>

          <Route path="/empl" component={FormularioEmpl} />
          <Route path="/ussers" />
          <Route path="/" />
        
      
       </Switch>

  </Router>
    
  );
}

export default App;
