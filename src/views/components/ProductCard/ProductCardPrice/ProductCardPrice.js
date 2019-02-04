import React from 'react';
import './productCardPrice.scss';

const ProductCardPrice = (props) => (
    <div className='product-card-price'>
        <span className='price-label'>{props.priceLabel}</span>
        <span className='currency'>{props.currency}</span>
        <span className='price'>{Number.parseFloat(props.price).toFixed(2)}</span>
    </div>
);

export default ProductCardPrice;