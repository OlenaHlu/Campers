#  Camper Rental App
This is a web application for camper rental, developed using React, Redux (Redux Toolkit), and TypeScript. It allows users to browse a catalog of campers, apply filters by location, equipment, and vehicle type, add campers to their favorites, and view detailed information about each camper.


## Features
* **Catalog View:** Browse available campers with pagination (Load More functionality).
* **Filtering:**
    * **By Location:** Search for campers in specific cities.
    * **By Vehicle Equipment:** Filter by the presence of AC, automatic transmission, kitchen, TV, bathroom, microwave, etc.
    * **By Vehicle Type:** Filter by camper type (Van, Fully Integrated, Alcove).
* **Detailed View:** Access comprehensive information about each camper, including a gallery, reviews, price, and features.
* **Favorites:** Ability to add and remove campers from a personal favorites list.
* **Contact/Booking Form:** A booking/inquiry form available on the camper details page.


## Pages
* **Home Page**:
    * The landing page of the application.
    * Provides a welcoming introduction to the camper rental service.
    * (Optionally: Can include a brief overview or call to action for the catalog).
* **Catalog Page**:
    * Displays a comprehensive list of available campers.
    * Features a sidebar with filtering options (location, equipment, vehicle type).
    * Includes a "Load more" button for infinite scrolling/pagination.
    * Each camper card allows adding/removing from favorites.
* **Camper Details Page**:
    * Accessed by clicking "Show more" on a camper card.
    * Presents detailed information about a specific camper, including multiple images, features, price, and reviews.
    * Contains a booking/inquiry form for contacting the service.
* **Favorites Page**:
    * Shows a curated list of campers that the user has marked as favorites.
    * Allows users to easily view and manage their preferred camper options.
* **Not Found Page**:
    * A custom 404 page displayed when a user navigates to an unknown route.

## Technologies Used
* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript, enhancing code reliability.
* **Redux (Redux Toolkit):** A state management library for predictable and centralized data management.
* **React Router DOM:** For declarative routing and navigation within the application.
* **Axios:** A promise-based HTTP client for making API requests.
* **CSS Modules:** For local scoping of CSS to prevent style conflicts.
* **Clsx:** A tiny utility for constructing `className` strings conditionally.
* **MockAPI.io:** Used as a backend for storing camper and review data.

## Author
Hlushenkova Olena
