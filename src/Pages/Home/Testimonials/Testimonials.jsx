// import { useEffect } from "react";
import ScrollAwareSection from "../../../components/ScrollAwareSection"
import { centralImages } from "../../../utils/images/centralImages"

const Testimonials = () => {
  // useEffect(() => {
  //   // Load Flickity script from CDN
  //   const script = document.createElement('script');
  //   script.src = 'https://cdn.jsdelivr.net/npm/flickity@2.2.2/dist/flickity.pkgd.min.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Initialize Flickity when script is loaded
  //   if (window.Flickity) {
  //     new window.Flickity('.flickity-enabled', {
  //       asNavFor: '.testimonials-main-carousel',
  //       contain: false,
  //       pageDots: false,
  //       cellAlign: 'center',
  //       prevNextButtons: false,
  //       wrapAround: true,
  //       draggable: false
  //     });
  //   }
  // }, []);
  return (
    <ScrollAwareSection className='relative py-10' id='testimonials'>
      <div
        className="absolute inset-x-0 top-0 -z-1 h-[150vh]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #F0EFFA, transparent)'
        }}
      ></div>
      <div className="container relative">
        <div
          className="rounded-[50px] border bg-contain bg-center bg-no-repeat p-11 pb-24 max-sm:px-5"
          style={{ backgroundImage: `url(${centralImages.testimonialBG})` }}
        >
          <header className="mx-auto text-center w-1/2 mb-10 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full">
            <h6 className="mb-6 inline-block rounded-md bg-[#28027C] bg-opacity-15 px-3 py-1 text-[13px] font-medium text-[#28027C]">
              Testimonials
              <span className="dot"></span>
              <span className="opacity-50">Trustpilot</span>
            </h6>
            <h2 className="mb-[0.45em]">Trusted by millions.</h2>
            <p className="text-[18px] leading-[1.444em]"></p>
          </header>
          <div className="max-lg:11/12 mx-auto w-8/12 max-md:w-full">
            <div className="mb-20">
              <div
                className="mx-auto mb-7 w-[235px] gap-5 flickity-enabled" data-flickity="{ &quot;asNavFor&quot;: &quot;.testimonials-main-carousel&quot;, &quot;contain&quot;: false, &quot;pageDots&quot;: false, &quot;cellAlign&quot;: &quot;center&quot;, &quot;prevNextButtons&quot;: false, &quot;wrapAround&quot;: true, &quot;draggable&quot;: false }"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100% )',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100% )'
                }}
                tabIndex="0">
                <div
                  className="flickity-viewport"
                  style={{ height: '157px', touchAction: 'pan-y' }}
                >
                  <div className="flickity-slider"
                    style={{ left: '0px', transform: 'translateX(-43.96%)' }}
                  >
                    <div
                      className="w1/3 group cursor-pointer pb-[16px] pt-9 text-center text-[15px] font-medium is-selected is-nav-selected"
                      style={{ position: 'absolute', left: '0px', transform: 'translateX(281.26%)' }}
                      aria-hidden="true"
                    >
                      <figure className="size-11 mx-auto mb-4 overflow-hidden rounded-full transition-all group-[&amp;.is-nav-selected]:-translate-y-4 group-[&amp;.is-nav-selected]:scale-[1.75] group-[&amp;.is-nav-selected]:border-[5px] group-[&amp;.is-nav-selected]:border-white group-[&amp;.is-nav-selected]:shadow-sm max-sm:group-[&amp;.is-nav-selected]:scale-150">
                        <img className="h-full w-full object-cover object-center" src={centralImages.testimonial_client_1} alt="Peline Jan" />
                      </figure>
                      <div className="whitespace-nowrap opacity-0 transition-all group-[&amp;.is-nav-selected]:opacity-100">
                        <p className="text-heading-foreground">Peline Jan</p>
                        <p className="text-heading-foreground opacity-15">Entrepreneur</p>
                      </div>
                    </div>
                    <div className="w1/3 group cursor-pointer pb-[16px] pt-9 text-center text-[15px] font-medium"
                      // style="position: absolute; left: 0px; transform: translateX(118.89%);"
                      style={{ position: 'absolute', left: '0px', transform: 'translateX(118.89%)' }}
                      aria-hidden="true"
                    >
                      <figure className="size-11 mx-auto mb-4 overflow-hidden rounded-full transition-all group-[&amp;.is-nav-selected]:-translate-y-4 group-[&amp;.is-nav-selected]:scale-[1.75] group-[&amp;.is-nav-selected]:border-[5px] group-[&amp;.is-nav-selected]:border-white group-[&amp;.is-nav-selected]:shadow-sm max-sm:group-[&amp;.is-nav-selected]:scale-150">
                        <img className="h-full w-full object-cover object-center" src={centralImages.testimonial_client_2} alt="Tom Daniel" />
                      </figure>
                      <div className="whitespace-nowrap opacity-0 transition-all group-[&amp;.is-nav-selected]:opacity-100">
                        <p className="text-heading-foreground">Tom Daniel</p>
                        <p className="text-heading-foreground opacity-15">Writer</p>
                      </div>
                    </div>
                    <div
                      className="w1/3 group cursor-pointer pb-[16px] pt-9 text-center text-[15px] font-medium is-selected is-nav-selected"
                      // style="position: absolute; left: 0px; transform: translateX(189.51%);"
                      style={{ position: 'absolute', left: '0px', transform: 'translateX(189.51%)' }}
                    >
                      <figure className="size-11 mx-auto mb-4 overflow-hidden rounded-full transition-all group-[&amp;.is-nav-selected]:-translate-y-4 group-[&amp;.is-nav-selected]:scale-[1.75] group-[&amp;.is-nav-selected]:border-[5px] group-[&amp;.is-nav-selected]:border-white group-[&amp;.is-nav-selected]:shadow-sm max-sm:group-[&amp;.is-nav-selected]:scale-150">
                        <img className="h-full w-full object-cover object-center" src={centralImages.testimonial_client_3} alt="Eric Sanchez" />
                      </figure>
                      <div className="whitespace-nowrap opacity-0 transition-all group-[&amp;.is-nav-selected]:opacity-100">
                        <p className="text-heading-foreground">Eric Sanchez</p>
                        <p className="text-heading-foreground opacity-15">UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonials-main-carousel text-center text-[26px] leading-[1.27em] text-heading-foreground max-sm:text-lg max-sm:[&amp;_.flickity-button-icon]:!left-1/4 max-sm:[&amp;_.flickity-button-icon]:!top-1/4 max-sm:[&amp;_.flickity-button-icon]:!h-1/2 max-sm:[&amp;_.flickity-button-icon]:!w-1/2 [&amp;_.flickity-button.next]:-right-16 max-md:[&amp;_.flickity-button.next]:-right-10 [&amp;_.flickity-button.previous]:-left-16 max-md:[&amp;_.flickity-button.previous]:-left-10 [&amp;_.flickity-button]:opacity-40 [&amp;_.flickity-button]:transition-all [&amp;_.flickity-button]:hover:bg-transparent [&amp;_.flickity-button]:hover:opacity-100 [&amp;_.flickity-button]:focus:shadow-none max-sm:[&amp;_.flickity-button]:relative max-sm:[&amp;_.flickity-button]:!left-auto max-sm:[&amp;_.flickity-button]:!right-auto max-sm:[&amp;_.flickity-button]:top-auto max-sm:[&amp;_.flickity-button]:!mx-4 max-sm:[&amp;_.flickity-button]:translate-y-0 flickity-enabled is-draggable" data-flickity="{ &quot;contain&quot;: true, &quot;wrapAround&quot;: true, &quot;pageDots&quot;: false, &quot;adaptiveHeight&quot;: true }" tabIndex="0">
                <div
                  className="flickity-viewport"
                  style={{ height: '132.062px', touchAction: 'pan-y' }}
                >
                  <div className="flickity-slider"
                    style={{ left: '0px', transform: 'translateX(-200%)' }}
                  >
                    <div className="w-full shrink-0 grow-0 basis-full"
                      style={{ position: 'absolute', left: '0px', transform: 'translateX(0%)' }}
                      aria-hidden="true"
                    >
                      <blockquote className="max-sm:mb-7">
                        <p>““Not only did it save me time, but it also helped me
                          produce content that was more engaging and
                          effective than what I had been creating on my own.””</p>
                      </blockquote>
                    </div>
                    <div
                      className="w-full shrink-0 grow-0 basis-full"
                      style={{ position: 'absolute', left: '0px', transform: 'translateX(100%)' }}
                      aria-hidden="true"
                    >
                      <blockquote className="max-sm:mb-7">
                        <p>“As a freelance writer, I was looking for a tool that could help me generate ideas and write faster. This AI Text website has done that and more.”</p>
                      </blockquote>
                    </div>
                    <div
                      className="w-full shrink-0 grow-0 basis-full is-selected"
                      style={{ position: 'absolute', left: '0px', transform: 'translateX(200%)' }}
                    >
                      <blockquote className="max-sm:mb-7">
                        <p>“The customer support team has been incredibly helpful whenever I’ve had any questions. I can’t imagine going back to my old content-creation methods!”</p>
                      </blockquote>
                    </div></div></div><button className="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous"><svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow"></path></svg></button><button className="flickity-button flickity-prev-next-button next" type="button" aria-label="Next"><svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button></div>
            </div>
            <div className="flex justify-center gap-20 opacity-80 max-lg:gap-12 max-sm:gap-4">
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_1} alt="Envato" title="Envato"
              />
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_2} alt="Envato" title="Envato" />
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_3} alt="Envato" title="Envato" />
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_4} alt="Envato" title="Envato" />
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_5} alt="Envato" title="Envato" />
            </div>
          </div>
        </div>
      </div>
    </ScrollAwareSection>
  )
}

export default Testimonials