import React from 'react';

import '../stylesheets/listingPage.scss';

// This doesn't work properly with HMR - when you make changes, the server and client get out of sync.
const PageNotFound = () => {
    return (
        <main className='http-error-wrapper'>
            <h3>The page you are looking for cannot be found.</h3>
        </main>
    );
};

export default PageNotFound;