# Weather React App

A simple, responsive weather application built with React that fetches real-time weather data for cities using the OpenWeatherMap API. Users can search for cities, view temperature, humidity, wind speed, and weather icons, with error handling and loading states.

## Features
- Search for weather by city name (button or Enter key).
- Displays temperature, city name, weather icon, humidity, and wind speed.
- Error handling for invalid cities or API issues.
- Loading indicator during data fetches.
- Responsive design with a clean UI.

## Technologies Used
- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Icons**: React Icons 5.5.0
- **Linting**: ESLint 9.39.1 (with React hooks and refresh plugins)
- **API**: OpenWeatherMap (external, requires API key)
- **Other**: Node.js (for development), @vitejs/plugin-react (for Vite integration)

## Setup and Installation
1. Clone or download the project.
2. Install dependencies: `npm install`
3. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api).
4. Create a `.env` file in the root directory and add: `VITE_API_KEY=your_api_key_here`
5. Start the development server: `npm run dev`
6. Open `http://localhost:5173` in your browser.

## Usage
- Enter a city name in the search box and click the search icon or press Enter.
- View weather details or error messages below the input.
- The app shows a "Search for a city..." prompt when no input is provided and no errors occur.

## Scripts
- `npm run dev`: Start development server with hot reload.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint for code quality.
- `npm run preview`: Preview the production build.

## Contributing
Feel free to fork and submit pull requests for improvements.

## License
This project is for educational purposes. Check OpenWeatherMap's terms for API usage.