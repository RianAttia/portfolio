# Nordic Minimalist Portfolio Website

A clean, modern portfolio website built with Next.js and React, featuring a Nordic minimalism design aesthetic. Perfect for showcasing your projects, skills, and connecting with potential collaborators.

## ✨ Features

- **Nordic Minimalism Design**: Clean, spacious layout with neutral colors and minimal decorations
- **Responsive Design**: Fully responsive and optimized for all device sizes
- **Multiple Pages**: Home, About, Projects, and Contact pages
- **Smooth Interactions**: Hover effects and smooth transitions throughout
- **Modern Stack**: Built with Next.js 14, React 18, and CSS3
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast & Performant**: Optimized for speed and user experience

## 📁 Project Structure

```bash
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.jsx         # Root layout with Header & Footer
│   ├── page.jsx           # Home page
│   ├── about/
│   │   └── page.jsx       # About page
│   ├── projects/
│   │   └── page.jsx       # Projects showcase page
│   └── contact/
│       └── page.jsx       # Contact form page
├── components/
│   ├── Header.jsx         # Navigation header
│   └── Footer.jsx         # Footer with links
├── styles/
│   ├── globals.css        # Global styles & design system
│   ├── layout.css         # Layout utilities
│   ├── header.css         # Header styles
│   ├── footer.css         # Footer styles
│   └── components.css     # Component styles
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

1. Start the development server:

   ```bash
   npm run dev
   ```

1. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Design System

The design system uses CSS custom properties for easy customization:

### Colors

- **Primary**: White, Black
- **Accent**: Blue (#1a73e8)
- **Neutrals**: Gray scale from 50 to 900

### Spacing

- xs (0.5rem), sm (1rem), md (1.5rem), lg (2rem), xl (3rem), 2xl (4rem)

### Typography

- Clean sans-serif font stack
- Light to bold weight options
- Optimized font sizes for readability

### Customization

Edit `/styles/globals.css` to customize colors, spacing, and typography:

```css
:root {
  --color-accent: #1a73e8; /* Change accent color */
  --color-gray-600: #757575; /* Adjust neutral colors */
  --font-size-lg: 1.125rem; /* Modify font sizes */
}
```

## 📝 Customization Guide

### Update Personal Information

1. **Header/Footer**: Edit links in `components/Header.jsx` and `components/Footer.jsx`
2. **Social Links**: Update URLs in `components/Footer.jsx` and `app/contact/page.jsx`
3. **Projects**: Modify the `projectsData` array in `app/page.jsx` and `allProjects` in `app/projects/page.jsx`
4. **About Content**: Update text in `app/about/page.jsx`
5. **Contact Email**: Change email in `app/contact/page.jsx`

### Add More Pages

1. Create a new folder in `app/` directory
2. Add `page.jsx` with your content
3. Update navigation in `components/Header.jsx`

### Modify Colors

Update CSS variables in `styles/globals.css`:

```css
--color-accent: YOUR_COLOR;
--color-gray-600: YOUR_COLOR;
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

The website will be live in seconds!

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Heroku
- Railway
- etc.

Run `npm run build` and follow your platform's deployment instructions.

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- Mobile: < 640px
- Tablet: < 768px
- Desktop: 768px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Readable font sizes

## 📚 Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **CSS3** - Styling with custom properties
- **JavaScript/JSX** - Interactive components

## 🤝 Contributing

Feel free to fork and customize this template for your own use!

## 📄 License

This project is open source and available for personal and commercial use.

## 💡 Tips

- Regularly update your projects section with new work
- Keep descriptions concise and impactful
- Use high-quality project screenshots/previews (add them to a public folder)
- Customize the color scheme to match your personal brand
- Test on mobile devices before deploying

## 🐛 Troubleshooting

**Port 3000 already in use:**

```bash
npm run dev -- -p 3001
```

**Build errors:**

```bash
rm -rf .next node_modules
npm install
npm run build
```

**Changes not reflecting:**

- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Restart the development server

## 📞 Support

For more information on Next.js, visit the [official documentation](https://nextjs.org/docs).

---

Built with ❤️ using Nordic minimalism principles.
