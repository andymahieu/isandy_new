# Isandy - Modern Website

A modern, fast, and engaging website for Andy Mahieu (isandy.be) built with vanilla HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Responsive**: Works perfectly on all devices and screen sizes
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Progressive Web App**: Service worker for offline capabilities
- **Smooth Navigation**: Intuitive navigation with smooth scrolling
- **Contact Form**: Interactive contact form with validation
- **Accessibility**: Built with accessibility best practices

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Service Worker for PWA capabilities
- Google Fonts (Inter)
- Jest (Testing Framework)

## Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── sw.js               # Service Worker
├── favicon.svg         # Website icon
├── tests/              # Test files
│   ├── unit/           # Unit tests
│   └── mocks/          # Test mocks
├── jest.config.js      # Jest configuration
├── jest.setup.js       # Jest setup
├── package.json        # Project configuration
└── README.md           # This file
```

## Key Improvements Over Original Site

1. **Performance**: Reduced from multiple CSS files to a single optimized file
2. **Modern Design**: Contemporary layout with better visual hierarchy
3. **User Experience**: Smooth animations and intuitive navigation
4. **Mobile First**: Fully responsive design
5. **Fast Loading**: Optimized assets and minimal dependencies
6. **SEO**: Better structure and meta tags
7. **Accessibility**: Proper semantic HTML and ARIA labels

## Sections

1. **Hero**: Eye-catching introduction with call-to-action
2. **About**: Personal information and skills showcase
3. **Services**: Clear presentation of offered services
4. **Portfolio**: Project showcase with technology tags
5. **Contact**: Interactive contact form and information

## Development

To run locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open `index.html` in a web browser or use a local server:
   ```bash
   npm run dev
   # or
   npx serve .
   # or
   python -m http.server 8000
   ```

### Testing

The project uses Jest for unit testing. To run the tests:

```bash
npm test
```

The tests cover:
- Form validation
- Email validation
- Notification system
- Performance utilities (debounce and throttle)
- Service worker registration
- Resource preloading

## Deployment

The website is ready for deployment to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

## Customization

### Colors
Update CSS custom properties in `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --accent-color: #f59e0b;
    /* ... other colors */
}
```

### Content
Update content directly in `index.html` or create a content management system.

### Styling
Modify `styles.css` for design changes. The CSS is organized by sections for easy maintenance.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Optimized CSS with minimal redundancy
- Efficient JavaScript with event delegation
- Service Worker for caching
- Preloaded critical resources
- Debounced scroll and resize events

## Testing

The project includes comprehensive unit tests for key functionality:

- **Utility Functions**: Tests for email validation, form validation, and notification icons
- **Performance Utilities**: Tests for debounce and throttle functions
- **Service Worker**: Tests for service worker registration and error handling
- **Resource Preloading**: Tests for resource preloading functionality

To run the tests:

```bash
npm test
```

To add more tests, create new test files in the `tests/unit/` directory.

## Contact Form

The contact form includes:
- Client-side validation
- User-friendly error messages
- Success notifications
- Responsive design

Note: Backend integration required for actual email sending.

## License

This project is created for Andy Mahieu (isandy.be). All rights reserved.