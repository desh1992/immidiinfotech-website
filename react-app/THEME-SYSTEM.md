# Light/Dark Theme System

## 🎨 **Overview**

A complete light/dark theme system has been implemented for the Immidi Infotech geometric hero component, featuring an elegant theme toggle switch and seamless transitions between themes.

## 🏗️ **Architecture**

### Theme Context (`/src/contexts/ThemeContext.tsx`)
- **State Management**: React Context for global theme state
- **Persistence**: LocalStorage for theme preference
- **System Detection**: Automatically detects system preference
- **Hydration Safe**: Prevents SSR hydration mismatches

### Theme Toggle (`/src/components/ui/theme-toggle.tsx`)
- **Elegant Design**: Glassmorphism button with animated icons
- **Smooth Transitions**: Framer Motion animations
- **Visual Feedback**: Hover effects and particle animations
- **Accessibility**: Proper ARIA labels and keyboard support

## 🎨 **Theme Designs**

### Dark Mode (Default)
- **Background**: Deep dark (`#030303`) with subtle gradients
- **Shapes**: Lower opacity for subtle effect
- **Text**: White/gray gradients for high contrast
- **Borders**: White with low opacity
- **Shadows**: White shadows for depth

### Light Mode
- **Background**: Light gradient (`gray-50` to `white`)
- **Shapes**: Higher opacity for visibility
- **Text**: Dark gray gradients for readability
- **Borders**: Gray with appropriate opacity
- **Shadows**: Black shadows for depth

## 🔧 **Implementation Details**

### Theme Context Features
```tsx
interface ThemeContextType {
  theme: Theme;           // Current theme ('light' | 'dark')
  toggleTheme: () => void; // Toggle between themes
  setTheme: (theme: Theme) => void; // Set specific theme
}
```

### Theme Toggle Features
- **Animated Icons**: Sun/Moon icons with rotation and scale
- **Background Circle**: Slides and changes opacity
- **Hover Effects**: Scale animation and particle effects
- **Color Transitions**: Smooth color changes
- **Brand Colors**: Uses Immidi Infotech green palette

### Hero Component Updates
- **Dynamic Backgrounds**: Theme-aware background gradients
- **Shape Opacity**: Adjusted for each theme
- **Text Colors**: Optimized for readability in both themes
- **Border Colors**: Theme-appropriate border styling
- **Shadow Effects**: Different shadow colors per theme

## 🎯 **Color Palette**

### Immidi Infotech Brand Colors
- **Primary Green**: `#00B483`
- **Secondary Green**: `#00B843`
- **Dark Green**: `#008B6B`
- **Light Green**: `#E8F5E8`

### Theme-Specific Colors
- **Dark Mode Text**: White, white/80, white/40
- **Light Mode Text**: Gray-900, gray-700, gray-600
- **Dark Mode Backgrounds**: #030303, white/03, white/08
- **Light Mode Backgrounds**: gray-50, white, gray-100/50

## 🚀 **Usage**

### Basic Theme Usage
```tsx
import { useTheme } from '@/contexts/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme()
  
  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-black'}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  )
}
```

### Theme Toggle Component
```tsx
import { ThemeToggle } from '@/components/ui/theme-toggle'

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  )
}
```

## 🎨 **Visual Features**

### Theme Toggle Animation
- **Icon Rotation**: 180-degree rotation on theme change
- **Scale Animation**: Icons scale during transition
- **Color Transitions**: Smooth color changes
- **Particle Effects**: Floating particles on hover
- **Glow Effects**: Subtle glow around the button

### Hero Component Transitions
- **Background Transitions**: 500ms smooth color changes
- **Shape Opacity**: Adjusted for theme visibility
- **Text Gradients**: Theme-appropriate color schemes
- **Border Styling**: Different border colors per theme

## 📱 **Responsive Design**

### Mobile Optimization
- **Touch-Friendly**: Large touch target for theme toggle
- **Readable Text**: Optimized contrast in both themes
- **Performance**: Efficient animations and transitions

### Accessibility
- **ARIA Labels**: Proper accessibility labels
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG compliant contrast ratios
- **Focus States**: Clear focus indicators

## 🔄 **Theme Persistence**

### LocalStorage Integration
- **Automatic Save**: Theme preference saved on change
- **Automatic Load**: Theme restored on page reload
- **System Detection**: Falls back to system preference
- **Hydration Safe**: Prevents SSR mismatches

### System Integration
- **Media Query**: Detects `prefers-color-scheme`
- **Default Behavior**: Respects user system preference
- **Override Capability**: User can override system preference

## 🎯 **Current Implementation**

### Active Features
- ✅ Theme context with persistence
- ✅ Elegant theme toggle switch
- ✅ Light and dark mode designs
- ✅ Smooth transitions and animations
- ✅ Immidi Infotech brand colors
- ✅ Responsive design
- ✅ Accessibility features

### How to Test
1. **Start the development server**: `npm run dev`
2. **Open browser**: Navigate to `http://localhost:5173`
3. **Click theme toggle**: Top-right corner button
4. **Observe transitions**: Smooth color and animation changes
5. **Refresh page**: Theme preference persists

## 🎨 **Design Philosophy**

The theme system maintains:
- **Brand Consistency**: Immidi Infotech colors in both themes
- **Visual Hierarchy**: Clear contrast and readability
- **Smooth Transitions**: Delightful user experience
- **Professional Appeal**: Suitable for enterprise clients
- **Modern Aesthetics**: Contemporary design patterns

The implementation provides a seamless, elegant way to switch between light and dark modes while maintaining the professional brand identity of Immidi Infotech.
