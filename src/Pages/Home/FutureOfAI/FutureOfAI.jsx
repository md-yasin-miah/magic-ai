import PropTypes from "prop-types";
import { FutureOfAIData, careerData } from "../../../utils/mock/mockData";
import ScrollAwareSection from "../../../components/ScrollAwareSection";
const SvgIconWrapper = ({ IconComponent }) => <IconComponent />;

const FutureOfAI = () => {
  return (
    <section id='features'>
      <section className='site-section pb-20 pt-32 transition-all duration-700 md:translate-y-8 md:opacity-0 [&.lqd-is-in-view]:translate-y-0 [&.lqd-is-in-view]:opacity-100 lqd-is-in-view'>
        <div className='container'>
          <header className='mx-auto text-center w-2/5 mb-14 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full'>
            <h2 className='mb-[0.45em] font-secondary font-bold text-[53px] text-headingForeground'>The future of AI.</h2>
            <p className='text-[18px] leading-[1.444em]'></p>
          </header>
          <div className='grid grid-cols-3 justify-between gap-x-20 gap-y-9 max-lg:grid-cols-2 max-lg:gap-x-10 max-md:grid-cols-1'>
            {FutureOfAIData?.map((item) => (
              <div className='group flex gap-5' key={item?.id}>
                <div className='grid place-items-center shrink-0 w-11 h-11 rounded-lg bg-[#F2F2F2] text-heading-foreground transition-all group-hover:scale-125 group-hover:shadow-xl group-hover:bg-black group-hover:text-white'>
                  <SvgIconWrapper IconComponent={item?.svgIcon} />
                </div>
                <div className='relative shrink'>
                  <h4 className='mb-3 font-secondary text-lg text-headingForeground font-medium'>{item?.title}</h4>
                  <p className="text-[14px] text-lightGray font-primary" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ScrollAwareSection className='py-20'>
        <div className="container">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {
              careerData.map((item) =>
                <div key={item.id} className={`lqd-color-box flex items-center py-5 px-9 gap-4 rounded-[15px] transition-all hover:shadow-lg hover:-translate-y-2 bg-opacity-[0.07] ${item.className.bg} ${item.className.shadow}`}>
                  <span className={`lqd-box-dot w-6 h-6 border-[8px] border-white rounded-full shadow-lg ${item.className.bg}`}></span>
                  <h3 className={`${item.className.text} text-xl text-inherit -tracking-tight`}>{item.title}</h3>
                </div>
              )
            }
          </div>
        </div>
      </ScrollAwareSection>
    </section>
  );
};

SvgIconWrapper.propTypes = {
  IconComponent: PropTypes.elementType.isRequired
};

export default FutureOfAI;