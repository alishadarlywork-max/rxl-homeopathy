# Remedy Excel - Specialists in Homeopathy Website

A modern, fully responsive homeopathy clinic website built with Next.js 14, TypeScript, and Tailwind CSS. Features SEO optimization, mobile-first design, and a professional healthcare interface.

## 🌟 Features

- **Modern Design**: Clean, professional healthcare website design
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, structured data, and search engine friendly
- **Fast Performance**: Next.js 14 with App Router for optimal speed
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Interactive Components**: Contact forms, testimonials carousel, and more

## 📱 Pages

- **Home**: Hero section, features, services overview, testimonials, CTA
- **About**: Doctor information, clinic details, values, and facility info
- **Services**: Comprehensive treatment categories and specializations
- **Contact**: Contact form, clinic hours, location, and FAQ section

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter)
- **Deployment Ready**: Vercel, Netlify, or any hosting platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
homeopathy-website/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── ContactForm.tsx
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── contact/            # Contact page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Colors
The website uses a green color scheme perfect for healthcare/natural healing. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Green color palette
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
    // ... more shades
  }
}
```

### Content
Update the following files to customize content:
- `app/components/Hero.tsx` - Main hero section
- `app/about/page.tsx` - About page content
- `app/services/page.tsx` - Services and treatments
- `app/contact/page.tsx` - Contact information
- `app/components/Footer.tsx` - Footer links and info

### Images
Replace placeholder images with your own:
- Hero images from Unsplash
- Doctor photos
- Clinic interior photos
- Service-related images

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and tested across different screen sizes.

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Hosting
1. Build: `npm run build`
2. Start: `npm start`
3. Deploy to your preferred hosting platform

## 📞 Contact Information

Update the contact information in the following files:
- `app/components/Footer.tsx`
- `app/contact/page.tsx`
- `app/components/Navbar.tsx`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is created for educational and commercial use. Feel free to customize and use for your homeopathy clinic or healthcare practice.

## 🤝 Support

For support or questions about customization, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)

---

**Built with ❤️ for natural healing and holistic healthcare practices.**
