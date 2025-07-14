# Modern Portfolio Website

A sleek, minimal portfolio website built with React, TypeScript, and Tailwind CSS. Features modern 2025 design aesthetics with smooth animations, dark/light mode, and responsive design.

## ✨ Features

- **Modern Design**: Clean, minimal interface with 2025 design aesthetics
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Interactive Components**: Hover effects, smooth scrolling, and interactive elements

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **React Intersection Observer** - For scroll-based animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Experience.tsx  # Experience section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main App component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`)
   - Change "Your Name" to your actual name
   - Update the title and description
   - Modify the call-to-action buttons

2. **About Section** (`src/components/About.tsx`)
   - Update the about text
   - Change the statistics
   - Add your photo (replace the placeholder)

3. **Skills Section** (`src/components/Skills.tsx`)
   - Modify the skill categories and levels
   - Add or remove skills as needed

4. **Projects Section** (`src/components/Projects.tsx`)
   - Add your actual projects
   - Update project descriptions and technologies
   - Add real project links

5. **Experience Section** (`src/components/Experience.tsx`)
   - Update work experience
   - Modify education information

6. **Contact Section** (`src/components/Contact.tsx`)
   - Update contact information
   - Add your social media links

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update fonts in `tailwind.config.js` and `public/index.html`
- **Animations**: Adjust animation settings in the component files

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure your domain

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your changes

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/your-repo-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the framework

---

Made with ❤️ by [Your Name] 