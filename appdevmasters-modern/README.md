# AppDevMasters - Modern Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS, showcasing AppDevMasters' mobile app portfolio.

## 🚀 Features

- **Modern Design**: Clean, contemporary UI with gradient backgrounds and smooth animations
- **Mobile-First**: Fully responsive design optimized for all device sizes
- **Performance**: Built with Next.js for optimal loading times and SEO
- **Accessibility**: Semantic HTML, proper ARIA labels, and keyboard navigation
- **Interactive**: Smooth hover effects, transitions, and micro-interactions
- **Type-Safe**: Full TypeScript implementation for better development experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 📱 Sections

### Hero Section
- Eye-catching gradient background with animated elements
- Clear value proposition and call-to-action buttons
- Responsive typography that scales beautifully

### Apps Portfolio
- Grid layout showcasing three main apps:
  - **MaxFocus**: Minimalist focus timer
  - **PlanToShop**: Planning and grocery lists app
  - **Thinkers**: Ideas and brainstorming companion
- Interactive cards with hover effects and gradients

### About Section
- Company mission and values
- Feature highlights with icons and descriptions
- Three-column layout on desktop, stacked on mobile

### Contact Section
- Modern contact form with proper validation
- Beautiful gradient background and styling
- Accessible form labels and focus states

### Footer
- Clean design with important links
- Social proof and copyright information

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd appdevmasters-modern
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with every push

### Other Platforms
```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🎨 Design System

### Colors
- **Primary**: Blue to Purple gradient (`from-blue-600 to-purple-600`)
- **Background**: Subtle gradients (`from-slate-50 to-blue-50`)
- **Text**: Semantic color scale (`slate-900`, `slate-600`, `slate-400`)

### Typography
- **Font**: Inter with various weights (400, 600, 700, 800)
- **Scale**: Responsive typography using Tailwind's text sizing
- **Hierarchy**: Clear heading structure with gradient accents

### Components
- **Cards**: Rounded corners, subtle shadows, hover animations
- **Buttons**: Gradient backgrounds, hover effects, proper focus states
- **Forms**: Clean inputs with focus rings and validation states

## 📱 Responsive Design

- **Mobile**: Stack navigation, single-column layouts
- **Tablet**: Two-column grids, larger touch targets
- **Desktop**: Multi-column layouts, hover effects, larger typography

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Focus management and keyboard navigation
- Alt text for images and icons
- Color contrast compliance
- Screen reader friendly

## 🔧 Customization

### Adding New Apps
Edit the `apps` array in `src/app/page.tsx`:
```typescript
const apps = [
  {
    name: 'Your App Name',
    description: 'App description here',
    icon: YourIcon, // From lucide-react
    color: 'from-color-400 to-color-400'
  }
]
```

### Modifying Colors
Update the Tailwind classes throughout the components or customize the `tailwind.config.js` file.

### Adding Sections
Create new sections in the main `page.tsx` file following the existing pattern.

## 📋 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary to AppDevMasters.

---

Built with ❤️ by AppDevMasters
