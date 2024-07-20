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
