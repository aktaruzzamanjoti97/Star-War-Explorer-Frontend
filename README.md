# Star Wars Explorer

A modern web application for exploring the Star Wars universe, built with Next.js 15, React 19, and Express.js.

## 🌟 Features

- **Character Browser**: Browse through all Star Wars characters with pagination
- **Advanced Search**: Search characters by name with intelligent debouncing (500ms delay)
  - Automatic search as you type
  - Loading indicators during search
  - Clear button to reset search
- **Detailed Character Profiles**: View comprehensive information about each character including:
  - Basic information (birth year, gender, homeworld)
  - Physical characteristics (height, weight, eye color, hair color)
  - Film appearances
  - Vehicles and starships
  - Species information
- **Modern UI**: Beautiful, responsive design with Star Wars themed styling
- **Performance Optimized**: 
  - Server-side caching and optimized data fetching
  - Debounced search to reduce API calls
  - React Query for intelligent client-side caching
- **TypeScript**: Full type safety across the application

## 🚀 Tech Stack

### Frontend
- **Next.js 15**: Latest version with App Router
- **React 19**: Latest React features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **ShadCN UI**: Modern component library
- **Tanstack Query**: Powerful data fetching and caching
- **Lucide Icons**: Beautiful icon set


## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git

## 🛠️ Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/star-wars-explorer.git
cd star-wars-explorer
```

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local

# Start the development server
npm run dev
```

The frontend application will start on `http://localhost:3000`

## 🏗️ Project Structure

```
star-wars-explorer/

└── frontend/
    ├── src/
    │   ├── app/           # Next.js app directory
    │   │   ├── layout.tsx # Root layout
    │   │   ├── page.tsx   # Home page
    │   │   └── character/[id]/page.tsx # Character detail page
    │   ├── components/    # React components
    │   │   ├── ui/       # ShadCN UI components
    │   │   ├── CharacterCard.tsx
    │   │   ├── SearchBar.tsx
    │   │   └── Pagination.tsx
    │   ├── lib/          # Utilities and API
    │   │   ├── api.ts    # API service
    │   │   └── utils.ts  # Helper functions
    │   └── types/        # TypeScript definitions
    │       └── index.ts  # Type definitions
    ├── public/           # Static assets
    ├── next.config.js    # Next.js configuration
    ├── tailwind.config.ts # Tailwind configuration
    ├── tsconfig.json     # TypeScript configuration
    └── package.json      # Frontend dependencies
```

## 📦 Available Scripts

### Frontend

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔧 Configuration

### Frontend Configuration

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🎨 UI Components

The application uses ShadCN UI components with custom styling:

- **Button**: Customizable button component
- **Card**: Container component for content
- **Input**: Form input component
- **Tabs**: Tabbed interface component
- **Badge**: Label/tag component
- **Skeleton**: Loading placeholder component


## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Star Wars API (SWAPI) for providing the data
- Lucasfilm Ltd. for creating the Star Wars universe
- The open-source community for the amazing tools and libraries

May the Force be with you! 🌟