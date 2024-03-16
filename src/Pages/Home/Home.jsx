import React from "react";
import UpperNav from "./UpperNav/UpperNav";
import MainNav from "./MainNav/MainNav";
import FutureOfAI from "./FutureOfAI/FutureOfAI";
import MagicTools from "./MagicTools/MagicTools";
import HowItWorks from "./howItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";
import CustomTemplates from "./CustomTemplates/CustomTemplates";

const Home = () => {
    return (
        <React.Fragment>
            <UpperNav />
            <MainNav />
            <FutureOfAI />
            <CustomTemplates />
            <MagicTools />
            <HowItWorks />
            <Testimonials />
        </React.Fragment>
    );
};

export default Home;
