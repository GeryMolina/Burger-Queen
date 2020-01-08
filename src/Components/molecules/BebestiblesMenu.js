import React, { Component } from 'react';
import OrderItem from './OrderItems';
import Shop from '../../data/data';



class Shops extends Component {
    constructor() {
        super();
        this.state = {
            Shop: Shop,
            orders: []
        }
    }

    render() {
        const ShopsItems = Shop.Shop.map(elem => {
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
                {ShopsItems}
            </div>
        )
    }
}

export default Shops;