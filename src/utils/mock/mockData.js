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
        shadow: '#cba15326'
    },
    {
        id: 2,
        title: 'Product Designers',
        color: '#AB7FE6',
        shadow: '#ab7fe621'
    },
    {
        id: 3,
        title: 'Enterpreneurs',
        color: '#57CBC6',
        shadow: '#57cbc624'
    },
    {
        id: 4,
        title: 'Copywriters',
        color: '#7F8FE6',
        shadow: '#7f8fe624'
    },
    {
        id: 5,
        title: 'Digital Marketers',
        color: '#6BAC65',
        shadow: '#6bac6524'
    },
    {
        id: 6,
        title: 'Developers',
        color: '#EF793A',
        shadow: '#ef793a1f'
    }

]

export { NavItem, FutureOfAIData, careerData }