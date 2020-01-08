import React, { Component } from 'react';
import OrderItem from './OrderItems';
import Pizza from '../../data/data';



class Pizzas extends Component {
    constructor() {
        super();
        this.state = {
            Pizza: Pizza,
            orders: []
        }
    }

    render() {
        const PizzaItems = Pizza.Pizza.map(elem => {
            return (
                <OrderItem
                    key={elem.id}
                    type={elem.type}
                    ingredients={elem.ingredients}
                    price={elem.price}
                />
            )
        });

        return(
            <div>
                {PizzaItems}
            </div>
        )
    }
}

export default Pizzas;