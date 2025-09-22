# React Hero Component with Shadcn/UI

This project demonstrates the integration of a beautiful shader-based hero component using React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern React Setup**: Built with Vite, TypeScript, and React 18
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn/UI**: Modern component library with beautiful design system
- **Framer Motion**: Smooth animations and transitions
- **Paper Design Shaders**: Advanced shader effects for stunning visuals
- **Responsive Design**: Works perfectly on all device sizes

## 📁 Project Structure

```
react-app/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── hero.tsx          # Main hero component with shader effects
│   │   └── demo.tsx              # Demo component showcasing the hero
│   ├── lib/
│   │   └── utils.ts              # Utility functions for shadcn/ui
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global styles with Tailwind
├── components.json               # Shadcn/ui configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Install Dependencies
```bash
cd react-app
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎨 Component Features

### Hero Component (`/src/components/ui/hero.tsx`)

The hero component includes:

- **Interactive Shader Effects**: 
  - MeshGradient backgrounds with animated colors
  - PulsingBorder with dynamic color transitions
  - SVG filters for glass effects and glows

- **Smooth Animations**:
  - Framer Motion animations for all elements
  - Hover effects on interactive elements
  - Staggered entrance animations

- **Modern UI Elements**:
  - Glassmorphism design with backdrop blur
  - Gradient text effects
  - Interactive buttons with hover states
  - Animated logo with particle effects

- **Responsive Design**:
  - Mobile-first approach
  - Adaptive typography scaling
  - Flexible layout system

## 🔧 Configuration

### Shadcn/UI Setup
The project is configured with shadcn/ui using:
- **Style**: New York (recommended)
- **Base Color**: Neutral
- **CSS Variables**: Enabled for theming
- **Path Aliases**: `@/` points to `src/`

### Tailwind CSS
Extended configuration includes:
- Custom color palette
- Animation utilities
- Responsive breakpoints
- Dark mode support

### TypeScript
Configured with:
- Path mapping for clean imports
- Strict type checking
- Modern ES2022 target

## 📦 Dependencies

### Core Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `framer-motion` - Animation library
- `@paper-design/shaders-react` - Shader effects

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - TypeScript compiler
- `tailwindcss` - CSS framework
- `tailwindcss-animate` - Animation utilities
- `clsx` - Conditional class names
- `tailwind-merge` - Tailwind class merging

## 🎯 Usage

### Basic Usage
```tsx
import ShaderShowcase from "@/components/ui/hero";

function App() {
  return (
    <div className="min-h-screen">
      <ShaderShowcase />
    </div>
  );
}
```

### Customization
The hero component can be customized by:
- Modifying the color palette in the `colors` prop
- Adjusting animation speeds and delays
- Changing the gradient configurations
- Updating the text content and styling

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔍 Troubleshooting

### Common Issues

1. **Shader Effects Not Loading**
   - Ensure `@paper-design/shaders-react` is properly installed
   - Check browser compatibility (requires WebGL support)

2. **Animations Not Working**
   - Verify `framer-motion` is installed
   - Check for JavaScript errors in console

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check that `@tailwind` directives are in your CSS

4. **TypeScript Errors**
   - Verify path aliases are configured correctly
   - Check `tsconfig.json` and `vite.config.ts`

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Shadcn/UI Documentation](https://ui.shadcn.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Paper Design Shaders](https://paper-design.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).