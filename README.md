# 🔥 Pokédx - Modern Pokémon Explorer

<div align="center">

![Pokédx Logo](./public/Logo.png)

**Discover, search and explore the amazing world of Pokémon!**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PokeAPI](https://img.shields.io/badge/PokeAPI-RESTful-yellow?style=for-the-badge)](https://pokeapi.co/)

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🐛 Report Bug](../../issues) • [✨ Request Feature](../../issues)

</div>

## ✨ Features

### 🏠 **Homepage**
- **Hero Section** with dynamic gradient background
- **Random Pokémon Generator** with dice animation
- **Smart Search Bar** with instant navigation
- **Featured Pokémon** - 4 randomly selected cards

### 📖 **Pokédx**
- **Advanced Search** by name or ID
- **Detailed Pokémon Pages** with complete stats
- **Official Artwork** integration
- **Type System** with color coding
- **Ability Information** including hidden abilities

### 🔥 **Type Explorer**
- **18 Pokémon Types** with emoji and colors
- **Type-specific Listings** (Fire, Water, Grass, etc.)
- **Interactive Type Badges** with hover effects
- **Type-based Navigation**

### 🎨 **Modern UI/UX**
- **Responsive Design** - Mobile-first approach
- **Loading States** - Pokéball animations for each section
- **Error Handling** - Custom 404 and error pages
- **Smooth Animations** - CSS transitions and transforms
- **Accessibility** - Focus states and semantic HTML

### ⚡ **Performance**
- **Server Components** - Fast data fetching
- **Static Generation** - Pre-rendered type pages
- **Image Optimization** - Next.js Image component
- **TypeScript** - Full type safety

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS |
| **Fonts** | Google Fonts (Jaldi, Jersey 10) |
| **API** | PokeAPI (RESTful) |
| **Deployment** | Vercel/Netlify Ready |

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── components/               # React Components
│   │   ├── client/              # Client Components
│   │   │   └── RandomButton.tsx
│   │   ├── server/              # Server Components  
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── FeaturedList.tsx
│   │   └── ui/                  # Reusable UI Components
│   │       ├── PokemonCard.tsx
│   │       ├── SearchForm.tsx
│   │       └── TypeBadge.tsx
│   ├── pokedex/                 # Pokédx Routes
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   └── [id]/
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── types/                   # Type Explorer Routes
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   └── [type]/
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── favourites/              # Favourites (Coming Soon)
│   ├── search-results/          # Search Results
│   ├── loading.tsx              # Global Loading
│   ├── not-found.tsx           # 404 Page
│   ├── error.tsx               # Error Boundary
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root Layout
│   └── globals.css             # Global Styles
├── lib/                         # Utilities & Data
│   ├── data/
│   │   ├── pokemon.ts          # API Functions
│   │   └── constants.ts        # Type Definitions
│   └── types/
│       └── pokemon.ts          # TypeScript Types
└── public/                     # Static Assets
    ├── Logo.png
    ├── Dice.svg
    ├── Search.svg
    ├── facebook.svg
    └── instagram.svg
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pokedex-nextjs.git
   cd pokedex-nextjs
   ```

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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript compiler
```

## 🎯 API Integration

This project uses the **free [PokeAPI](https://pokeapi.co/)** for all Pokémon data:

- **Base URL**: `https://pokeapi.co/api/v2/`
- **No API Key Required** ✅
- **Rate Limiting**: Respectful usage implemented
- **Endpoints Used**:
  - `/pokemon/{id}` - Individual Pokémon
  - `/pokemon-species/{id}` - Species info
  - `/type/{type}` - Pokémon by type

## 🎨 Design System

### Color Palette
- **Primary**: Purple to Blue gradient
- **Secondary**: Orange to Red gradient  
- **Types**: Each Pokémon type has unique colors
- **Backgrounds**: Subtle gradients and patterns

### Typography
- **Headers**: Jersey 10 (Google Fonts)
- **Body**: Jaldi (Google Fonts)
- **Code**: System monospace

### Components
- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Loading**: Custom Pokéball animations

## 🛣️ Roadmap

### Phase 1 ✅ (Current)
- [x] Homepage with hero section
- [x] Pokédx search and detail pages
- [x] Type explorer and filtering
- [x] Responsive design
- [x] Loading states and error handling

### Phase 2 🚧 (Coming Soon)
- [ ] **Favourites System** with localStorage
- [ ] **Advanced Filtering** (generation, stats, etc.)
- [ ] **Pokémon Comparison** side-by-side
- [ ] **Evolution Chains** visualization
- [ ] **Move Details** and descriptions

### Phase 3 🔮 (Future)
- [ ] **User Authentication** with NextAuth.js
- [ ] **Team Builder** for battle teams
- [ ] **Statistics Dashboard** with charts
- [ ] **PWA Support** for mobile installation
- [ ] **Dark Mode** toggle

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style
- **TypeScript** for all components
- **ESLint** configuration provided
- **Prettier** for code formatting
- **Conventional Commits** preferred

## 🐛 Known Issues

- [ ] Loading state occasionally flickers on fast connections
- [ ] Some Pokémon sprites may not load (PokeAPI limitation)
- [ ] Mobile navigation could be improved


## 🙏 Acknowledgments

- **[PokeAPI](https://pokeapi.co/)** - Amazing free Pokémon API
- **[Next.js Team](https://nextjs.org/)** - Incredible React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vercel](https://vercel.com/)** - Deployment platform
- **Nintendo/Game Freak** - Original Pokémon creators


<div align="center">

**Made with ❤️ and ⚡ by [Lorenzo Dastoli](https://github.com/yourusername)**

*Gotta catch 'em all!* 🔥💧🌱⚡

</div>