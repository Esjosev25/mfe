import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <div id="root">
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
};