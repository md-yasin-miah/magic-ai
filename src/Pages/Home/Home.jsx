import React from "react";
import UpperNav from "./UpperNav/UpperNav";
import MainNav from "./MainNav/MainNav";
import FutureOfAI from "./FutureOfAI/FutureOfAI";

const Home = () => {
    return (
        <React.Fragment>
            <UpperNav />
            <MainNav />
            <FutureOfAI />
        </React.Fragment>
    );
};

export default Home;