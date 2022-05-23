import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer></Footer>
           
        </div>
    );
};

export default Home;