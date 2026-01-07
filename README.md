# Dikshit's Portfolio - React Version

A modern, responsive portfolio website built with React, Next.js, TypeScript, and Shadcn/UI components. This is a conversion of the original HTML portfolio into a fully functional React application.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Component-Based**: Modular React components using Shadcn/UI
- **Performance Optimized**: Next.js Image optimization and modern web practices
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: React Icons (Material Design, Font Awesome, Simple Icons)
- **Fonts**: Google Fonts (Anton, Inter, Playfair Display, Space Grotesk)
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react
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

## 🏗️ Project Structure

```
portfolio-react/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/           # Shadcn/UI components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── LifeSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ThemeToggle.tsx
│   └── lib/
│       └── utils.ts
├── components.json
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Components

### Core Sections
- **Header**: Navigation with logo and social links
- **HeroSection**: Main landing area with animated elements
- **AboutSection**: Personal introduction with status indicator
- **JourneySection**: Career timeline with interactive elements
- **WorkSection**: Skills and work philosophy cards
- **LifeSection**: Personal interests with image gallery
- **TechStackSection**: Technology skills organized by category
- **ProjectsSection**: Featured projects with descriptions
- **ContactSection**: Contact form and information
- **Footer**: Site footer with links and branding

### UI Components
- **ThemeToggle**: Dark/light mode switcher
- **Navigation**: Sticky navigation between sections

## 🎯 Key Features Implemented

1. **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
2. **Theme System**: Dark/light mode with localStorage persistence
3. **Smooth Scrolling**: CSS scroll-behavior and anchor navigation
4. **Image Optimization**: Next.js Image component with proper loading
5. **Typography**: Custom font loading and CSS variables
6. **Animations**: CSS keyframes and Tailwind animation utilities
7. **Form Handling**: Contact form with proper input styling
8. **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or deploy manually:
```bash
npm run build
npm start
```

## 🔧 Customization

### Colors
Update the color scheme in `src/app/globals.css` by modifying the CSS custom properties.

### Content
Update personal information, projects, and content in the respective component files.

### Styling
Modify Tailwind classes or add custom CSS in the global stylesheet.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original HTML design converted to React
- Shadcn/UI for component library
- Tailwind CSS for styling system
- Next.js team for the amazing framework