# AuraSyntax - Company Website

A modern, fully responsive single-page application (SPA) for AuraSyntax software company built with React, TypeScript, and Vite.

## Features

- **Modern Design**: Dark gradient theme with teal and blue accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Rich Animations**: GSAP, Framer Motion, and reveal animations
- **Interactive Components**: Swiper sliders, parallax tilt effects, and smooth scrolling
- **Comprehensive Pages**:
  - Home with Hero, About, Services, Milestones, Projects, Upcoming Projects, and Contact sections
  - Service detail pages with feature listings
  - Project detail pages with image galleries
  - Terms & Conditions and Privacy Policy pages

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **UI Libraries**:
  - PrimeReact
  - Bootstrap 5
  - Bootstrap Icons
- **Animations**:
  - GSAP
  - Framer Motion
  - react-awesome-reveal
  - react-parallax-tilt
  - Swiper
- **Styling**: Custom CSS (CSS Modules)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

### Development

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

The application will be available at \`http://localhost:5173\`

### Build

Build for production:

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Milestones/
│   ├── Projects/
│   ├── UpcomingProjects/
│   ├── Contact/
│   ├── Footer/
│   └── NotifyModal/
├── pages/              # Page components
│   ├── Home.tsx
│   ├── ServiceDetail.tsx
│   ├── ProjectDetail.tsx
│   ├── Terms.tsx
│   └── Privacy.tsx
├── data/               # Mock data
│   └── mockData.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── styles/             # Global styles
│   └── global.css
└── App.tsx            # Main app component
\`\`\`

## Mock Data

The application uses mock data defined in \`src/data/mockData.ts\`. You can replace this with API calls to your backend:

- **Services**: List of services with features
- **Projects**: Portfolio projects with images and descriptions
- **Upcoming Projects**: Projects in development
- **Milestones**: Company achievements and statistics

## Customization

### Colors

Update the CSS variables in \`src/styles/global.css\`:

\`\`\`css
:root {
  --color-bg-start: #19193b;
  --color-bg-end: #354d73;
  --color-accent-teal: #43c1ce;
  --color-accent-blue: #7993f2;
  --color-accent-indigo: #5b5f9f;
  --color-gradient-start: #2dd4bf;
  --color-gradient-end: #81cdf8;
  --color-text-light: #f0f4f8;
  --spacing-unit: 8px;
}
\`\`\`

### Content

Update the mock data in \`src/data/mockData.ts\` or connect to your backend API.

## Contact Form

The contact form currently displays success messages. To wire it to a backend:

1. Update the \`handleSubmit\` function in \`src/components/Contact/Contact.tsx\`
2. Add your API endpoint
3. Handle form submission and error states

## SEO

The application includes:

- Meta tags in \`index.html\`
- Open Graph tags for social media sharing
- robots.txt
- sitemap.xml placeholder

Update these with your actual domain and content.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 AuraSyntax. All rights reserved.

## Contact

- Email: aurasyntax@gmail.com
- Phone: 0740856341
- Facebook: facebook.com/AuraSyntax
