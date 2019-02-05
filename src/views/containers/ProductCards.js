import React, { Component } from 'react';
import axios from 'axios';

import ProductCard from '../components/ProductCard/ProductCard';

import './productCards.scss';

class ProductCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            products: [],
            error: false
        };
        
        // For async tests
        this.fetchProducts;
    }

    componentDidMount() {
        this.fetchProducts = axios.get('/api/products')
            .then(response => {
                this.setState({
                    loading: false,
                    products: response.data,
                    error: false
                });
            })
            .catch(error => {                
                this.setState({
                    loading: false,
                    error: true
                });
                // Handle the error
                console.log('[ERROR]', error.message);
            });
    }

    render() {
        let cards = 'Loading...';

        if (this.state.products.length) {            
            cards = (
                <ul>
                    {this.state.products.map(product => 
                        <ProductCard
                            key={product.title}
                            {...product} />
                    )}
                </ul>
            );
        }

        if (this.state.error) {
            cards = 'There has been an error.';
        }

        return (
            <div className='product-cards'>
                {cards}
            </div>
        );
    }
}

export default ProductCards;