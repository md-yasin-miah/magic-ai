import { centralImages } from "../../../utils/images/centralImages";

const MainNav = () => {
  return (
    <section className="site-section relative flex min-h-screen items-center justify-center overflow-hidden py-48 text-center text-white max-md:pb-16 max-md:pt-48 lqd-is-in-view" id="banner">
      <div className="absolute start-0 top-0 h-full w-full transform-gpu overflow-hidden [backface-visibility:hidden]">
        <div className="banner-bg absolute left-0 top-0 h-full w-full"></div>
      </div>
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4">
          <div className="mx-auto flex flex-col items-center max-lg:w-2/3 max-md:w-full">
            <h6 className="relative mb-8 translate-y-6 overflow-hidden rounded-2xl bg-white bg-opacity-15 px-3 py-1 text-white opacity-0 blur-lg transition-all ease-out group-[.page-loaded]/body:translate-y-0 group-[.page-loaded]/body:opacity-100 group-[.page-loaded]/body:blur-0">
              <div className="banner-subtitle-gradient absolute -inset-3 blur-3xl transition-all duration-500 group-[.page-loaded]/body:opacity-0">
                <div className="animate-hue-rotate absolute inset-0 bg-gradient-to-br from-violet-600 to-red-500"></div>
              </div>
              <span className="relative">UpturnSocial</span>
              <span className="dot relative"></span>
              <span className="relative opacity-60">Unleash the Power of AI</span>
            </h6>
            <div className="banner-title-wrap relative">
              <h1 className="banner-title mb-7 translate-y-7 font-body font-bold -tracking-wide text-white opacity-0 transition-all ease-out group-[.page-loaded]/body:translate-y-0 group-[.page-loaded]/body:opacity-100">
                Real, Organic Instagram Followers{' '}
                <svg className="lqd-split-text-words inline transition-all duration-[2850ms]" width="47" height="62" viewBox="0 0 47 62" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.95 0L0 38.213H18.633V61.141L46.583 22.928H27.95V0Z"></path>
                </svg>
              </h1>
            </div>
            <p className="mb-7 w-3/4 text-[20px] leading-[1.25em] text-fuchsia-700 opacity-75 max-sm:w-full [&.lqd-split-text-words]:translate-y-3 [&.lqd-split-text-words]:opacity-0 [&.lqd-split-text-words]:transition-all [&.lqd-split-text-words]:ease-out group-[.page-loaded]/body:[&.lqd-split-text-words]:translate-y-0 group-[.page-loaded]/body:[&.lqd-split-text-words]:text-white group-[.page-loaded]/body:[&.lqd-split-text-words]:opacity-100">
              <span>No bots. No fake users. Build your community with AI targeted IG follower growth.</span>
              {/* <span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.15s' }}>All-in-one</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.17s' }}>platform</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.19s' }}>to</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.21s' }}>generate</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.23s' }}>AI</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.25s' }}>content</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.27s' }}>and</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.29s' }}>start</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.31s' }}>making</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.33s' }}>money</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.35s' }}>in</span>&nbsp;<span className="inline-flex lqd-split-text-words [background:inherit]" style={{ transitionDelay: '0.37s' }}>minutes.</span> */}
            </p>
            <div className="translate-y-3 opacity-0 transition-all delay-[450ms] group-[.page-loaded]/body:translate-y-0 group-[.page-loaded]/body:opacity-100">
              <a className="inline-flex w-full items-center justify-center bg-black bg-opacity-10 px-4 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-opacity-20" data-fslightbox="video-gallery" style={{ borderRadius: '3rem' }} href="https://youtu.be/galNNnEcK7I">
                <svg className="icon icon-tabler icon-tabler-player-play-filled me-4 bg-white" style={{ padding: '13px', borderRadius: '2rem' }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="#37393d"></path>
                </svg>
                See how it works &nbsp;
              </a>
            </div>
            <br />
            <div className="translate-y-3 opacity-0 transition-all delay-[500ms] group-[.page-loaded]/body:translate-y-0 group-[.page-loaded]/body:opacity-100">
              <a className="opacity-50 transition-opacity hover:opacity-100" href="#features">Discover UpturnSocial</a>
            </div>
          </div>
          <div className="rounded-xl shadow-lg p-4 bg-[#ffffff3d] overflow-hidden max-h-[350px] md:max-h-[600px]"
            style={{
              transition: 'background .3s,border .3s,border-radius .3s,box-shadow .3s,transform var(--e-transform-transition-duration,.4s)'
            }}
          >
            <img className="mainNavSS" src={centralImages.mainNavDemoSS} alt="Work sample" />
          </div>
        </div>
      </div>
      <div className="banner-divider absolute inset-x-0 -bottom-[2px]">
        <svg className="h-auto w-full fill-background" width="1440" height="105" viewBox="0 0 1440 105" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default MainNav;