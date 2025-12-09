# GEEX Shopify Theme

A modern, clean Shopify theme converted from a React e-commerce application. This theme features a minimalist design with advanced functionality and full customization options.

## Features

### 🎨 Design & UX
- **Clean, Modern Aesthetics**: Minimalist design inspired by premium tech brands
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle animations and transitions throughout
- **Accessibility First**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Dark Mode Support**: Light theme optimized for readability

### 🛍️ E-commerce Functionality
- **Product Variants**: Support for multiple variants with color swatches and size selectors
- **AJAX Cart**: Sidebar cart with quick add functionality
- **Product Filtering**: Advanced filtering by collection, tags, and custom properties
- **Search Integration**: Full-site search with instant results and autocomplete
- **Wishlist Functionality**: Customer wishlist management
- **Product Reviews**: Integrated review system with star ratings
- **Quick View**: Product quick view modal
- **Inventory Management**: Stock levels and low stock indicators

### 📝 Content Management
- **Blog System**: Full-featured blog with categories and tags
- **Article System**: Rich content with image galleries and formatting
- **Page Templates**: Multiple page layouts (about, contact, FAQ, etc.)
- **Custom Sections**: Flexible drag-and-drop sections throughout

### 🔧 Technical Features
- **Shopify 2.0**: Built with latest Shopify Liquid and OS 2.0 features
- **Optimized Performance**: Lazy loading, optimized images, minimal JavaScript
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Google Analytics Ready**: Easy integration with GA4 and other analytics
- **Social Media Integration**: Open Graph and Twitter Card meta tags
- **Multi-currency Support**: Currency selector and local pricing

## Installation

### Requirements
- Shopify account with Online Store
- Shopify plan (Basic or higher recommended)
- Products and collections set up in your store

### Installation Steps

1. **Download Theme Files**
   - Download the complete theme package
   - Extract all files to your local computer

2. **Upload to Shopify**
   - Log in to your Shopify admin
   - Go to Online Store → Themes
   - Click "Upload theme"
   - Select the theme ZIP file
   - Wait for upload to complete

3. **Activate Theme**
   - Find the GEEX theme in your themes list
   - Click "Publish" to make it your live theme
   - Or click "Preview" to test before publishing

4. **Configure Settings**
   - Go to Online Store → Themes → Customize
   - Review and adjust theme settings in the Theme Editor
   - Configure colors, typography, and layout options
   - Set up navigation menus and footer links

5. **Test Functionality**
   - Test all product pages and add to cart functionality
   - Verify checkout process works correctly
   - Test mobile responsiveness
   - Check all pages and forms

## Theme Structure

```
theme/
├── assets/                 # CSS, JavaScript, images
│   ├── base.css            # Main stylesheet
│   ├── theme.js            # Theme JavaScript
│   └── icons/              # SVG icons
├── config/                 # Theme configuration
│   ├── settings_schema.json # Customization options
│   └── settings_data.json  # Default settings
├── layout/                 # Main layout templates
│   └── theme.liquid        # Main theme layout
├── sections/               # Reusable page sections
│   ├── header.liquid       # Site header
│   ├── footer.liquid       # Site footer
│   ├── cart-drawer.liquid # Shopping cart
│   ├── hero-banner.liquid  # Homepage hero
│   └── featured-products.liquid # Product grids
├── snippets/               # Reusable code snippets
│   ├── mobile-navigation.liquid
│   ├── product-rating.liquid
│   ├── social-meta-tags.liquid
│   └── structured-data.liquid
├── templates/              # Page templates
│   ├── index.liquid        # Homepage
│   ├── product.liquid      # Product pages
│   ├── collection.liquid   # Collection pages
│   ├── blog.liquid         # Blog listing
│   ├── article.liquid      # Individual articles
│   ├── search.liquid       # Search results
│   └── cart.liquid        # Cart page
└── templates/customers/     # Customer account pages
    ├── account.liquid      # Customer dashboard
    ├── order.liquid        # Order history
    ├── addresses.liquid   # Address management
    └── login.liquid       # Login/register
```

## Customization Guide

### Theme Settings
Access all customization options via:
Shopify Admin → Online Store → Themes → Customize → Theme Settings

#### Colors & Branding
- **Primary Color**: Main accent color (default: #0ea5e9)
- **Secondary Color**: Text and dark elements (default: #0f172a)
- **Logo Upload**: Add your custom logo (200x50px recommended)
- **Favicon**: Upload custom favicon (32x32px)

#### Typography
- **Headings**: Customize font family and sizes
- **Body Text**: Set content font and line height
- **Buttons**: Style button colors and typography

#### Layout Options
- **Container Width**: Adjust max content width
- **Product Grid**: Set columns per row
- **Image Sizes**: Control product image dimensions
- **Spacing**: Adjust padding and margins

#### Navigation
- **Main Menu**: Configure top navigation
- **Footer Menu**: Set up footer links
- **Mobile Menu**: Customize mobile navigation
- **Social Links**: Add social media profiles

#### E-commerce Settings
- **Product Pages**: Enable/disable features
- **Cart Behavior**: Configure AJAX cart options
- **Checkout Style**: Customize checkout appearance
- **Payment Methods**: Display accepted cards

### Advanced Customization

#### Adding Custom CSS
1. Go to Theme Editor → Custom CSS
2. Add your custom styles
3. Save changes

#### Editing Templates
1. Duplicate the theme first (always!)
2. Edit files in the Shopify code editor
3. Test thoroughly

#### Custom Sections
1. Create new .liquid files in `/sections/`
2. Add schema for settings
3. Include in templates via `{% section 'section-name' %}`

## Performance Optimization

### Image Optimization
- WebP format support
- Responsive image serving
- Lazy loading for all images
- Automatic compression

### Code Optimization
- Minified CSS and JavaScript
- Efficient Liquid templates
- Minimal external dependencies
- Fast Shopify CDN usage

### SEO Features
- Structured data for all page types
- Semantic HTML structure
- Open Graph and Twitter Card support
- Breadcrumb navigation
- Alt text for all images

## Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest version)
- ✅ iOS Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## Apps Compatibility

This theme is compatible with most popular Shopify apps:

### Recommended Apps
- **Product Reviews**: Judge.me, Loox, or Yotpo
- **Email Marketing**: Klaviyo, Omnisend, or Mailchimp
- **Analytics**: Google Analytics, Hotjar, or Lucky Orange
- **Currency Converter**: Shopify Multi-Currency
- **Size Guide**: Custom size chart apps
- **Back in Stock**: Back in Stock notifications

### App Integration Notes
- Most apps work out-of-the-box
- Check app documentation for theme compatibility
- Some apps may require minor code adjustments

## Support

### Documentation
- [Shopify Liquid Reference](https://shopify.dev/docs/themes/liquid)
- [Shopify Online Store Help](https://help.shopify.com/en/manual/online-store)
- [Theme Customization Guide](https://help.shopify.com/en/manual/online-store/themes)

### Common Issues

#### Images Not Loading
- Check image file formats (JPG, PNG, WEBP)
- Verify image sizes are reasonable
- Ensure alt text is descriptive

#### Mobile Menu Not Working
- Check for JavaScript conflicts
- Verify proper Liquid syntax
- Test on different mobile browsers

#### Checkout Issues
- Ensure all products have variants
- Check shipping settings
- Verify payment gateway configuration

#### Performance Problems
- Optimize image sizes
- Minimize app usage
- Check for code errors

### Getting Help

1. **Check Documentation**: Review this README and Shopify help
2. **Test in Preview**: Use theme preview before publishing
3. **Duplicate Theme**: Always duplicate before major changes
4. **Rollback**: Revert to previous version if needed

## Version History

### v1.0.0 (Current)
- Initial theme release
- Full Shopify 2.0 compatibility
- Complete e-commerce functionality
- Responsive design
- SEO optimization

## License

This theme is proprietary to GEEX Industries. All rights reserved.

## Development Notes

For developers working on this theme:

### Build Process
- Uses Shopify CLI for local development
- Liquid templating engine
- No build tools required
- Direct file editing possible

### Best Practices
- Use semantic HTML5 elements
- Implement proper ARIA labels
- Optimize for Core Web Vitals
- Test across devices and browsers
- Keep Liquid code clean and readable

### File Naming
- Use kebab-case for file names
- Descriptive names for clarity
- Logical folder organization
- Consistent naming conventions

---

**Happy building with GEEX Theme!** 🚀

For additional support or feature requests, please contact the development team.