# Digital Peak - Digital Marketing Agency

A modern, responsive website for Digital Peak, a creative digital marketing agency specializing in social media marketing, content creation, SEO, and more.

## Features

- Modern, responsive design
- Interactive components
- Contact form with validation
- Service showcase
- About section
- Mobile-first approach

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router
- React Hook Form
- Zod validation

## Getting Started

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd digital-peak-elevate

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn-ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   └── Services.tsx    # Services showcase
├── pages/              # Page components
├── assets/             # Static assets
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Deployment

The project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

Build the project:
```sh
npm run build
```

The built files will be in the `dist` directory.
