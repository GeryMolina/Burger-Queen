
import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firebase-database';
import BtnMenu from '../atoms/BtnMenu';
import OrderItem from './OrderItems';




class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      table: "",
      price: 0,

    }
  }

  //se asigna nro de mesa al pedido cambiando el estado 'table'
  //nroTable = () => {}



  //agregamos un producto enviando al estado 'order' un objeto con el nombre y precio del item del menu
  clikItem = (item) => {
    let items = this.state.order;
    items.push({
      type: item.type,
      price: item.price
    });

    //sumatoria del precio del pedido total, actualizando el estado 'price'
    let actualPrice = this.state.price;
    let totalPrice = item.price;
    let newPrice = actualPrice + totalPrice;
    this.setState({
      price: newPrice
    });
  }


  //para eliminar los items del pedido, se eliminan del estado 'order'
  deleteItem = (elem, item) => {
    let removeItem = this.state.order;
    this.setState({
      order: removeItem.filter((removeItem, i) => {
        return i !== elem
      }),
    })

    //se actualiza nuevamente precio, si se elimina algún item de la lista
    let actualPrice = this.state.price;
    let lowerPrice = item.price;
    let newPrice = actualPrice - lowerPrice;
    this.setState({
      price: newPrice
    });
  }


  //guarda los valores de los estados que correspondan
  handleChange = (item) => {
    this.setState({
      [item.id]: item.value
    })
  }


  //enviando pedido a base de datos
  sendOrder = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      mesa: this.state.table,
      order: this.state.order,
      precio: this.state.price
    })

      .then(function (docRef) {
        console.log("Enviado exitosamente!", docRef.id);
      })

      .catch(function (error) {
        console.error("Error al enviar", error);
      });
  }

  //se muestra resumen del pedido, con botón para finalmente enviar a cocina
  render() {
    return (


      <div className="first-order-container">
        <div>
          {this.state.order.map((item) => (
            <BtnMenu key={item.id} clikItem={this.clikItem} product={item} />
          ))}
        </div>

        <div>
          {this.state.order.map((item, elem) => (
            <div key={elem}>
              <p>{item.type}</p>
              <p>{item.price}</p>

              <button onClick={() => this.deleteItem(elem, item)}>Eliminar</button>
            </div>
          ))}
        </div>

        <div>
          <p>Total a pagar:</p>
          <p>{this.state.price}</p>
        </div>

        <div>
          <button onClick={() => this.sendOrder()}>Enviar a cocina</button>
        </div>

      </div>
  
    )}
}



export default NewOrder;












/*
class NewOrder extends Component {
  constructor() {
    super();
    this.state = {
      order: [],
      table: "",
    }

    this.NewOrder = firebase.initializeApp(fire);
    this.db = this.app.database().ref().child('orders');

    this.addOrder = this.addOrder.bind(this);
  }


  componentDidMount() {
    const { order } = this.state;
    this.db.on('child_added', snap => {
      order.push({
        orderId: snap.key,
      })
      this.setState({order});
    });
  }

  addOrder(order) {
   this.db.push().set({orderContent: order});
  }

  removeOrder() {

  }


  render() {
    return (
      <div>
        <Pizzas />
      </div>
    )
  }
}

*/







/*
class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.orderId = props.orderId;
    this.orderContent = props.orderContent;
  }

  render() {
    return (
      <div className="Order">
        <li>{this.orderId} - {this.orderContent}</li>
      </div>
    )
  }
}

export default NewOrder;
*/


