import { Palette, PenTool, Share2, Bot, Code, Users } from 'lucide-react';

const services = [
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Identity',
    shortDesc: 'Craft a visual identity that speaks volumes before you say a word.',
    description: 'We build brands that stand out in crowded markets. From logo design to complete brand guidelines, we create cohesive visual identities that resonate with your audience and set you apart from competitors.',
    features: ['Logo Design & Brand Guidelines', 'Brand Strategy & Positioning', 'Visual Identity Systems', 'Brand Collateral & Print Design', 'Rebranding & Brand Refresh'],
    color: 'var(--color-primary)',
  },
  {
    id: 'content',
    icon: PenTool,
    title: 'Content Creation',
    shortDesc: 'Scroll-stopping content that builds authority and drives engagement.',
    description: 'Our creative team produces high-quality content that captures attention and drives action. From stunning visuals to compelling copy, we create content that converts followers into customers.',
    features: ['Social Media Content', 'Video Production & Reels', 'Graphic Design & Creatives', 'Copywriting & Scripting', 'Photography & Product Shoots'],
    color: 'var(--color-accent)',
  },
  {
    id: 'social-media',
    icon: Share2,
    title: 'Social Media Marketing',
    shortDesc: 'Turn your social presence into a lead generation machine.',
    description: 'We manage and grow your social media channels with data-driven strategies. Our approach combines creative content, community management, and paid advertising to maximize your reach and ROI.',
    features: ['Strategy & Content Calendar', 'Community Management', 'Paid Ads (Meta, Google)', 'Influencer Collaborations', 'Analytics & Reporting'],
    color: 'var(--color-secondary)',
  },
  {
    id: 'ai-systems',
    icon: Bot,
    title: 'AI Systems & Automation',
    shortDesc: 'Intelligent automation that works 24/7 so you don\'t have to.',
    description: 'We implement AI-powered solutions that automate repetitive tasks, improve customer engagement, and provide actionable insights. From chatbots to predictive analytics, we bring the future to your business.',
    features: ['AI Chatbot Integration', 'Marketing Automation', 'Predictive Analytics', 'CRM Automation', 'Custom AI Solutions'],
    color: 'var(--color-highlight)',
  },
  {
    id: 'web-dev',
    icon: Code,
    title: 'Web Development & Apps',
    shortDesc: 'Premium digital experiences that convert visitors into customers.',
    description: 'We build fast, beautiful, and functional websites and applications. From landing pages to complex web apps, our development team creates digital products that look stunning and perform flawlessly.',
    features: ['Website Design & Development', 'E-commerce Solutions', 'Web Applications', 'Mobile App Development', 'Landing Pages & Funnels'],
    color: 'var(--color-primary)',
  },
  {
    id: 'crm',
    icon: Users,
    title: 'CRM & Growth Solutions',
    shortDesc: 'Streamline your operations and scale with confidence.',
    description: 'We set up and optimize CRM systems that help you manage leads, automate follow-ups, and close more deals. Our growth solutions ensure your business scales efficiently without losing the personal touch.',
    features: ['CRM Setup & Migration', 'Lead Management Systems', 'Sales Pipeline Automation', 'Customer Journey Mapping', 'Growth Strategy Consulting'],
    color: 'var(--color-secondary)',
  },
];

export default services;
