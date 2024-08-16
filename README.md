# CrystalCove Hotel Management System HMS

## Introduction

The Hotel Management System (HMS) is a web-based application designed to streamline hotel operations and enhance the guest experience. It provides users with an intuitive interface to manage bookings, payments, and room availability, while offering admins powerful tools for creating and managing rooms.

## Demo

You may watch the following video demo:


> Or you can try the live demo yourself [here](https://upskilling-hms-crystalcove.netlify.app/).

## Features

### User Authentication and Authorization

- **User Authentication:** Secure login and registration system to manage user access.
- **User Roles:** Differentiated user roles, including Manager and Employee users, to control access levels within the application.

### Task Management

- **Browse Rooms:** Users can explore available rooms, filtering by room type, availability, and price.
- **Room Details:** View comprehensive room information, including pricing, available dates, and amenities.
- **Booking and Payment:** Users can seamlessly book rooms and make payments through a secure payment gateway.
- **Admin Dashboard:** Admins can create and manage rooms, including setting prices, availability, and uploading images.
  
### Dashboard

- **Admin Dashboard:** Create, edit, and delete rooms, as well as manage availability and pricing.
- **User Dashboard:** Access a list of marked favorite rooms for quick booking in the future.

## Project Structure

The project structure is as follows:

- `src/`: Source code for the application.
  - `assets/`: Static assets.
  - `components/`: Reusable components.
  - `contexts/`: React context for state management.
  - `hooks/`: Custom React hooks.
  - `layouts/`: UI layouts.
  - `pages/`: Application pages.
  - `types/`: TypeScript interfaces and types.
  - `utils/`: Utility functions.
- `public/`: Static assets.
- `.eslintrc.cjs`: ESLint configuration.
- `index.html`: Entry point for the application.
- `package.json`: Project metadata and dependencies.

- ## Technologies Used

- **React.js:** For building the user interface.
- **React-hook-form:** For form validation.
- **Mui** For styling.
- **React Toastify:** For toast notifications.
- **React Icons:** For icons.
- **Context API:** For managing application state across components.
- **React-Pro-Sidebar:** For sidebar.
- **Chart.js:** For dashboard charts.
- **Framer-motion:** For drag and drop animation.

## Skills and Techniques Covered

- **React Development**: Utilizing functional components, hooks (e.g., `useState`, `useEffect`, `useContext`), and `the context API` for state management across the application.

- **Routing and Navigation**: Implemented client-side routing using `react-router-dom` with route protection to manage navigation between different parts of the application.

- **Form Handling and Validation**: Leverageing `react-hook-form` for efficient form handling and validation, ensuring a smooth user experience when submitting data.

- **API Integration**: Used `axios` for making HTTP requests to protected and public endpoints, as seen in the [`apiProtected`](src/utils/api.ts) and [`apiPublic`](src/utils/api.ts) utilities.

- **Custom Hooks**: Showcases the creation and use of `custom hooks` (e.g., [`usePieChartData`](src/components/ui/Charts.tsx)) to encapsulate and reuse logic across components.

- **Error Handling and Notifications**: Implements error handling strategies and user notifications using `sonner`, enhancing the user interface and experience.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- A modern web browser

### Installation

To get the application running locally on your machine, follow these steps:

1. Clone the repo

   ```sh
   git clone https://github.com/Farahat612/UpskillingEG-Pr02-HMS
   ```

2. Change directory

   ```shell
   cd UpskillingEG-Pr02-HMS
   ```

3. Install dependencies

   ```shell
   npm install
   ```

4. Start the development server

   ```shell
   npm run dev
   ```

5. Visit `http://127.0.0.1:5173/` in your browser.

## Acknowledgment

> This applicetion was developed and built as part of UpSkillingEG `frontend job simulation bootcamp`, following their `Figma` design guidelines and `API` docs.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
