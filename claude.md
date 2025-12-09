# GEEX Shopify Theme - Claude Context Documentation

## Project Overview

This is a **production-ready Shopify 2.0 theme** called "GEEX" - a premium e-commerce theme designed for selling tech peripherals and computer hardware. The theme was converted from a React application and features a clean, minimalist design with advanced e-commerce functionality.

**Target Business:** High-end tech hardware store (mechanical keyboards, mice, monitors, accessories)
**Design Philosophy:** Clean, professional, tech-focused aesthetic
**Platform:** Shopify 2.0 with full Liquid templating

## Key Technologies & Frameworks

- **Shopify 2.0**: Latest theme architecture with sections and JSON templates
- **Liquid Templating**: Shopify's template engine for dynamic content
- **Tailwind CSS**: Utility-first CSS framework (adapted for Shopify)
- **Alpine.js**: Lightweight JavaScript framework for interactivity
- **Vanilla JavaScript**: Custom functionality without jQuery dependency
- **Shopify AJAX API**: Cart and product management

## Project Structure

```
C:\Users\admin\Desktop\generated (1)\theme\
├── assets/                    # CSS, JS, and static assets
│   ├── base.css             # Main stylesheet (34.5KB) - Tailwind-based
│   └── theme.js             # Theme JavaScript (16KB) - Custom functionality
├── config/                  # Theme configuration files
│   ├── settings_schema.json # Theme customization options (3.4KB)
│   └── settings_data.json   # Default theme settings (785B)
├── layout/                  # Main layout templates
│   └── theme.liquid         # Primary theme layout (2.6KB)
├── sections/                # Reusable section components (17 files)
│   ├── header.liquid        # Site navigation
│   ├── footer.liquid        # Site footer
│   ├── main-product.liquid  # Product pages (23KB) - *Recently modified*
│   ├── main-cart.liquid     # Shopping cart (10KB)
│   ├── main-search.liquid   # Search functionality (17KB)
│   ├── collection-list.liquid # Collection display - *Recently modified*
│   └── promo-stats.liquid   # Promotional banners - *Recently modified*
├── snippets/                # Reusable code snippets (5 files)
│   ├── mobile-navigation.liquid
│   ├── product-rating.liquid
│   ├── social-meta-tags.liquid
│   └── structured-data.liquid
├── templates/               # Page templates with JSON configs (11 files)
│   ├── index.json          # Homepage configuration
│   ├── product.json        # Product pages
│   ├── collection.json     # Collection pages
│   └── [8 other templates]
├── README.md               # Comprehensive documentation (289 lines)
└── CONVERSION_SUMMARY.md   # React-to-Shopify conversion details
```

## Design System

### Color Palette
- **Primary Color**: `#0ea5e9` (Sky Blue) - Accent colors, CTAs, highlights
- **Secondary Color**: `#0f172a` (Slate Dark) - Text, headers, dark elements
- **Background**: White/Gray variants for content sections
- **Accent**: Grays and subtle shadows for depth

### Typography
- **Headings**: Rajdhani (modern, geometric sans-serif)
- **Body Text**: Inter (clean, readable sans-serif)
- **Hierarchy**: Clear font sizes and weights for structure

### Layout Patterns
- **Container**: Max-width `7xl` (1280px) with centered content
- **Grid**: Responsive grid system using Tailwind utilities
- **Spacing**: Consistent padding/margins using Tailwind scale
- **Responsive**: Mobile-first approach with breakpoints

## Core Features

### 🛍️ E-commerce Functionality
- **Product Variants**: Multi-option support with visual selectors
- **AJAX Cart**: Sidebar cart with quick add functionality
- **Product Filtering**: Advanced filtering by collection, tags, properties
- **Search Integration**: Real-time search with autocomplete
- **Wishlist**: Customer product favoriting
- **Product Reviews**: Integrated star rating system
- **Inventory Management**: Stock levels and indicators

### 🎨 Design & UX
- **Modern Aesthetics**: Clean, minimalist tech-focused design
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: WCAG 2.1 compliant with ARIA labels
- **Image Optimization**: Lazy loading and responsive images

### 📱 Mobile Experience
- **Mobile-First Design**: Touch-optimized interface
- **Slide-out Navigation**: Mobile menu with smooth transitions
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Touch Gestures**: Swipe-friendly interactions

## Important Files & Their Purposes

### Layout Templates
- **`layout/theme.liquid`**: Main HTML structure with Alpine.js integration
- **Theme Structure**: Header, footer, content areas with proper Liquid syntax

### Core Sections
- **`sections/header.liquid`**: Site navigation with cart and search
- **`sections/footer.liquid`**: Footer links, newsletter, payment methods
- **`sections/main-product.liquid`**: Product pages with variant selection and image galleries
- **`sections/main-cart.liquid`**: Shopping cart with checkout flow
- **`sections/main-search.liquid`**: Search results with filtering

### Assets
- **`assets/base.css`**: Complete Tailwind CSS framework with custom utilities
- **`assets/theme.js`**: JavaScript for cart, navigation, and interactive features

### Configuration
- **`config/settings_schema.json`**: Theme customization options in Shopify Admin
- **Colors, fonts, layout options**: All configurable via Theme Editor

## Recent Changes (Current Git State)

**Modified Files:**
- **`sections/collection-list.liquid`**: Padding adjustment from py-24 to py-16
- **`sections/main-product.liquid`**: Enhanced with variant selection, image zoom, product specifications
- **`sections/promo-stats.liquid`**: Promotional section updates

**Last Commit:** `e4e18df` - "Update Shopify theme sections"

## Development Guidelines

### Code Conventions
- **File Naming**: Kebab-case (e.g., `main-product.liquid`)
- **Liquid Syntax**: Clean, readable templates with proper indentation
- **CSS Classes**: Tailwind utility classes with custom components
- **JavaScript**: Vanilla JS with event-driven architecture

### Shopify Best Practices
- **Schema First**: JSON configuration for all sections
- **Modular Components**: Reusable sections and snippets
- **Performance**: Optimized images, lazy loading, minified assets
- **SEO**: Structured data, meta tags, semantic HTML

### Customization Approach
- **Theme Editor**: Primary method for store customization
- **Color System**: CSS custom properties for easy theming
- **Component Architecture**: Reusable section-based design
- **Responsive Design**: Mobile-first approach

## Theme Settings & Customization

### Customizable Elements
- **Brand Colors**: Primary and secondary color schemes
- **Typography**: Font families and sizes
- **Layout**: Container widths, spacing, grid configurations
- **Navigation**: Menu structure and mobile navigation
- **E-commerce**: Product display, cart behavior, checkout style

### Configuration Access
```
Shopify Admin → Online Store → Themes → Customize → Theme Settings
```

## Installation & Setup

### Requirements
- Shopify account with Online Store
- Basic Shopify plan or higher
- Products and collections configured

### Setup Steps
1. Upload theme files to Shopify
2. Configure theme settings via Theme Editor
3. Set up navigation menus
4. Configure payment and shipping
5. Test all functionality

## Performance & Optimization

### Image Handling
- WebP format support with fallbacks
- Responsive image serving
- Lazy loading implementation
- Proper alt text for accessibility

### Code Optimization
- Minified CSS and JavaScript
- Efficient Liquid templates
- Minimal external dependencies
- Fast Shopify CDN integration

### SEO Features
- Structured data (JSON-LD) for all page types
- Semantic HTML5 structure
- Open Graph and Twitter Card meta tags
- Breadcrumb navigation

## Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest version)
- ✅ iOS Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## App Compatibility

### Recommended Apps
- **Product Reviews**: Judge.me, Loox, Yotpo
- **Email Marketing**: Klaviyo, Omnisend
- **Analytics**: Google Analytics, Hotjar
- **Currency Converter**: Shopify Multi-Currency

### Integration Notes
- Most Shopify apps compatible
- Check app documentation for theme requirements
- May require minor code adjustments for some apps

## Common Issues & Solutions

### Mobile Navigation
- Check for JavaScript conflicts
- Verify proper Alpine.js initialization
- Test on different mobile browsers

### Product Variants
- Ensure all products have proper variant setup
- Check variant inventory levels
- Test variant switching functionality

### Cart Functionality
- Verify AJAX API endpoints
- Check product form structure
- Test add to cart on different product types

## Development Workflow

### File Editing
1. Always duplicate theme before major changes
2. Use Shopify code editor for development
3. Test changes in theme preview
4. Publish after thorough testing

### Best Practices
- Use semantic HTML5 elements
- Implement proper ARIA labels
- Optimize for Core Web Vitals
- Test across devices and browsers
- Keep Liquid code clean and maintainable

## License & Support

- **License**: Proprietary to GEEX Industries
- **Support**: Development team contact for issues
- **Documentation**: Complete README.md with detailed setup guide

## File Context Summary

This theme represents a **professional-grade Shopify e-commerce solution** successfully converted from React to Shopify's Liquid templating system. It maintains all original functionality while leveraging Shopify's powerful e-commerce features and infrastructure.

**Current Status**: Production-ready with recent enhancements to core e-commerce functionality. The theme is well-documented, properly structured, and optimized for performance and SEO.

**Key Strengths**: Clean design, advanced functionality, mobile responsiveness, and comprehensive customization options make this theme suitable for premium tech hardware stores.