# GameHub

A modern React-based game discovery application that allows users to browse, search, and filter video games using real-time data from the RAWG Video Games Database API.

## Overview

GameHub is a responsive web application that provides an intuitive interface for discovering video games. Users can explore games by genre, platform, search for specific titles, and sort results based on various criteria. The app features a clean, modern design with dark/light mode support and smooth animations.

## Key Features

### 🔍 **Smart Search & Filtering**
- **Real-time Search**: Search for games by title with instant results
- **Keyboard Shortcut**: Press `Ctrl + F` to quickly focus the search bar
- **Genre Filtering**: Browse games by specific genres (Action, RPG, Strategy, etc.)
- **Platform Selection**: Filter games by gaming platforms (PC, PlayStation, Xbox, Nintendo)
- **Advanced Sorting**: Sort games by name, rating, release date, popularity, and more

### 🎮 **Game Discovery**
- **Rich Game Cards**: Each game displays high-quality images, platform icons, and critic scores
- **Rating System**: Visual emoji-based rating system (😐 for 3/5, 👍 for 4/5, 🎯 for 5/5)
- **Metacritic Integration**: Shows critic scores for each game
- **Platform Indicators**: Clear visual indicators showing which platforms each game is available on

### 🌙 **User Experience**
- **Dark/Light Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Smooth skeleton loading animations while data loads
- **Error Handling**: Graceful error handling with user-friendly messages

### 📱 **Mobile-Friendly**
- **Adaptive Layout**: Genre sidebar automatically hides on smaller screens
- **Touch-Optimized**: All interactive elements are touch-friendly
- **Responsive Grid**: Game grid adapts to different screen sizes (1-4 columns based on screen width)

## Technology Stack

### **Frontend Framework**
- **React 18.2.0** - Modern React with hooks and functional components
- **TypeScript 4.9.3** - Type-safe JavaScript development
- **Vite 4.5.14** - Fast build tool and development server

### **UI Framework & Styling**
- **Chakra UI 3.21.0** - Modern component library with excellent accessibility
- **Emotion 11.14.0** - CSS-in-JS styling solution
- **React Icons 5.5.0** - Comprehensive icon library

### **State Management & Data Fetching**
- **React Hooks** - Built-in state management with useState and useEffect
- **Axios 1.10.0** - HTTP client for API requests
- **Custom Hooks** - Reusable logic for data fetching and state management

### **Utilities & Libraries**
- **Lodash 4.17.21** - Utility library for common operations
- **Next Themes 0.4.6** - Theme management for dark/light mode

### **Development Tools**
- **TypeScript** - Static type checking
- **Vite** - Fast development and build tooling
- **Vite TSConfig Paths** - Absolute import path resolution

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Chakra UI customizations)
│   ├── GameCard.tsx    # Individual game display card
│   ├── GameGrid.tsx    # Grid layout for games
│   ├── NavBar.tsx      # Navigation bar with search
│   ├── GenreList.tsx   # Genre filtering sidebar
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useGames.ts     # Game data fetching logic
│   ├── useGenres.ts    # Genre data fetching
│   └── ...
├── services/           # API and utility services
│   ├── api-client.ts   # Axios configuration
│   └── image-url.ts    # Image optimization utilities
├── assets/             # Static assets (images, icons)
└── data/               # Static data files
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## API Integration

The application integrates with the **RAWG Video Games Database API** to fetch real-time game data. The API provides:
- Comprehensive game information
- High-quality game images
- Genre and platform metadata
- Critic scores and ratings
- Search and filtering capabilities

## Key Components

### **GameCard**
Displays individual game information including:
- Game screenshot
- Platform availability icons
- Metacritic score
- Rating emoji
- Game title

### **SearchBar**
- Real-time search functionality
- Keyboard shortcut support (Ctrl + F)
- Responsive design with search icon

### **GenreList**
- Sidebar navigation for genre filtering
- Loading skeleton states
- Active state highlighting

### **PlatformDropDown**
- Multi-platform selection
- Platform icons for visual clarity
- Clear selection option

### **SortDropDown**
- Multiple sorting options
- User-friendly labels
- Default relevance sorting

## Responsive Design

The application uses Chakra UI's responsive system:
- **Mobile**: Single column layout, hidden sidebar
- **Tablet**: Two column layout with sidebar
- **Desktop**: Multi-column grid with full sidebar
- **Large screens**: Up to 4-column game grid

## Performance Features

- **Image Optimization**: Cropped and optimized game images for faster loading
- **Skeleton Loading**: Smooth loading states instead of blank screens
- **Lazy Loading**: Efficient data fetching with React hooks
- **Error Boundaries**: Graceful error handling and recovery

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal project for learning and demonstration purposes. The codebase showcases modern React development practices, TypeScript usage, and responsive design principles.

---

Built with ❤️ using React, TypeScript, and Chakra UI
