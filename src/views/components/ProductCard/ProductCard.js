import React from 'react';
import ProductCardBody from './ProductCardBody/ProductCardBody';
import ProductCardPrice from './ProductCardPrice/ProductCardPrice';
import './productCard.scss';

const ProductCard = (props) => (
    <div className='product-card'>
        <img className='product-card-img' src={`/dist/${props.image.path}`} alt={props.image.alt} />
        {props.productLabel ? <div className='product-card-label'>{props.productLabel}</div> : null}
        <ProductCardBody
            title={props.title}
            description={props.description} />
        <ProductCardPrice
            priceLabel={props.priceLabel}
            currency={props.currency}
            price={props.price} />
        <button >{props.cta}{props.ctaLink}</button>
    </div>
);

export default ProductCard;