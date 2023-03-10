import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Contract from './Contract';
import OurWork from './OurWork';
import SiteSummary from './SiteSummary';
import Supports from './Supports';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Supports/>
            <hr className='mx-9'/>
            <Categories/>
            <SiteSummary/>
            <OurWork/>
            <Contract/>
        </div>
    );
};

export default Home;