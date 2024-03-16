import { centralImages } from "../images/centralImages";
import { AIGeneratorSVG, AdvanceDashboardSVG, ArticleSVG, BlogConclusionSVG, CustomTemplateSVG, MultiLingualSVG, PaymentGatewaySVG, ProductDescSVG, SupportPlatformSVG, TestimonialSVG } from "../svg/SVG"

const NavItem = [
    { id: 1, itemName: 'Home', link: '/' },
    { id: 2, itemName: 'About', link: '/about' },
    { id: 3, itemName: 'Features', link: '/features' },
    { id: 4, itemName: 'How It Works', link: '/how-works' },
    { id: 5, itemName: 'Pricing', link: '/pricing' },
    { id: 6, itemName: 'FAQ', link: '/faq' }
]
const FutureOfAIData = [
    {
        id: 1,
        svgIcon: AIGeneratorSVG,
        title: 'AI Generator',
        description: 'Generate <strong>text, image, code, chat</strong> and even more with'
    },
    {
        id: 2,
        svgIcon: AdvanceDashboardSVG,
        title: 'Advanced Dashboard',
        description: 'Access to valuable user insight, analytics and activity.'
    },
    {
        id: 3,
        svgIcon: PaymentGatewaySVG,
        title: 'Payment Gateways',
        description: 'Securely process credit card, debit card, or other methods.'
    },
    {
        id: 4,
        svgIcon: MultiLingualSVG,
        title: 'Multi-Lingual',
        description: 'Ability to understand and generate content in different languages'
    },
    {
        id: 5,
        svgIcon: CustomTemplateSVG,
        title: 'Custom Templates',
        description: 'Add unlimited number of custom prompts for your customers.'
    },
    {
        id: 6,
        svgIcon: SupportPlatformSVG,
        title: 'Support Platform',
        description: 'Access and manage your support tickets from your dashboard.'
    }
]
const careerData = [
    {
        id: 1,
        title: 'Digital Agencies',
        color: '#CBA153',
        shadow: '#cba15326',
        className: { text: 'text-[#CBA153]', bg: 'bg-[#CBA153]', shadow: 'hover:shadow-S[#cba15326]' },
    },
    {
        id: 2,
        title: 'Product Designers',
        className: { text: 'text-[#AB7FE6]', bg: 'bg-[#AB7FE6]', shadow: 'hover:shadow-[#ab7fe621]' }
    },
    {
        id: 3,
        title: 'Enterpreneurs',
        className: { text: 'text-[#57CBC6]', bg: 'bg-[#57CBC6]', shadow: 'hover:shadow-[#57cbc624]' }
    },
    {
        id: 4,
        title: 'Copywriters',
        className: { text: 'text-[#7F8FE6]', bg: 'bg-[#7F8FE6]', shadow: 'hover:shadow-[#7f8fe624]' }
    },
    {
        id: 5,
        title: 'Digital Marketers',
        className: { text: 'text-[#6BAC65]', bg: 'bg-[#6BAC65]', shadow: 'hover:shadow-[#6bac6524]' }
    },
    {
        id: 6,
        title: 'Developers',
        className: { text: 'text-[#EF793A]', bg: 'bg-[#EF793A]', shadow: 'hover:shadow-[#ef793a1f]' }
    }

]
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
const futureAITabContentData = [
    {
        id: "ai-text-generator",
        buttonTxt: "AI Text Generator",
        smTitle: "Say goodbye to writer’s block",
        title: "Intelligent Writing Assistant",
        description: "Writer is designed to help you <strong>generate high-quality texts instantly</strong>, without breaking a sweat. With our intuitive interface and powerful features, you can easily edit, export or publish your AI-generated result.",
        imageSrc: centralImages?.textGeneratorImg,
        alt: "Text Generator",
        imageDesc: "Generate, edit, export.",
        backgroundColor: "#F3E5F5",
        poweredBy: "Powered by OpenAI"
    },
    {
        id: "ai-image-generator",
        buttonTxt: "AI Image Generator",
        smTitle: "Unleash your creativity",
        title: "Create eye-catching images and graphics.",
        description: "Generate high quality images for a wide range of applications",
        imageSrc: centralImages?.imgGeneratorImg,
        alt: "Image Generator",
        imageDesc: "Imagine, Generate, Publish.",
        backgroundColor: "#DFE5EB",
        poweredBy: "Powered by Dall-E"
    },
    {
        id: "ai-code-generator",
        buttonTxt: "AI Code Generator",
        smTitle: "The future of development'",
        title: "Generate high quality code in no time.",
        description: "MagicAI is designed to make coding faster, easier, and more efficient than ever before. Whether you’re a seasoned developer or a coding newbie, our tool will help you streamline your coding process and get your projects up and running in no time.",
        imageSrc: centralImages?.codeGeneratorImg,
        alt: "Code Generator",
        imageDesc: "and more efficient than ever before. Whether you’re a seasoned developer or a coding newbie",
        backgroundColor: "#DDE6FF",
        poweredBy: "Fix. Improve. Generate."
    },
    {
        id: "ai-chat-bot",
        buttonTxt: "AI Chat Bot",
        smTitle: "Intuitive / Human like Chatbot ",
        title: "Meet your next virtual assistant.",
        description: "Get instant answers to your questions, no matter the topic. Whether you’re looking to book a reservation, get product recommendations, or just chat about the weather, MagicAI is always ready and willing to help.",
        imageSrc: centralImages?.aiGeneratorImg,
        alt: "AI Chat Generator",
        imageDesc: "Chat, Solve, Repeat.",
        backgroundColor: "#F9DDDF",
        poweredBy: "Powered by OpenAI"
    },
    {
        id: "ai-speech-to-text",
        buttonTxt: "AI Speech To Text",
        smTitle: "Say goodbye to writer’s block",
        title: "Transcribe your speech into text.",
        description: "Accurately transcribe your recordings in just minutes. With our user-friendly interface, you can upload your files and have them transcribed in a matter of clicks.",
        imageSrc: centralImages?.aiSpeechImg,
        alt: "AI Speech Generator",
        imageDesc: "Upload, Analyze, Generate.",
        backgroundColor: "#FFF8EB",
        poweredBy: "Powered by OpenAI"
    }
];
const customTemplateItemListData = [
    {
        id: 'templates-all',
        title: 'All',
    },
    {
        id: 'templates-blog',
        title: 'Blog',
    },
    {
        id: 'templates-ecommerce',
        title: '🎯 Ecommerce',
    },
    {
        id: 'templates-development',
        title: 'Development',
    },
    {
        id: 'templates-advertisement',
        title: 'Advertisement',
    },
    {
        id: 'templates-social-media',
        title: 'Social Media',
    },
    {
        id: 'templates-email',
        title: 'Email',
    },
    {
        id: 'templates-marketing',
        title: '🔥 Marketing',
    },
    {
        id: 'templates-voiceover',
        title: 'Voiceover',
    },
    {
        id: 'templates-youtube',
        title: 'Youtube',
    },
    {
        id: 'templates-rss',
        title: 'RSS',
    }
];
const customTemplateCardData = [
    {
        id: "templates-ecommerce",
        svgIcon: ProductDescSVG,
        title: "Product Description",
        description: "Easily create compelling product descriptions that sell. Increase conversions and boost sales.",
    },
    {
        id: "templates-blog",
        svgIcon: ArticleSVG,
        title: "Article Generator",
        description: "Instantly create unique articles on any topic. Boost engagement, improve SEO, and save time.",
    },
    {
        id: "templates-ecommerce",
        svgIcon: TestimonialSVG,
        title: "Testimonial Review",
        description: "Instantly generate authentic testimonials. Build trust and credibility with genuine reviews."
    },
    {
        id: "templates-blog",
        svgIcon: BlogConclusionSVG,
        title: "Blog Conclusion",
        description: "End your blog posts on a high note. Craft memorable conclusions that leave a lasting impact."
    }
]

export {
    NavItem,
    FutureOfAIData,
    careerData,
    toolsCardData,
    futureAITabContentData,
    customTemplateItemListData,
    customTemplateCardData
}

