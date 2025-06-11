# Union Enterier - Corporate Website

A modern, responsive corporate website for Union Enterier, a construction company based in Pristina, Kosovo.

## Features

- **Modern Design**: Clean, professional design with premium aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **Image Optimization**: Optimized images from Pexels with fallback support
- **Animations**: Smooth animations using Framer Motion
- **Dark Mode**: Built-in dark/light mode toggle
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant components

## Tech Stack

- **Framework**: Next.js 13.5.1 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Animations**: Framer Motion
- **Images**: Pexels stock photos with Next.js Image optimization
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd union-enterier
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

## Image Management

This project uses high-quality stock photos from Pexels for all project images. The images are:

- **Optimized**: Automatically compressed and served in appropriate formats
- **Responsive**: Different sizes served based on device and viewport
- **Fallback Support**: Graceful degradation if images fail to load
- **Loading States**: Smooth loading animations and placeholders

### Image Structure

Images are organized in `lib/images.ts` with the following structure:
```typescript
export const projectImages = {
  projectKey: {
    main: { url: "...", alt: "..." },
    gallery: [
      { url: "...", alt: "..." },
      // ... more gallery images
    ]
  }
};
```

### Adding New Projects

1. Add project data to `lib/images.ts`
2. Update the projects array in `components/portfolio-section.tsx`
3. Choose appropriate Pexels URLs for your project images

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── optimized-image.tsx # Custom image component
│   ├── hero-section.tsx
│   ├── portfolio-section.tsx
│   └── ... (other components)
├── lib/                  # Utility functions
│   ├── images.ts         # Image data and URLs
│   └── utils.ts          # General utilities
├── public/               # Static assets
└── ... (config files)
```

## Building for Production

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Deployment

This project is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

For Vercel deployment:
1. Connect your repository to Vercel
2. Deploy (no environment variables needed)

## Customization

### Adding New Projects

1. Find suitable images on [Pexels](https://www.pexels.com/)
2. Add the project data to `lib/images.ts`
3. Update the projects array in `components/portfolio-section.tsx`

### Changing Images

Simply update the URLs in `lib/images.ts` with new Pexels image URLs. The format should be:
```
https://images.pexels.com/photos/[photo-id]/pexels-photo-[photo-id].jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
```

### Changing Colors

The color scheme is defined in `app/globals.css` and uses CSS custom properties:
- Primary: `#0B2341` (Navy blue)
- Accent: `#D4AF37` (Gold)
- Background: `#FFFFFF` (White)

### Adding New Sections

Create new components in the `components/` directory and import them in `app/page.tsx`.

## Performance

- Images are automatically optimized by Next.js Image component
- Lazy loading for all images
- Static export for fast loading times
- Minimal JavaScript bundle size
- Responsive images with appropriate sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Union Enterier. All rights reserved.