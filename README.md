# Weather App

## Overview

The Weather App is a React-based application designed to provide users with detailed weather information for various cities. It offers a streamlined experience by minimizing API calls and efficiently managing weather data using a caching mechanism.

## Features

- **Single API Call per City**: The application makes only one API call per city and saves the weather data in a cache. This data is then used for subsequent visits to the details page, avoiding multiple API calls.

- **Caching Mechanism**: 
    - The first 10 cities are cached, and when a user searches for a city, the app first checks the cache. If the city is already cached, the data is retrieved from the cache.
    - The cache is automatically flushed every hour to ensure up-to-date weather information.

- **Capital City Handling**: 
    - When a country is searched, the app fetches the weather data for the capital city via the API.
    - If the capital city is searched afterward, the system recognizes it and avoids redundant entries in the cache.

- **State Persistence**:
    - The app uses local storage to maintain its state. This ensures that weather data is preserved even if the app is closed and reopened, providing a seamless user experience.

- **Data Filtering**: 
    - The application filters the data received from the API to avoid overloading the client side with unnecessary information. This approach is particularly beneficial for larger-scale applications.

## Technologies Used
1. **[React](https://react.dev)**: For building the user interface.
2. **LocalStorage**: For caching and state persistence.
3. **[Weather API](https://rapidapi.com/weatherapi/api/weatherapi-com/)**: For fetching weather data.

## Installation
1. Clone the repository.
2. Navigate to the project directory:
3. Install dependencies: 
> npm install
4. Start the development server: 
> npm start

## Future Work
- **Enhance the UI**: Make the application more visually appealing using Bootstrap for styling and layout improvements.

