# ADmyBRAND AI Suite - Landing Page

A stunning, modern SaaS landing page for "ADmyBRAND AI Suite" - an AI-powered marketing tool. Built with Next.js 15+, TypeScript, and cutting-edge 2025 design trends.

## 🚀 Features

- **Modern Design**: 2025 design trends with glassmorphism, subtle animations, and premium aesthetics
- **Responsive**: Mobile-first approach with perfect desktop experience
- **Animations**: Smooth scroll-triggered animations with Framer Motion
- **Accessible**: Semantic HTML and ARIA-compliant components
- **Performance**: Optimized with Next.js Image and App Router
- **Testing**: Comprehensive test suite with Vitest and React Testing Library

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom component library with shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel-ready

## 🎨 Design System

- **Font**: Inter (Google Fonts)
- **Colors**: 
  - Primary: Charcoal black (`oklch(0.145 0 0)`)
  - Accent: Mint green (`oklch(0.85 0.15 160)`)
  - Background: Pure white with gradient overlays
- **Spacing**: 8px grid system
- **Border Radius**: `rounded-xl` / `rounded-2xl` for modern cards
- **Typography**: Consistent hierarchy with `text-5xl`, `text-3xl`, `text-base`

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles and design tokens
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page with all sections
├── components/         # Reusable UI components
│   └── ui/            # shadcn/ui components (Button, Card)
├── sections/          # Page sections
│   ├── hero.tsx       # Hero section with animations
│   ├── features.tsx   # Features grid with 9 cards
│   ├── pricing.tsx    # 3-tier pricing cards
│   ├── testimonials.tsx # Customer testimonials carousel
│   ├── faq.tsx        # Collapsible FAQ section
│   └── footer.tsx     # Complete footer with links
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

## 📦 Landing Page Sections

### ✅ Hero Section
- Compelling headline with gradient text effects
- Animated stats (10,000+ users, 500% ROI, 24/7 support)
- Dual CTAs (Start Free Trial, Watch Demo)
- Floating animated elements
- Glassmorphism background effects

### ✅ Features Section
- 9 feature cards with icons and descriptions
- AI-Powered Insights, Smart Targeting, Real-time Analytics
- Audience Segmentation, Automated Campaigns, Enterprise Security
- Predictive Analytics, Multi-Channel Marketing, Creative AI Assistant
- Hover animations and staggered entrance effects

### ✅ Pricing Cards
- 3-tier pricing (Starter $29, Professional $99, Enterprise $299)
- Feature comparisons with checkmarks
- "Most Popular" highlight for Professional plan
- Trust indicators and bottom CTA
- Glassmorphism card effects

### ✅ Testimonials Carousel
- Auto-rotating customer testimonials
- 5-star ratings and customer photos
- Navigation dots for manual control
- Customer stats (4.9/5 rating, 10,000+ customers)
- Smooth transition animations

### ✅ FAQ Section
- 8 collapsible questions and answers
- Smooth expand/collapse animations
- Contact CTA for additional support
- Modern accordion design

### ✅ Footer
- Complete navigation links (Product, Company, Support, Legal)
- Newsletter signup with email input
- Social media links (Twitter, LinkedIn, Facebook, Instagram, YouTube)
- Contact information (Email, Phone, Office)
- Copyright and branding

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

## 🎨 2025 Design Trends Implemented

- **Glassmorphism**: Backdrop blur effects and transparent cards
- **Gradient Backgrounds**: Subtle gradient overlays and text effects
- **Micro-interactions**: Hover effects, scale animations, smooth transitions
- **Modern Typography**: Clean hierarchy with Inter font
- **Rounded Corners**: Consistent use of `rounded-xl` and `rounded-2xl`
- **Subtle Shadows**: Layered shadow effects for depth
- **Color Psychology**: Trust-building charcoal and energetic mint green

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
