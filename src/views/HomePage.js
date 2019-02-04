import React from 'react';
import ProductCards from './containers/ProductCards';

import '../stylesheets/listingPage.scss';

const HomePage = () => {
    return (
        <main className='product-cards-wrapper'>
            <ProductCards />
        </main>
    );
};

export default HomePage;