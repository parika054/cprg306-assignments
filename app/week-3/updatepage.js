// /app/layout.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shopping List</title> {/* Update the title here */}
                {/* ... other meta tags, styles, etc. */}
            </Helmet>
            {children}
        </>
    );
};

export default Layout;
