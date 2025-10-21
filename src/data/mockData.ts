import { Service, Project, UpcomingProject, Milestone } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    icon: 'bi-globe',
    iconImg: "/assets/services/web-development.png",
    serviceName: 'Web Development',
    description: 'Build modern, responsive web applications with cutting-edge technologies and best practices.',
    serviceFeatures: [
      { id: 1, serviceId: 1, feature: 'Frontend Development', description: 'Create visually appealing, responsive, and user-friendly interfaces using technologies like HTML, CSS, JavaScript, and modern frameworks such as React or Vue.' },
      { id: 2, serviceId: 1, feature: 'Backend Development', description: 'Develop robust server-side logic, APIs, and database integrations using frameworks like Laravel, Node.js, or Django.' },
      { id: 3, serviceId: 1, feature: 'Full-Stack Solutions', description: 'Provide complete end-to-end web development covering both frontend and backend functionalities.' },
      { id: 4, serviceId: 1, feature: 'Custom Websites', description: 'Design and build websites tailored to your specific business requirements and goals.' },
      { id: 5, serviceId: 1, feature: 'Web Applications', description: 'Develop dynamic web-based applications for improved user engagement and efficiency.' },
      { id: 6, serviceId: 1, feature: 'CMS Development', description: 'Build or customize content management systems such as WordPress or custom CMS platforms for easy content control.' }
    ],
    status: true
  },
  {
    id: 2,
    icon: 'bi-phone',
    iconImg: "/assets/services/mobile-development.png",
    serviceName: 'Mobile Development',
    description: 'Create powerful mobile applications for iOS and Android with native performance and beautiful UX.',
    serviceFeatures: [
      { id: 7, serviceId: 2, feature: 'iOS App Development', description: 'Develop high-performance iOS applications using Swift and modern Apple frameworks.' },
      { id: 8, serviceId: 2, feature: 'Android App Development', description: 'Create Android applications optimized for performance and compatibility using Kotlin or Java.' },
      { id: 9, serviceId: 2, feature: 'Cross-Platform Apps', description: 'Build apps that run seamlessly on both iOS and Android using frameworks like Flutter or React Native.' },
      { id: 10, serviceId: 2, feature: 'Mobile UI/UX Design', description: 'Design intuitive, engaging, and responsive interfaces tailored for mobile users.' },
      { id: 11, serviceId: 2, feature: 'App Store Deployment', description: 'Manage app submission, compliance, and publishing processes for App Store and Google Play.' },
      { id: 12, serviceId: 2, feature: 'Mobile Backend Integration', description: 'Integrate mobile apps with cloud-based backends, APIs, and databases for dynamic data access.' }
    ],
    status: true
  },
  {
    id: 3,
    icon: 'bi-cpu',
    iconImg: "/assets/services/ai-and-machine-learning.png",
    serviceName: 'AI & Machine Learning',
    description: 'Implement intelligent solutions with AI and machine learning to automate and optimize your business.',
    serviceFeatures: [
      { id: 13, serviceId: 3, feature: 'Predictive Analytics', description: 'Use historical data and algorithms to forecast future trends and outcomes.' },
      { id: 14, serviceId: 3, feature: 'Natural Language Processing', description: 'Develop systems that can understand and process human language for chatbots, translation, or sentiment analysis.' },
      { id: 15, serviceId: 3, feature: 'Computer Vision', description: 'Enable systems to interpret and process visual data for image recognition, object detection, and automation.' },
      { id: 16, serviceId: 3, feature: 'AI Model Development', description: 'Build, train, and fine-tune machine learning models tailored to your data and goals.' },
      { id: 17, serviceId: 3, feature: 'ML Pipeline Integration', description: 'Integrate machine learning workflows into existing systems for real-time predictions and automation.' },
      { id: 18, serviceId: 3, feature: 'Deep Learning Solutions', description: 'Leverage neural networks for complex pattern recognition, speech, and image processing tasks.' }
    ],
    status: true
  },
  {
    id: 4,
    icon: 'bi-shield-check',
    iconImg: "/assets/services/blockchain.png",
    serviceName: 'Blockchain',
    description: 'Develop secure, decentralized applications and smart contracts on various blockchain platforms.',
    serviceFeatures: [
      { id: 19, serviceId: 4, feature: 'Smart Contract Development', description: 'Create self-executing contracts on blockchain platforms like Ethereum and Solana.' },
      { id: 20, serviceId: 4, feature: 'DApp Development', description: 'Develop decentralized applications with blockchain integration for transparency and security.' },
      { id: 21, serviceId: 4, feature: 'NFT Platforms', description: 'Build NFT marketplaces and minting platforms for digital assets.' },
      { id: 22, serviceId: 4, feature: 'Blockchain Integration', description: 'Incorporate blockchain features into existing business systems for enhanced security.' },
      { id: 23, serviceId: 4, feature: 'Cryptocurrency Solutions', description: 'Develop and integrate cryptocurrency payment and wallet systems.' },
      { id: 24, serviceId: 4, feature: 'Web3 Applications', description: 'Build next-generation decentralized web applications using Web3 technologies.' }
    ],
    status: true
  },
  {
    id: 5,
    icon: 'bi-cloud-arrow-up',
    iconImg: "/assets/services/cloud-and-devops.png",
    serviceName: 'Cloud & DevOps',
    description: 'Build scalable cloud infrastructure with automated CI/CD pipelines for reliable deployments.',
    serviceFeatures: [
      { id: 25, serviceId: 5, feature: 'Cloud Architecture', description: 'Design and implement cloud-based infrastructure on platforms like AWS, Azure, or Google Cloud.' },
      { id: 26, serviceId: 5, feature: 'CI/CD Pipelines', description: 'Automate build, testing, and deployment processes for faster and more reliable delivery.' },
      { id: 27, serviceId: 5, feature: 'Container Orchestration', description: 'Deploy and manage containers efficiently using Docker and Kubernetes.' },
      { id: 28, serviceId: 5, feature: 'Infrastructure as Code', description: 'Automate infrastructure setup and management using tools like Terraform or Ansible.' },
      { id: 29, serviceId: 5, feature: 'Cloud Migration', description: 'Migrate existing systems and applications to the cloud with minimal downtime.' },
      { id: 30, serviceId: 5, feature: 'Monitoring & Logging', description: 'Set up monitoring systems to track application performance and detect issues early.' }
    ],
    status: true
  },
  {
    id: 6,
    icon: 'bi-palette',
    iconImg: "/assets/services/ui-ux-design.png",
    serviceName: 'UI/UX Design',
    description: 'Design beautiful, intuitive interfaces that delight users and drive engagement.',
    serviceFeatures: [
      { id: 31, serviceId: 6, feature: 'User Interface Design', description: 'Design visually consistent and aesthetically pleasing interfaces for web and mobile applications.' },
      { id: 32, serviceId: 6, feature: 'User Experience Research', description: 'Conduct research and usability studies to understand user needs and improve experiences.' },
      { id: 33, serviceId: 6, feature: 'Prototyping & Wireframing', description: 'Create interactive prototypes and wireframes to visualize design ideas before development.' },
      { id: 34, serviceId: 6, feature: 'Design Systems', description: 'Build scalable and consistent design systems with reusable UI components.' },
      { id: 35, serviceId: 6, feature: 'Responsive Design', description: 'Ensure designs adapt seamlessly across different devices and screen sizes.' },
      { id: 36, serviceId: 6, feature: 'Usability Testing', description: 'Validate designs through user testing to identify and fix usability issues.' }
    ],
    status: true
  },
  {
    id: 7,
    icon: 'bi-cart',
    iconImg: "/assets/services/e-commerce.png",
    serviceName: 'E-commerce',
    description: 'Build powerful online stores with seamless shopping experiences and secure payment processing.',
    serviceFeatures: [
      { id: 37, serviceId: 7, feature: 'Online Store Development', description: 'Develop full-featured e-commerce platforms with product catalogs and shopping carts.' },
      { id: 38, serviceId: 7, feature: 'Payment Gateway Integration', description: 'Integrate secure payment systems such as Stripe, PayPal, and others.' },
      { id: 39, serviceId: 7, feature: 'Inventory Management', description: 'Implement systems to track and manage product stock and availability.' },
      { id: 40, serviceId: 7, feature: 'Shopping Cart Solutions', description: 'Provide intuitive and secure shopping cart experiences with real-time updates.' },
      { id: 41, serviceId: 7, feature: 'Order Management Systems', description: 'Build back-office tools to manage customer orders, shipping, and returns.' },
      { id: 42, serviceId: 7, feature: 'Multi-vendor Platforms', description: 'Develop marketplaces that support multiple sellers and product listings.' }
    ],
    status: true
  },
  {
    id: 8,
    icon: 'bi-diagram-3',
    iconImg: "/assets/services/system-integration.png",
    serviceName: 'System Integration',
    description: 'Connect and integrate disparate systems for seamless data flow and business process automation.',
    serviceFeatures: [
      { id: 43, serviceId: 8, feature: 'API Development', description: 'Create RESTful or GraphQL APIs to connect different systems and applications.' },
      { id: 44, serviceId: 8, feature: 'Third-party Integration', description: 'Integrate external tools and services like CRMs, payment gateways, or analytics platforms.' },
      { id: 45, serviceId: 8, feature: 'Data Migration', description: 'Safely transfer data between systems or platforms with integrity and security.' },
      { id: 46, serviceId: 8, feature: 'Legacy System Modernization', description: 'Upgrade and modernize outdated systems for improved performance and compatibility.' },
      { id: 47, serviceId: 8, feature: 'Microservices Architecture', description: 'Implement microservices to improve scalability and independent service management.' },
      { id: 48, serviceId: 8, feature: 'Enterprise Integration', description: 'Unify enterprise applications for better communication and workflow automation.' }
    ],
    status: true
  },
  {
    id: 9,
    icon: 'bi-headset',
    iconImg: "/assets/services/it-consulting.png",
    serviceName: 'IT Consulting',
    description: 'Get expert guidance on technology strategy, architecture decisions, and digital transformation.',
    serviceFeatures: [
      { id: 49, serviceId: 9, feature: 'Technology Strategy', description: 'Develop IT strategies aligned with business objectives for long-term success.' },
      { id: 50, serviceId: 9, feature: 'Architecture Review', description: 'Assess and optimize software and infrastructure architectures for scalability and efficiency.' },
      { id: 51, serviceId: 9, feature: 'Digital Transformation', description: 'Help businesses transition to modern digital solutions and workflows.' },
      { id: 52, serviceId: 9, feature: 'Performance Optimization', description: 'Improve system performance through analysis, tuning, and best practices.' },
      { id: 53, serviceId: 9, feature: 'Security Audits', description: 'Evaluate security vulnerabilities and recommend protection strategies.' },
      { id: 54, serviceId: 9, feature: 'Technical Training', description: 'Provide technical training and knowledge transfer for teams and individuals.' }
    ],
    status: true
  },
  {
    id: 10,
    icon: 'bi-bar-chart',
    iconImg: "/assets/services/data-analytics.png",
    serviceName: 'Data Analytics',
    description: 'Transform raw data into actionable insights to drive smarter business decisions.',
    serviceFeatures: [
      { id: 55, serviceId: 10, feature: 'Data Visualization', description: 'Present data using clear and insightful visual dashboards and charts.' },
      { id: 56, serviceId: 10, feature: 'Predictive Analytics', description: 'Use data models to anticipate trends and business outcomes.' },
      { id: 57, serviceId: 10, feature: 'Data Warehousing', description: 'Set up scalable data storage systems for analysis and reporting.' },
      { id: 58, serviceId: 10, feature: 'Business Intelligence Reporting', description: 'Generate detailed BI reports for better strategic decision-making.' },
      { id: 59, serviceId: 10, feature: 'Data Mining', description: 'Extract meaningful patterns and correlations from large datasets.' },
      { id: 60, serviceId: 10, feature: 'Big Data Analytics', description: 'Process and analyze massive data sets for enterprise-grade insights.' }
    ],
    status: true
  },
  {
    id: 11,
    icon: 'bi-check-circle',
    iconImg: "/assets/services/quality-assurance.png",
    serviceName: 'Quality Assurance',
    description: 'Ensure software reliability and performance with rigorous testing and QA practices.',
    serviceFeatures: [
      { id: 61, serviceId: 11, feature: 'Manual Testing', description: 'Perform detailed manual testing to identify bugs and usability issues.' },
      { id: 62, serviceId: 11, feature: 'Automated Testing', description: 'Implement automation frameworks for consistent and efficient testing.' },
      { id: 63, serviceId: 11, feature: 'Performance Testing', description: 'Test application speed, scalability, and stability under various conditions.' },
      { id: 64, serviceId: 11, feature: 'Regression Testing', description: 'Ensure new updates do not affect existing system functionalities.' },
      { id: 65, serviceId: 11, feature: 'Test Planning & Strategy', description: 'Design structured testing plans aligned with project goals and requirements.' },
      { id: 66, serviceId: 11, feature: 'Bug Tracking & Reporting', description: 'Monitor, document, and report software defects using QA tools.' }
    ],
    status: true
  },
  {
    id: 12,
    icon: 'bi-shield-lock',
    iconImg: "/assets/services/cyber-security.png",
    serviceName: 'Cyber Security',
    description: 'Protect your business from digital threats with advanced security measures and monitoring.',
    serviceFeatures: [
      { id: 67, serviceId: 12, feature: 'Network Security', description: 'Implement firewalls, intrusion detection, and network protection systems.' },
      { id: 68, serviceId: 12, feature: 'Vulnerability Assessment', description: 'Identify and assess potential vulnerabilities across IT systems.' },
      { id: 69, serviceId: 12, feature: 'Penetration Testing', description: 'Simulate cyberattacks to identify security weaknesses and fix them.' },
      { id: 70, serviceId: 12, feature: 'Incident Response', description: 'Develop and implement strategies to detect, respond, and recover from cyber incidents.' },
      { id: 71, serviceId: 12, feature: 'Threat Intelligence', description: 'Monitor, analyze, and anticipate emerging cybersecurity threats.' },
      { id: 72, serviceId: 12, feature: 'Security Awareness Training', description: 'Train staff to recognize and respond to common cyber threats.' }
    ],
    status: true
  }
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Singai Restaurant",
    image: "/assets/projects/singai-restaurant/cover.webp",
    companyLogo: "/assets/projects/singai-restaurant/logo.png",
    projectType: "Restaurant Management System",
    projectDescriptions: [
      {
        id: 1,
        projectId: 1,
        description:
          "Singai Restaurant is one of the most popular and modern dining destinations in Jaffna, Sri Lanka, known for its authentic Sri Lankan and South Indian cuisine. It offers a wide range of vegetarian and non-vegetarian dishes served in a vibrant and welcoming atmosphere.",
      },
      {
        id: 2,
        projectId: 1,
        description:
          "To enhance efficiency and customer satisfaction, we developed a comprehensive Restaurant Management System that digitizes and automates core restaurant operations — from order management and table reservations to billing and real-time reporting.",
      },
      {
        id: 3,
        projectId: 1,
        description:
          "The system supports multiple user roles, including admin, cashier, waiter, and chef, each with customized access levels to ensure smooth coordination and transparency across departments. It helps the staff manage daily workflows effortlessly and reduces manual errors.",
      },
      {
        id: 4,
        projectId: 1,
        description:
          "Key features include detailed menu categorization (main/sub courses), dynamic ingredient and product stock tracking, order history and analytics, real-time kitchen updates, and customizable reporting tools that help the management make data-driven decisions.",
      },
      {
        id: 5,
        projectId: 1,
        description:
          "With its intuitive user interface and responsive design, this system provides a complete digital backbone for Singai Restaurant, improving speed, accuracy, and overall customer experience.",
      },
    ],
    hasPreview: false,
    previewLink: '',
    projectSnapShots: [
      { id: 1, projectId: 1, imagePath: "/assets/projects/singai-restaurant/snap-1.png" },
      { id: 2, projectId: 1, imagePath: "/assets/projects/singai-restaurant/snap-2.png" },
      { id: 3, projectId: 1, imagePath: "/assets/projects/singai-restaurant/snap-3.png" },
      { id: 4, projectId: 1, imagePath: "/assets/projects/singai-restaurant/snap-4.png" },
      { id: 5, projectId: 1, imagePath: "/assets/projects/singai-restaurant/snap-5.png" },
    ],
    status: true
  },
  {
    id: 2,
    name: "Kover Drive",
    image: "/assets/projects/kover-drive/cover.webp",
    companyLogo: "/assets/projects/kover-drive/logo.webp",
    projectType: "Sports Lane Management System",
    projectDescriptions: [
      {
        id: 1,
        projectId: 2,
        description:
          "Kover Drive Sports is London’s premier indoor cricket and baseball facility designed to inspire athletes, promote fitness, and foster a strong sports community. With state-of-the-art lanes and advanced booking technology, it provides an immersive environment for both amateurs and professionals.",
      },
      {
        id: 2,
        projectId: 2,
        description:
          "To enhance convenience and streamline operations, we developed a dynamic Sports Lane Management System that allows players to easily browse availability, book lanes online, and make secure payments directly through the platform.",
      },
      {
        id: 3,
        projectId: 2,
        description:
          "The system offers a personalized player dashboard where users can manage bookings, track upcoming sessions, view past activity, and receive real-time updates — creating a smooth and transparent user experience.",
      },
      {
        id: 4,
        projectId: 2,
        description:
          "For administrators, the platform provides a powerful management portal to oversee lane schedules, update promotions, manage memberships, and access detailed analytics and reports. It ensures efficient daily operations and helps maintain a high standard of customer satisfaction.",
      },
      {
        id: 5,
        projectId: 2,
        description:
          "This web solution integrates modern UI/UX design with a responsive interface and secure backend functionality, making it an all-in-one platform for digital sports lane booking and management.",
      },
    ],
    hasPreview: true,
    previewLink: 'https://koverdrivesports.ca/',
    projectSnapShots: [
      { id: 7, projectId: 2, imagePath: "/assets/projects/kover-drive/snap-1.webp" },
      { id: 8, projectId: 2, imagePath: "/assets/projects/kover-drive/snap-2.webp" },
      { id: 9, projectId: 2, imagePath: "/assets/projects/kover-drive/snap-3.webp" },
      { id: 10, projectId: 2, imagePath: "/assets/projects/kover-drive/snap-4.webp" },
      { id: 11, projectId: 2, imagePath: "/assets/projects/kover-drive/snap-5.png" },
      { id: 12, projectId: 2, imagePath: "/assets/projects/kover-drive/snap-6.png" },
      { id: 13, projectId: 2, imagePath: "/assets/projects/kover-drive/snap-7.webp" }
    ],
    status: true
  },
  {
    id: 3,
    name: "The Parking Deals",
    image: "/assets/projects/parking-deals/cover.webp",
    companyLogo: "/assets/projects/parking-deals/logo.png",
    projectType: "Airport Parking Management System",
    projectDescriptions: [
      {
        id: 1,
        projectId: 3,
        description:
          "The Parking Deals is an advanced airport parking management platform designed to simplify how travelers find, compare, and reserve parking across multiple airport locations in the UK. It provides users with a seamless online experience for booking secure and affordable parking solutions.",
      },
      {
        id: 2,
        projectId: 3,
        description:
          "The platform connects customers with verified parking vendors offering diverse services such as valet parking, meet-and-greet options, and shuttle transfers — ensuring flexibility and convenience for every traveler’s need.",
      },
      {
        id: 3,
        projectId: 3,
        description:
          "Customers can create accounts to manage their bookings through a personalized dashboard, where they can view upcoming reservations, edit personal details, download invoices, and access real-time updates about their parking schedules.",
      },
      {
        id: 4,
        projectId: 3,
        description:
          "The admin panel provides a robust backend for managing customers, vendors, bookings, and promotional offers. It also allows administrators to oversee airport details, pricing structures, and performance analytics to optimize daily operations.",
      },
      {
        id: 5,
        projectId: 3,
        description:
          "Built with a strong focus on security and scalability, the system restricts backend access to authorized admins and moderators only. With role-based permissions and secure data handling, it ensures business integrity and efficient management of high-volume transactions.",
      },
      {
        id: 6,
        projectId: 3,
        description:
          "The Parking Deals delivers a complete digital ecosystem for airport parking — combining user convenience, vendor management, and operational control into a single, powerful web application.",
      },
    ],
    hasPreview: true,
    previewLink: 'https://www.theparkingdeals.co.uk/',
    projectSnapShots: [
      { id: 14, projectId: 3, imagePath: "/assets/projects/parking-deals/snap-1.png" },
      { id: 15, projectId: 3, imagePath: "/assets/projects/parking-deals/snap-2.png" },
      { id: 16, projectId: 3, imagePath: "/assets/projects/parking-deals/snap-3.png" },
      { id: 17, projectId: 3, imagePath: "/assets/projects/parking-deals/snap-4.png" },
      { id: 18, projectId: 3, imagePath: "/assets/projects/parking-deals/snap-5.png" },
      { id: 19, projectId: 3, imagePath: "/assets/projects/parking-deals/snap-6.png" },
      { id: 20, projectId: 3, imagePath: "/assets/projects/parking-deals/snap-7.png" }
    ],
    status: true
  }
];


export const upcomingProjects: UpcomingProject[] = [
  {
    id: 1,
    projectName: 'Recruitment & Job Portal',
    image: '/assets/upcoming-projects/recruitment-job-portal-system.webp',
    description: 'A comprehensive web platform connecting employers and job seekers through smart matching, resume management, and real-time hiring tools. Mobile app version planned for future expansion.',
    status: true
  },
  {
    id: 2,
    projectName: 'Clinic Management System',
    image: '/assets/upcoming-projects/clinic-management-system.webp',
    description: 'A modern web system for managing appointments, patient records, billing, and doctor e-channeling with secure access. Mobile application integration is planned for future convenience.',
    status: true
  },
  {
    id: 3,
    projectName: 'Point of Sale System',
    image: '/assets/upcoming-projects/pos-system.webp',
    description: 'A powerful web-based POS system for retail stores and supermarkets, enabling smooth billing, inventory management, and reporting. Mobile application support is planned for future updates.',
    status: true
  }
];

export const milestones: Milestone[] = [
  {
    id: 1,
    label: 'Founded in 2024',
    value: 0,
    suffix: '',
    description: 'AuraSyntax was born from a vision to craft beautiful, high-performance digital solutions.',
    icon: 'bi-rocket-takeoff-fill'
  },
  {
    id: 2,
    label: 'Growing Team of Innovators',
    value: 0,
    suffix: '',
    description: 'Expanded to a talented team of designers, developers, and thinkers committed to building meaningful software.',
    icon: 'bi-people-fill'
  },
  {
    id: 3,
    label: 'Launched Our First Product',
    value: 0,
    suffix: '',
    description: 'Successfully deployed our first real-world project, setting the foundation for scalable and reliable software delivery.',
    icon: 'bi-box-seam-fill'
  },
  {
    id: 4,
    label: 'Collaborated with Early Clients',
    value: 0,
    suffix: '',
    description: 'Partnered with forward-thinking businesses to bring their ideas to life through technology.',
    icon: 'bi-briefcase-fill'
  },
  {
    id: 5,
    label: 'Adopted Modern Tech Stack',
    value: 0,
    suffix: '',
    description: 'Embraced React, TypeScript, and GSAP to deliver cutting-edge digital experiences.',
    icon: 'bi-code-slash'
  },
  {
    id: 6,
    label: 'Recognized for Design Excellence',
    value: 0,
    suffix: '',
    description: 'Appreciated for modern UI/UX approaches blending creativity and performance.',
    icon: 'bi-award-fill'
  },
  {
    id: 7,
    label: 'Expanding Our Horizons',
    value: 0,
    suffix: '',
    description: 'Working on upcoming projects and collaborations that redefine what is possible in the digital space.',
    icon: 'bi-graph-up-arrow'
  }
];
