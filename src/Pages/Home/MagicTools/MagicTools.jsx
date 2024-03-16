import ScrollAwareSection from "../../../components/ScrollAwareSection"
import { centralImages } from "../../../utils/images/centralImages"

const MagicTools = () => {
  const toolsCardData = [
    {
      id: 1,
      title: 'Advanced Dashboard',
      description: 'Track a wide range of data points, including user traffic and sales.',
      img: centralImages.tools_1
    },
    {
      id: 2,
      title: 'Payment Gateways',
      description: 'Securely process credit card or other electronic payment methods.',
      img: centralImages.tools_2
    },
    {
      id: 3,
      title: 'Multilingual',
      description: 'Ability to understand and generate content in different languages.',
      img: centralImages.tools_3
    },
    {
      id: 4,
      title: 'Affiliate System',
      description: 'Ability to invite friends, and earn commission from their first purchase.',
      img: centralImages.tools_4
    },
    {
      id: 5,
      title: 'Easy Export',
      description: 'Export generated content as plain text, PDF, Word or HTML easily.',
      img: centralImages.tools_5
    },
    {
      id: 6,
      title: 'Support Platform',
      description: 'Access and mage support tickets from your dashboard.',
      img: centralImages.tools_6
    }
  ]
  return (
    <ScrollAwareSection className='py-10'>
      <div className="container">
        <div className="rounded-[50px] border p-10 max-sm:px-6 max-sm:py-16">
          <header className="mx-auto text-center w-2/5 mb-14 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full">
            <h2 className="mb-[0.45em]">Magic Tools.</h2>
            <p className="text-[18px] leading-[1.444em]">MagicAI has all the tools you need to create and manage your SaaS platform.</p>
          </header>
          <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {
              toolsCardData.map(tool =>
                <div key={tool.id} className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
                  <figure className="group-hover:scale-105 relative z-0 inline-block transition-all duration-300">
                    <img className="-mx-8 max-w-[calc(100%+4rem)]" src={tool.img} width="696" height="426" />
                  </figure>
                  <div className="relative shrink">
                    <h4 className="mb-3 font-bold">{tool.title}</h4>
                    <p className="text-[14px]">{tool.description}</p>
                  </div>
                </div>
              )
            }
            {/* <div className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
              <figure className="group-hover:scale-105 relative z-0 inline-block transition-all duration-300">
                <img className="-mx-8 max-w-[calc(100%+4rem)]" src="/upload/images/frontent/tools/Payments100.jpg" alt="Payment Gateways" width="696" height="426" />
              </figure>
              <div className="relative shrink">
                <h4 className="mb-3 font-bold">
                  Payment Gateways
                </h4>
                <p className="text-[14px]">Securely process credit card or other electronic payment methods.</p>
              </div>
            </div>
            <div className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
              <figure className="group-hover:scale-105 relative z-0 inline-block transition-all duration-300">
                <img className="-mx-8 max-w-[calc(100%+4rem)]" src="/upload/images/frontent/tools/NZBW-multilingual.png" alt="Multilingual" width="696" height="426" />
              </figure>
              <div className="relative shrink">
                <h4 className="mb-3 font-bold">
                  Multilingual
                </h4>
                <p className="text-[14px]">Ability to understand and generate content in different languages.</p>
              </div>
            </div>
            <div className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
              <figure className="group-hover:scale-105 relative z-0 inline-block transition-all duration-300">
                <img className="-mx-8 max-w-[calc(100%+4rem)]" src="/upload/images/frontent/tools/RAhq-affiliate-system.png" alt="Affiliate System" width="696" height="426" />
              </figure>
              <div className="relative shrink">
                <h4 className="mb-3 font-bold">
                  Affiliate System
                </h4>
                <p className="text-[14px]">Ability to invite friends, and earn commission from their first purchase.</p>
              </div>
            </div>
            <div className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
              <figure className="group-hover:scale-105 relative z-0 inline-block transition-all duration-300">
                <img className="-mx-8 max-w-[calc(100%+4rem)]" src="/upload/images/frontent/tools/mPWB-easy-export.png" alt="Easy Export" width="696" height="426" />
              </figure>
              <div className="relative shrink">
                <h4 className="mb-3 font-bold">
                  Easy Export
                </h4>
                <p className="text-[14px]">Export generated content as plain text, PDF, Word or HTML easily.</p>
              </div>
            </div>
            <div className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
              <figure className="group-hover:scale-105 relative z-0 inline-block transition-all duration-300">
                <img className="-mx-8 max-w-[calc(100%+4rem)]" src="/upload/images/frontent/tools/rIwa-support-platform.png" alt="Support Platform" width="696" height="426" />
              </figure>
              <div className="relative shrink">
                <h4 className="mb-3 font-bold">
                  Support Platform
                </h4>
                <p className="text-[14px]">Access and mage support tickets from your dashboard.</p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </ScrollAwareSection>
  )
}

export default MagicTools