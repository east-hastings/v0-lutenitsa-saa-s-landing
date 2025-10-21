# Lutenitsa SaaS Landing Page

## Overview

This is a modern SaaS landing page for "Lutenitsa," a subscription service that delivers authentic Balkan red pepper spread (lutenitsa) directly from artisanal producers to customers. The application is built as a marketing website to showcase the product, explain how the service works, display pricing plans, and collect customer signups.

The project is designed as a single-page application with multiple sections including hero, features, how-it-works, testimonials, pricing, and call-to-action areas. It was initially created using v0.app and is deployed on Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Technology**: Next.js 15.2.4 with App Router
- **Rationale**: Next.js provides server-side rendering, excellent performance, and built-in optimizations for production deployments. The App Router enables modern React patterns with server components.
- **Rendering Strategy**: Static site generation (SSG) for optimal performance on a marketing landing page

### UI Component System
- **Technology**: React with TypeScript, Radix UI primitives, shadcn/ui components
- **Rationale**: Type-safe component development with accessible, unstyled primitives from Radix UI. The shadcn/ui pattern provides customizable components that can be copied directly into the project rather than installed as dependencies.
- **Component Architecture**: 
  - Modular section-based components (Hero, Features, HowItWorks, etc.)
  - Reusable UI primitives in `components/ui/` directory
  - Client components explicitly marked with `"use client"` directive where interactivity is needed

### Styling Approach
- **Technology**: Tailwind CSS with custom design tokens
- **Rationale**: Utility-first CSS enables rapid UI development with consistent spacing, colors, and responsive design. Custom CSS variables provide theme flexibility.
- **Design System**: 
  - Custom color palette using OKLCH color space for perceptually uniform colors
  - Mediterranean/warm color theme reflecting the product (red peppers, Balkan cuisine)
  - Dark mode support with theme provider
  - Custom radius values and spacing scale
  - CSS variables for theming (`--primary`, `--accent`, etc.)

### State Management
- **Technology**: React component state, no global state management
- **Rationale**: Landing page has minimal interactivity requirements. Component-level state is sufficient for navigation, modals, and form interactions.

### Type Safety
- **Technology**: TypeScript with strict mode enabled
- **Rationale**: Catches errors at compile time, improves developer experience with autocomplete, and serves as inline documentation
- **Configuration**: Strict type checking, ES6 target, path aliases for clean imports

### Code Organization
- **Pattern**: Feature-based component organization
- **Structure**:
  - `/app` - Next.js App Router pages and layouts
  - `/components` - Feature components (hero, pricing, etc.)
  - `/components/ui` - Reusable UI primitives
  - `/lib` - Utility functions (className merging)
- **Rationale**: Clear separation between page routes, feature components, and reusable UI elements makes the codebase maintainable and scalable

## External Dependencies

### Hosting & Deployment
- **Vercel**: Primary hosting platform with automatic deployments from GitHub
- **v0.app**: Design tool integration for generating and updating UI components
- **Rationale**: Vercel provides zero-config deployment optimized for Next.js applications with automatic HTTPS, CDN distribution, and preview deployments

### Analytics
- **@vercel/analytics**: Integrated web analytics
- **Purpose**: Track page views, user engagement, and conversion metrics without third-party cookies
- **Implementation**: Analytics component included in root layout

### UI Libraries
- **Radix UI**: Headless component primitives for accessibility
  - Dialog, Dropdown, Accordion, Tooltip, and other interactive components
  - Provides keyboard navigation, ARIA attributes, and focus management
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant APIs for components
- **clsx & tailwind-merge**: Utility for merging Tailwind classes conditionally

### Form Handling
- **React Hook Form**: Not yet implemented but dependency included (@hookform/resolvers)
- **Intended Use**: Contact forms, newsletter signups, and lead capture forms

### Theme Management
- **next-themes**: Dark/light mode support
- **Purpose**: Provides system preference detection and theme persistence

### Development Tools
- **TypeScript**: Static type checking
- **ESLint**: Code linting and quality enforcement
- **Autoprefixer**: Automatic CSS vendor prefixing for browser compatibility

### Image Optimization
- **Next.js Image Component**: Built-in image optimization
- **Purpose**: Automatic image resizing, lazy loading, and modern format conversion (WebP/AVIF)

### Fonts
- **Next.js Font Optimization**: Google Fonts (Inter) with automatic self-hosting
- **Purpose**: Eliminates external font requests and improves performance

### Future Integration Points
The architecture is prepared for:
- Payment processing integration (for subscriptions)
- User authentication system (sign in/sign up buttons present)
- Email marketing service (for newsletter signups)
- CMS integration (for blog/recipe content)
- Database for user management and orders