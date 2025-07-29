import '@testing-library/jest-dom'
import React from 'react'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

// Mock Next.js image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return React.createElement('img', props)
  },
}))

// Mock framer-motion to avoid animation-related issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.createElement('div', props, children),
    section: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => React.createElement('section', props, children),
    button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => React.createElement('button', props, children),
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement('h1', props, children),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement('h2', props, children),
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement('h3', props, children),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => React.createElement('p', props, children),
    span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => React.createElement('span', props, children),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement('div', {}, children),
}))

// Mock CSS modules
jest.mock('*.module.css', () => ({}))
jest.mock('*.module.scss', () => ({})) 