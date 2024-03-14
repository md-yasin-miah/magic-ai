import React from 'react';
import UpperNav from './UpperNav/UpperNav';
import NavBar from './NavBar/NavBar';
import FutureOfAI from './FutureOfAI/FutureOfAI';

const HomePage = () => {
    return (
        <React.Fragment>
            <UpperNav />
            <NavBar />
            <FutureOfAI />
        </React.Fragment>
    );
};

export default HomePage;