import React, { Component } from 'react';

import 'firebase/database';


import './App.css'; 

import { BrowserRouter as Router, Route } from 'react-router-dom';

//componente
import OrganismLogin from './Components/organisms/OrganismLogin';
import Register from './Components/organisms/Register';
import Pizzas from './Components/molecules/PizzasMenu';
import ViewGarzon from './Components/organisms/GarzonView';
import NewOrder from './Components/molecules/NewOrder';

class App extends Component {

  render() {
    return (
      <Router>
        <div style={principalDiv}>
          
          <Route exact path="/"> <OrganismLogin/></Route>
          <Route exact path="/register"> <Register/></Route>

          <ViewGarzon />


        </div>

      </Router>
    )
  }
}

const principalDiv={
  display: 'flex',
  width: '1024px',
  height: '768px',
  alignContent:'center',
    
}

export default App;