import React from "react";
import UpperNav from "./UpperNav/UpperNav";
import MainNav from "./MainNav/MainNav";
import FutureOfAI from "./FutureOfAI/FutureOfAI";
import MagicTools from "./MagicTools/MagicTools";

const Home = () => {
    return (
        <React.Fragment>
            <UpperNav />
            <MainNav />
            <FutureOfAI />
            <MagicTools />
        </React.Fragment>
    );
};

export default Home;