import ScrollAwareSection from "../../../components/ScrollAwareSection";
import { clientResultsData } from "../../../utils/mock/mockData";

const ClientResults = () => {
    return (
        <section>
            <ScrollAwareSection className='pt-32'>
                <div className="container">
                    <h4 className="text-4xl text-center">Client Results</h4>
                    <p className="text-center py-5">Grow your followers on Instagram with genuinely interested users. Experience high <br /> engagement. Gain more customers. Don’t take our word for it, see client results for yourself!</p>
                    <div className="w-full h-full flex items-center justify-center pt-2">
                        <div className="grid grid-cols-4 gap-8">
                            {clientResultsData?.map((item, index) => (
                                <div className="w-60 h-44 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center gap-3" key={index}>
                                    <h4 className="text-black text-3xl">{item?.title}</h4>
                                    <span className="text-sm px-2 text-center">{item?.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-10">
                        <button className="btn bg-[#083D91] text-white rounded-lg py-3 px-10">Get Started</button>
                    </div>
                </div>
            </ScrollAwareSection>
        </section>
    );
};

export default ClientResults;