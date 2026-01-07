export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  tagColors: string[];
  badge?: string;
  badgeColor?: string;
  liveLink: string;
  codeLink: string;
  features: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  challenges: string[];
  solutions: string[];
  timeline: string;
  role: string;
  teamSize: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'homenest',
    title: 'HomeNest — Interactive Web Interface',
    shortDescription: 'A comprehensive dashboard for tracking sales and inventory with real-time data visualization. Optimized for large datasets.',
    fullDescription: 'HomeNest is a sophisticated web application designed to revolutionize property management and real estate operations. Built with modern React architecture, it provides real-time analytics, inventory tracking, and comprehensive dashboard functionality for property managers and real estate professionals.',
    image: "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=552&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=552&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1000&auto=format&fit=crop"
    ],
    tags: ['React', 'Node.js', 'Tailwind'],
    tagColors: ['bg-primary/10 text-primary', 'bg-purple-500/10 text-purple-500', 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'],
    badge: 'Case Study',
    badgeColor: 'bg-black/60',
    liveLink: 'https://home-nest-f0c86.web.app',
    codeLink: 'https://github.com/kantho202/home-nest-client.git',
    features: [
      'Real-time property analytics and reporting',
      'Interactive dashboard with customizable widgets',
      'Advanced search and filtering capabilities',
      'Responsive design for all devices',
      'User authentication and role-based access',
      'Property listing management system',
      'Integrated messaging and notification system',
      'Export functionality for reports and data'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      backend: ['Node.js', 'Express.js', 'JWT Authentication'],
      database: ['MongoDB', 'Mongoose'],
      tools: ['Vite', 'ESLint', 'Prettier', 'Git', 'Firebase Hosting']
    },
    challenges: [
      'Handling large datasets with optimal performance',
      'Creating responsive layouts for complex dashboard components',
      'Implementing real-time data synchronization',
      'Ensuring cross-browser compatibility'
    ],
    solutions: [
      'Implemented virtual scrolling and pagination for large data sets',
      'Used CSS Grid and Flexbox for responsive dashboard layouts',
      'Integrated WebSocket connections for real-time updates',
      'Extensive testing across multiple browsers and devices'
    ],
    timeline: '3 months',
    role: 'Full-Stack Developer',
    teamSize: 'Solo Project'
  },
  {
    id: 2,
    slug: 'ticket-booking',
    title: 'Online Ticket Booking System',
    shortDescription: 'Mobile-first platform for seamless ticket booking with real-time availability and secure payment processing.',
    fullDescription: 'A comprehensive online ticket booking platform that revolutionizes the way users book tickets for events, transportation, and entertainment. Built with a mobile-first approach, it features real-time seat selection, secure payment processing, and an intuitive user interface that makes booking tickets effortless.',
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
    ],
    tags: ['Node.js', 'Firebase', 'React'],
    tagColors: ['bg-green-500/10 text-green-600 dark:text-green-400', 'bg-orange-500/10 text-orange-500', 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'],
    badge: 'Live App',
    badgeColor: 'bg-green-500/80',
    liveLink: 'https://online-ticket-booking-4cc7f.web.app',
    codeLink: 'https://github.com/kantho202/online-ticket-booking.git',
    features: [
      'Real-time seat selection and availability',
      'Secure payment gateway integration',
      'Mobile-responsive design',
      'User account management and booking history',
      'Email confirmation and ticket generation',
      'Admin panel for event management',
      'Search and filter functionality',
      'Social media integration for sharing'
    ],
    technologies: {
      frontend: ['React', 'JavaScript', 'CSS3', 'Bootstrap'],
      backend: ['Node.js', 'Express.js', 'Firebase Functions'],
      database: ['Firebase Firestore', 'Firebase Storage'],
      tools: ['Firebase Hosting', 'Firebase Auth', 'Stripe API', 'Nodemailer']
    },
    challenges: [
      'Implementing real-time seat availability updates',
      'Ensuring secure payment processing',
      'Managing concurrent booking requests',
      'Creating an intuitive mobile interface'
    ],
    solutions: [
      'Used Firebase Firestore real-time listeners for seat updates',
      'Integrated Stripe for secure payment processing',
      'Implemented optimistic locking for concurrent bookings',
      'Designed mobile-first responsive interface with touch-friendly controls'
    ],
    timeline: '4 months',
    role: 'Full-Stack Developer',
    teamSize: '2 developers'
  },
  {
    id: 3,
    slug: 'gaming-experience',
    title: 'Crafting Epic Gaming Experiences',
    shortDescription: 'High-conversion landing page with complex scroll-triggered animations and interactive gaming elements.',
    fullDescription: 'An immersive gaming experience platform that showcases cutting-edge web technologies to create engaging interactive experiences. Features complex scroll-triggered animations, 3D elements, and gamification features that demonstrate the potential of modern web development in the gaming industry.',
    image: "https://images.unsplash.com/photo-1566748861872-572ec72b5a3e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1566748861872-572ec72b5a3e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1000&auto=format&fit=crop"
    ],
    tags: ['JavaScript', 'React', 'Tailwind'],
    tagColors: ['bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white', 'bg-green-500/10 text-green-500', 'bg-blue-500/10 text-blue-500'],
    liveLink: 'https://hero-f2g.pages.dev',
    codeLink: 'https://github.com/kantho202/Assignment-08.git',
    features: [
      'Complex scroll-triggered animations',
      'Interactive 3D elements and transitions',
      'Gamification features and achievements',
      'High-performance rendering optimizations',
      'Responsive design for all devices',
      'Progressive Web App capabilities',
      'Social sharing and leaderboards',
      'Real-time multiplayer features'
    ],
    technologies: {
      frontend: ['React', 'JavaScript', 'Tailwind CSS', 'Three.js', 'GSAP'],
      backend: ['Node.js', 'Socket.io', 'Express.js'],
      database: ['MongoDB', 'Redis'],
      tools: ['Webpack', 'Babel', 'ESLint', 'Cloudflare Pages']
    },
    challenges: [
      'Optimizing performance for complex animations',
      'Creating smooth scroll-triggered interactions',
      'Implementing real-time multiplayer functionality',
      'Ensuring compatibility across different devices'
    ],
    solutions: [
      'Used requestAnimationFrame and GPU acceleration for smooth animations',
      'Implemented Intersection Observer API for efficient scroll triggers',
      'Utilized WebSocket connections for real-time communication',
      'Extensive testing and optimization for mobile devices'
    ],
    timeline: '2 months',
    role: 'Frontend Developer',
    teamSize: 'Solo Project'
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}