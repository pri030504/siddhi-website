# Faces by Siddhi - Professional Makeup Artist Portfolio

A luxurious, modern portfolio website for a professional makeup artist, built with React and Tailwind CSS. The site features an elegant, feminine aesthetic with smooth animations and creative image framing.

## ✨ Features

- **Premium Design** - Luxurious color palette with nudes, soft pinks, gold accents, and charcoal
- **Creative Portfolio Gallery** - Mixed frame shapes (circles, arches, tilted frames) with category filtering
- **Video Showcase** - Dedicated section for YouTube tutorials and transformations
- **Services & Pricing** - Elegant pricing cards for bridal, party, editorial makeup
- **Smooth Animations** - Framer Motion powered scroll-triggered animations
- **Fully Responsive** - Mobile-first design optimized for beauty clients
- **Social Integration** - Instagram and YouTube links prominently featured

## 🎨 Brand Identity

- **Brand Name**: Faces by Siddhi
- **Tagline**: "Enhancing beauty, one face at a time"
- **Instagram**: @facesbysiddhi
- **YouTube**: @Siddhijain9
- **Style**: Luxurious, feminine, confident, and editorial

## 🛠 Tech Stack

- **React 18** - Functional components with hooks
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Lightning-fast build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio_siddhi/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Fixed navigation with smooth scroll
│   │   ├── Hero.jsx             # Full-screen landing with animated text
│   │   ├── About.jsx            # Artist bio with editorial layout
│   │   ├── Portfolio.jsx        # Creative gallery with mixed frames
│   │   ├── VideoShowcase.jsx    # YouTube video section
│   │   ├── Services.jsx         # Pricing cards and packages
│   │   ├── WhyChooseMe.jsx      # Value propositions
│   │   ├── SocialProof.jsx      # Instagram & YouTube integration
│   │   ├── Contact.jsx          # Booking form
│   │   └── Footer.jsx           # Footer with links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                # Tailwind + custom styles
├── tailwind.config.js           # Custom color palette
├── postcss.config.js
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Color Palette

The site uses a custom color system defined in Tailwind config:

- **Nude**: #F5F1ED to #B09E8C (warm neutrals)
- **Blush**: #FDF5F7 to #E87DA2 (soft pinks)
- **Gold**: #FFFCF5 to #D4AF37 (luxury accents)
- **Charcoal**: #F7F7F7 to #141414 (elegant darks)
- **Ivory**: #FFFFFF to #FFF9E6 (pure whites)

## 📱 Sections

1. **Hero** - Full-screen introduction with CTA buttons
2. **About** - Professional bio with experience highlights
3. **Portfolio** - Filterable gallery with creative frames (Bridal, Party, Natural, Editorial)
4. **Video Showcase** - Featured YouTube tutorials and transformations
5. **Services** - Detailed pricing for Bridal, Party, Pre-wedding, and Editorial makeup
6. **Why Choose Me** - Premium products, personalized looks, hygiene, client satisfaction
7. **Social Proof** - Instagram and YouTube with follower stats
8. **Contact** - Booking form with service selection

## 🎯 Key Features

### Creative Image Frames
- Circular frames
- Arch-shaped containers (rounded corners)
- Tilted perspective cards
- Traditional rounded rectangles
- Hover effects with smooth zoom

### Animation System
- Scroll-triggered fade-ins
- Smooth hover transitions
- Floating decorative elements
- Page load animations
- Interactive button states

### Mobile Optimization
- Mobile-first responsive design
- Touch-friendly navigation
- Optimized image placeholders
- Simplified layouts on small screens

## 💅 Customization

### Update Brand Colors

Edit `tailwind.config.js`:

```js
colors: {
  blush: {
    // Your custom pink shades
  },
  gold: {
    // Your custom gold shades
  }
}
```

### Add Real Images

Replace SVG placeholders in:
- `Hero.jsx` - Main hero image
- `About.jsx` - About section image
- `Portfolio.jsx` - Portfolio item images
- `VideoShowcase.jsx` - Video thumbnails

### Customize Services

Update pricing and features in `Services.jsx`:

```js
const services = [
  {
    title: 'Your Service',
    price: '₹XX,XXX',
    features: ['Feature 1', 'Feature 2']
  }
]
```

## 📧 Contact Integration

The contact form is ready for integration with:
- EmailJS
- Formspree
- Custom backend API
- WhatsApp Business API

## 🚀 Deployment

Deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Configure in repository settings

## 📄 License

MIT License - Free to use for personal and commercial projects

## 💌 Contact

For questions or collaboration:
- Email: facesbysiddhi@gmail.com
- Instagram: [@facesbysiddhi](https://instagram.com/facesbysiddhi)
- YouTube: [@Siddhijain9](https://www.youtube.com/@Siddhijain9)

---

**Built with ✨ and passion for makeup artistry**
