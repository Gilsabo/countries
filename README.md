# Countries Information App

This project is a technical challenge for the Barcelona Activa IT Academy involving fetching and displaying country data from the [REST Countries API](https://restcountries.com/). The application allows users to view countries, search for specific countries, filter by region, and view detailed information about each country on a separate page. It also features responsive design and hover effects on interactive elements.

## Technologies Used

- **Frontend Framework:** React
- **API Fetching:** TanStack Query
- **Routing:** React Router
- **Testing Libraries:** React Testing Library, JSDOM, testing library jest-dom
- **Build Tool:** Vite
- **CSS Framework:** Tailwind CSS
- **Unit Testing:** Vitest
- **Deploy:** Netlify

## Features Implemented

- Display all countries from the REST Countries API on the homepage.
- Search functionality to find a specific country using an input field.
- Filter countries by region using a dropdown menu.
- Detailed view of each country on a separate page.
- Responsive design for mobile and desktop.
- Hover effect applied to all interactive elements.
- Unit tests to ensure code quality and functionality.

## Project Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Gilsabo/countries
   cd countries-information-app

2. **Install dependencies:**

   ```bash
   npm install
   
3. **Run the development server:**
   
   ```bash
   npm run dev
   
4. **Run unit tests:**

   ```bash
   npm run test

## Unit Tests

The unit tests cover the following aspects:

- Rendering of main components to ensure correct display.
- Validation of search and filtering logic for countries.
- Verification of proper handling and visualization of data fetched from the API.

## Optional Features and future plans

- Dark mode: Although not implemented in this version, the application could optionally support a dark mode feature.
- Refactoring
- Better error handling
- Extend testing for edge cases
- More appealing design
- Enhance the accessibility features of this application to ensure it can be used effectively by all users, including those with disabilities.
- Population Range Filter: Provide a slider or input fields to filter countries by population size
- Area Range Filter: Similar to the population filter, allow users to filter countries by their area in square kilometers
- Currency and Language Filter: Let users search for countries by their official currency or spoken languages
- Sorting Options: In addition to alphabetical sorting, add sorting options by population size, area, and population density
- Interactive Maps: Integrate a map API (such as Google Maps or Leaflet) to show the location of each country. You can highlight the country on the map when it is selected
- Country Comparison Tool: Enable users to compare two or more countries side by side in terms of population, area, GDP, etc
- Favorite Countries: Allow users to mark and save their favorite countries for easy access later
- Historical Data and Trends: If available, provide historical data and trends for metrics such as population growth or economic indicators
- Graphical Representations: Use charts and graphs to represent data like population distribution, GDP, and other statistics
- Climate Information: Include weather and climate data for each country, such as average temperatures, rainfall, and other relevant metrics
- Embassy and Diplomatic Information: Provide information on embassies and consulates, especially useful for travelers
- Travel Advisory and Safety Information: Incorporate current travel advisories and safety information for each country
- Localization and Multilingual Support: Offer your app in multiple languages to reach a broader audience
- Dark Mode: Add a dark mode for a better user experience, especially for those who use the app at night
- Accessibility Features: Ensure your app is accessible to users with disabilities by following accessibility guidelines and providing features like text-to-speech
- Offline Mode: Allow users to download country data for offline access
