import ScrollAwareSection from "../../../components/ScrollAwareSection";
import { centralImages } from "../../../utils/images/centralImages";

const AsFeatured = () => {
    return (
        <section>
            <ScrollAwareSection className='pt-32'>
                <div className="container bg-[#F8F8FF] py-12">
                    <h4 className="text-4xl text-center pb-12">As Featured In</h4>
                    <div className="flex flex-col md:fle lg:flex-row items-center justify-center gap-3">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div className="w-[128.66px] h-[36.52px]" key={index}>
                                <img src={centralImages.forbesLogo} alt="Uber Logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollAwareSection>
        </section>
    );
};

export default AsFeatured;