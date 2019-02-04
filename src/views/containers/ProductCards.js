import React, { Component } from 'react';
import axios from 'axios';

import Card from '../components/ProductCard/ProductCard';

// import classes from 'ProductCards.module.css';

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
        let cards = null; // Add a spinner...
        if (this.state.products.length) {
            cards = this.state.products.map(product => (
                <Card
                    key={product.title}
                    {...product} />
            ));
        }
        return cards;
    }
}

export default ProductCards;