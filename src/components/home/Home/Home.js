import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Features></Features>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;