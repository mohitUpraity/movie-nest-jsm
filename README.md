# Movie-Nest

A modern movie search and trending app built with **React**, **Vite**, **TailwindCSS**, and **Appwrite**. Search thousands of movies, view trending titles, and enjoy a fast, responsive UI.

## Features

- 🔍 **Search**: Find movies using TMDB API.
- 📈 **Trending**: See the top searched movies (tracked via Appwrite).
- 🎬 **Movie Cards**: View details like rating, language, and release year.
- ⚡ **Fast UI**: Powered by Vite and TailwindCSS.
- 🌀 **Loading Spinner**: Smooth loading experience.
- 🗄️ **Appwrite Integration**: Trending data stored and retrieved from Appwrite.

## Screenshots

![Search UI](public/hero.png)
![Trending Section](public/hero-bg.png)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/movie-nest-jsm.git
   cd movie-nest-jsm
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   - Copy `.env.local` and update with your TMDB and Appwrite credentials.

4. **Start the development server:**

   ```sh
   npm run dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
├── public/           # Static assets (images, icons)
├── src/
│   ├── components/   # React components (MovieCard, Search, Spinner)
│   ├── App.jsx       # Main app logic
│   ├── appwite.js    # Appwrite API integration
│   ├── main.jsx      # Entry point
│   └── index.css     # Tailwind & custom styles
├── .env.local        # Environment variables
├── package.json      # Scripts & dependencies
├── vite.config.js    # Vite configuration
├── eslint.config.js  # ESLint configuration
└── README.md         # Project documentation
```

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

## Environment Variables

Set these in `.env.local`:

```
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_TABLE_ID=your_appwrite_table_id
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

MIT

---

Made with ❤️ by [Mohit Upraity]
