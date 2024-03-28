import ScrollAwareSection from "../../../components/ScrollAwareSection";
import { centralImages } from "../../../utils/images/centralImages";

const FeaturedBands = () => {
    return (
        <section>
            <ScrollAwareSection className='pt-32'>
                <div className="container">
                    <h4 className="text-4xl text-center">24,000+ Influencers and Brands</h4>
                    <p className="text-center py-5">Trusted and used for organic Instagram follower growth and promotion by <br />leading influencers and brands.</p>
                    <div className="flex items-center justify-center pb-10">
                        <button className="btn bg-[#083D91] text-white rounded-lg py-3 px-10">Get Started</button>
                    </div>
                    <div className="flex flex-col md:fle lg:flex-row items-center justify-center">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div className="w-[178.4px] h-[68px] flex items-center justify-center" key={index}>
                                <div className="w-[144px] h-[68px] py-3 px-6">
                                    <img src={centralImages.uberLogo} alt="Uber Logo" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollAwareSection>
        </section>
    );
};

export default FeaturedBands;