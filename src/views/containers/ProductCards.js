import React, { Component } from 'react';
import axios from 'axios';

import Card from '../components/ProductCard/ProductCard';

import './productCards.scss';

class ProductCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get('/api/products')
            .then(response => {
                this.setState({
                    products: response.data
                });
            });
    }

    render() {
        let cards = null; // Add a loading spinner here...
        if (this.state.products.length) {            
            cards = (
                <ul className='product-cards'>
                    {this.state.products.map(product => 
                        <Card
                            key={product.title}
                            {...product} />
                    )}
                </ul>
            );
        }
        return cards;
    }
}

export default ProductCards;