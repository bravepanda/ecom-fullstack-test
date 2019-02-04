import React from 'react';
import './productCardBody.scss';

const ProductCardBody = (props) => (
    <div className='product-card-body'>
        {props.productLabel ?
            <div className='product-card-body-label'>{props.productLabel}</div> : null}
        <h4 className='product-card-body-title'>{props.title}</h4>
        <p className='product-card-body-description'>{props.description}</p>
    </div>
);

export default ProductCardBody;