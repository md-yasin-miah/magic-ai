import { centralImages } from "../images/centralImages";
import { AIGeneratorSVG, AdvanceDashboardSVG, CustomTemplateSVG, MultiLingualSVG, PaymentGatewaySVG, SupportPlatformSVG } from "../svg/SVG"

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
        title: "Say goodbye to writer’s block",
        description: "Intelligent Writing Assistant",
        imageSrc: centralImages?.textGeneratorImg,
        alt: "Text Generator",
        backgroundColor: "#F3E5F5",
        poweredBy: "OpenAI"
    }
];

export {
    NavItem,
    FutureOfAIData,
    careerData,
    toolsCardData,
    futureAITabContentData
}

