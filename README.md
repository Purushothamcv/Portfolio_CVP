# Portfolio - React Application

A modern, interactive portfolio website built with React, featuring WebGL animations and smooth transitions.

## 🚀 Features

- **Interactive Hero Section** with LiquidChrome WebGL animation
- **Smooth Animations** using Framer Motion
- **Responsive Design** optimized for all devices
- **Project Showcase** featuring SmartAgri-AI and LoanLens
- **Modern UI** with gradient effects and hover animations

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **OGL** - WebGL library for LiquidChrome
- **Three.js & React Three Fiber** - 3D graphics (FluidGlass component)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── LiquidChrome/
│   │   └── FluidGlass/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🎨 Components

### LiquidChrome
Interactive WebGL background with mouse-tracking effects.

### FluidGlass
3D glass morphism effect with scrolling images (requires 3D models).

## 🔧 Configuration

The portfolio can be customized by editing:
- Project data in `src/components/Projects/Projects.jsx`
- Skills in `src/components/Skills/Skills.jsx`
- Contact links in `src/components/Contact/Contact.jsx`
- Color theme in CSS variables

## 📱 Responsive

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1200px)
- Mobile (< 768px)

## 🌐 Deployment

The site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

MIT License - feel free to use this portfolio template for your own projects!
