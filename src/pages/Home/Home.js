import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import GlobalCustomer from './GlobalCustomer';
import Parts from './Parts';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <WhyChooseUs></WhyChooseUs>
            <GlobalCustomer></GlobalCustomer>
           
        </div>
    );
};

export default Home;