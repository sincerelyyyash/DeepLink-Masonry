export const breakpoints = {
  320: 1,
  480: 2,
  768: 3,
  1024: 4,
};

export interface ItemDetail {
  role?: string;
  company?: string;
  duration?: string;
  achievements?: string[];
}
export interface Item {
  id: number;
  type: 'image' | 'text' | 'link' | 'button' | 'profile' | 'project' | 'experience';
  src?: string;
  alt?: string;
  content?: string;
  href?: string;
  onClick?: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  details?: ItemDetail[];
}
export const items: Item[] = [
  {
    id: 1,
    type: 'profile',
    src: '/assets/bp.jpg',
    alt: 'Feather Xu',
    title: 'Feather Xu',
    subtitle: 'Product Designer',
    description: 'Feather is a product design freelancer that brings changes. She\'s driven by logical thinking and grounded by real world challenges.'
  },
  {
    id: 2,
    type: 'image',
    src: '/assets/map.png',
    alt: 'Map'
  },
  // {
  //   id: 3,
  //   type: 'project',
  //   title: 'MarkO',
  //   description: 'Collaboration system for footwear designers and engineers',
  //   src: '/assets/shoe.jpg',
  //   alt: 'MarkO Project'
  // },
  // {
  //   id: 4,
  //   type: 'project',
  //   title: 'Independent Commute for Visually Impaired',
  //   src: '/assets/bp.jpeg',
  //   alt: 'Visually Impaired Project'
  // },
  {
    id: 5,
    type: 'experience',
    title: 'Experience',
    details: [
      {
        role: 'UX Design Intern',
        company: 'TikTok',
        duration: 'Jan 2021 - Dec 2021',
        achievements: [
          'Designed and launched 7 features to improve TikTok Shop Merchant Platform\'s verification process efficiency by 35 %',
          'Led the design and launch of TikTok Shop\'s Open Platform landing website, resulting in a 150 % increase in click rate'
        ]
      },
      {
        role: 'Product Designer',
        company: 'MarkO',
        duration: 'May 2023 - Present',
        achievements: [
          'Capitalized on AI technology to identify 3 key design opportunities in music creation flow, through collaboration with stakeholders and the founder.',
          'Led MCG user flow redesign for mobile experience, incorporating 6 usability tests to inform iterative prototype development.'
        ]
      },
      {
        role: 'AI/ML Researcher',
        company: 'Innovative Tech Labs',
        duration: 'Jan 2020 - Present',
        achievements: [
          'Developed and deployed a machine learning model that improved predictive accuracy for customer behavior by 25%.',
          'Conducted research on natural language processing techniques, resulting in a publication in a top-tier AI journal.',
          'Led a project to implement AI-driven automation for data analysis, reducing manual processing time by 50%.',
          'Collaborated with cross-functional teams to integrate machine learning models into existing products, enhancing feature performance.'
        ]
      }
    ]
  },
  // {
  //   id: 7,
  //   type: 'project',
  //   title: 'AI-Powered Chatbot',
  //   description: 'A conversational AI chatbot that can assist with customer support and FAQs.',
  //   src: '/assets/ai.jpg',
  //   alt: 'AI-Powered Chatbot'
  // },
  {
    id: 8,
    type: 'image',
    src: '/assets/stack.jpg',
    alt: 'Tech Stack'
  },
  {
    id: 10,
    type: 'project',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with support for online payments, user accounts, and product management.',
    src: '/assets/ecommerce.jpg',
    alt: 'E-Commerce Platform'
  },
  {
    id: 11,
    type: 'experience',
    title: 'Freelance Web Developer',
    details: [
      {
        role: 'Freelance Web Developer',
        company: 'Self-Employed',
        duration: 'Jan 2019 - Present',
        achievements: [
          'Developed over 20 custom websites for various clients, improving their online presence and user engagement.',
          'Implemented SEO best practices that resulted in a 40% increase in organic traffic for client websites.'
        ]
      }
    ]
  },

];

