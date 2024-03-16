import React from "react";
import UpperNav from "./UpperNav/UpperNav";
import MainNav from "./MainNav/MainNav";
import FutureOfAI from "./FutureOfAI/FutureOfAI";
import MagicTools from "./MagicTools/MagicTools";
import HowItWorks from "./howItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <React.Fragment>
            <UpperNav />
            <MainNav />
            <FutureOfAI />
            <MagicTools />
            <HowItWorks />
            <Testimonials />
        </React.Fragment>
    );
};

export default Home;