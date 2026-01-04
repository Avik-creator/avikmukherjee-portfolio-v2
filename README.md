# Avik Mukherjee - Portfolio v2

![Portfolio Preview](https://avikmukherjee.me/og-image.webp)

A modern, performant portfolio website built with Next.js 16, featuring interactive experiments, a blog, project showcases, and professional experience timeline. Built with clarity, performance, and shipping in mind.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist interface with smooth animations
- 📝 **MDX Blog** - Write blog posts with MDX support for interactive content
- 🧪 **Interactive Experiments** - Showcase of UI components and animations
- 💼 **Experience Timeline** - Visual representation of professional journey with interactive world map
- 🚀 **Projects Showcase** - Detailed project portfolio with live demos and source code
- 📄 **Resume** - Downloadable resume with structured sections
- 🌐 **SEO Optimized** - Built-in sitemap, robots.txt, and metadata
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎯 **Analytics** - Integrated Vercel Analytics and Speed Insights
- 🤖 **LLM Ready** - Special `/llms.txt` endpoints for AI crawlers
- 📞 **Cal.com Integration** - Embedded scheduling functionality
- 📧 **vCard Export** - Download contact information

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Content:** [MDX](https://mdxjs.com/)
- **Syntax Highlighting:** [Sugar High](https://github.com/huozhi/sugar-high) & Rehype Prism Plus
- **Data Visualization:** [D3.js](https://d3js.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** [Geist](https://vercel.com/font)
- **Deployment:** [Vercel](https://vercel.com)

## 📦 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (home)/            # Home page route group
│   ├── (llms)/            # LLM-specific endpoints
│   ├── about/             # About page
│   ├── blog/              # Blog posts
│   ├── experience/        # Work experience
│   ├── experiments/       # Interactive UI experiments
│   ├── projects/          # Projects showcase
│   ├── resume/            # Resume page
│   └── api/               # API routes
├── components/            # React components
│   ├── blog/             # Blog-specific components
│   ├── experiments/      # Experiment components
│   ├── footer/           # Footer components
│   ├── resume/           # Resume components
│   └── ui/               # Reusable UI components
├── content/              # MDX content
│   ├── blog/            # Blog posts
│   └── experiments/     # Experiment documentation
├── lib/                  # Utilities and data
│   ├── data/            # Data files (projects, experience, etc.)
│   ├── experiments/     # Experiment logic
│   └── utils/           # Utility functions
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Avik-creator/avikmukherjee-portfolio-v2.git
cd avikmukherjee-portfolio-v2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Key Features Explained

### Interactive Experiments

The experiments section showcases various UI components and animations:
- Animated Counter
- Magnetic Button
- Text Scramble Effect
- Typewriter Effect
- Spotlight Card
- Retro Window
- GitHub Stars Display
- And more...

### MDX Blog

Write rich, interactive blog posts using MDX with support for:
- Code syntax highlighting
- Custom components
- GitHub Flavored Markdown
- Table of contents auto-generation

### Experience Map

Interactive world map visualization showing work locations and experience timeline built with D3.js and TopoJSON.

### SEO & Metadata

- Dynamic Open Graph images
- Structured data
- Sitemap generation
- RSS feed
- Robots.txt configuration

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Avik-creator/avikmukherjee-portfolio-v2)

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

For other platforms, run `npm run build` and deploy the `.next` folder.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Avik-creator/avikmukherjee-portfolio-v2/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Avik Mukherjee**

- Website: [avikmukherjee.com](https://avikmukherjee.com)
- GitHub: [@Avik-creator](https://github.com/Avik-creator)
- LinkedIn: [Avik Mukherjee](https://linkedin.com/in/avik-mukherjee)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com)
- Animations powered by [Motion](https://motion.dev/)

---

⭐ Star this repo if you find it helpful!
