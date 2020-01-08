import React, { Component } from 'react';
import Pizzas from '../molecules/PizzasMenu';
import Picoteos from '../molecules/PicoteoMenu';
import Shops from '../molecules/BebestiblesMenu';
import NewOrder from '../molecules/NewOrder';


class ViewGarzon extends Component {
  render() {
    return (
      <div>
        <h3>Titulo Garzon View</h3>
        <h4>Nro. Mesa seleccionada</h4>
        <Pizzas />
        <Picoteos />
        <Shops />

        <NewOrder />

      </div>

    )
  }
}


export default ViewGarzon;