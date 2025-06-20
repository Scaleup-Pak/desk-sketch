# Desk-Sketch

## Features

- Modern React & Next.js architecture
- Fully responsive design
- Multiple pre-built pages (Homepage, Contact, etc.)
- Reusable components (Sliders, Cards, Layouts)
- Custom styling with CSS/SCSS
- Line Awesome icon integration
- Bootstrap framework integration
- RTL support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Sala-Nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
Sala-Nextjs/
├── .next/               # Next.js build output
├── .vscode/             # VSCode configuration
├── components/          # Reusable React components
│   ├── elements/        # Basic UI elements
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   └── slider/          # Slider components
├── pages/               # Application pages
├── public/              # Static assets
│   ├── assets/          # Images, fonts, etc.
│   │   ├── css/         # CSS files
│   │   ├── images/      # Image files
│   │   ├── libs/        # Third-party libraries
│   │   └── scss/        # SCSS source files
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── jsconfig.json        # JavaScript configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Available Pages

- Homepage (`/`) - Main landing page
- Contact pages (`/contact-01`, `/contact-02`, `/contact-03`) - Different contact page layouts
- 404 error page (`/404`) - Custom not found page
- Coming soon page (`/coming-soon`) - Under construction page

## Components

### Layout Components
- Header - Top navigation
- Footer - Bottom section with links and information
- CanvasMenu - Off-canvas mobile navigation

### Elements
- BlogMasonary - Masonry-style blog layout
- BackToTop - Button to scroll back to top
- CounterUp - Animated number counter
- LeafletMap - Interactive maps
- QuantityInput - Input with increment/decrement
- SwitchDarkLight - Light/dark mode toggle

### Slider Components
- CryptoTestimonialSlider - Testimonial slider with customer reviews
- Other slider components for showcasing content

## Customization

You can customize the template by:

1. Modifying the SCSS files in `/public/assets/scss/`
2. Editing component files in `/components/`
3. Creating new pages in `/pages/`
4. Adding new assets to `/public/assets/`


## License
