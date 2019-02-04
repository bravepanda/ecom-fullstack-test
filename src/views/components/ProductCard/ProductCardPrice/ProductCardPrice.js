import React from 'react';
import './productCardPrice.scss';

const ProductCardPrice = (props) => (
    <div className='product-card-price'>
        <span>{props.priceLabel}</span>
        <span>{props.currency}</span>
        <span>{props.price}</span>
    </div>
);

export default ProductCardPrice;