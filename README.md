# ADmyBRAND AI Suite - Landing Page

A modern, responsive SaaS landing page for the fictional AI product "ADmyBRAND AI Suite". Built with Next.js 14+, TypeScript, and modern design principles.

## 🚀 Features

- **Modern Design**: Swiss design principles with 2025 UI trends
- **Responsive**: Mobile-first approach with perfect desktop experience
- **Animations**: Smooth scroll-triggered animations with Framer Motion
- **Accessible**: Semantic HTML and ARIA-compliant components
- **Performance**: Optimized with Next.js Image and App Router
- **Testing**: Comprehensive test suite with Vitest and React Testing Library

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel

## 🎨 Design System

- **Font**: Inter (Google Fonts)
- **Colors**: 
  - Primary: Charcoal black (`oklch(0.145 0 0)`)
  - Accent: Mint green (`oklch(0.85 0.15 160)`)
  - Background: Pure white
- **Spacing**: 8px grid system
- **Border Radius**: `rounded-xl` / `rounded-2xl` for modern cards
- **Typography**: Consistent hierarchy with `text-5xl`, `text-3xl`, `text-base`

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles and design tokens
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   └── ui/            # shadcn/ui components
├── sections/          # Page sections (Hero, Features, etc.)
├── lib/              # Utility functions
└── test/             # Test setup and utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sasslandingpage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage

## 🧪 Testing

The project uses Vitest with React Testing Library for comprehensive testing:

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

## 📦 Page Sections

- **Hero Section**: Headline, subtext, CTA, hero image
- **Features**: 6+ grid cards with icons and descriptions
- **Pricing Cards**: 3-tier comparison
- **Testimonials Carousel**: Customer testimonials
- **FAQ Accordion**: Frequently asked questions
- **Footer**: Links, contact, social media
- **Optional**: Contact/demo modal, pricing calculator

## 🎯 Development Guidelines

1. **Mobile-First**: Design for mobile, enhance for desktop
2. **Accessibility**: Use semantic HTML and ARIA attributes
3. **Performance**: Optimize images and bundle size
4. **Testing**: Write tests for all components
5. **Consistency**: Follow the established design system

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be configured in Vercel dashboard

## 📝 AI Usage Tracking

This project was developed with AI assistance using:
- **Cursor** - Primary coding assistant
- **v0.dev** - Component generation
- **ChatGPT** - Code review and debugging

All AI-generated code has been reviewed, customized, and tested.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is for demonstration purposes. Feel free to use as a reference for your own projects.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
# Trigger fresh build
# Test deployment
