# Deep Linking and Masonry Grid Project

This project is a Next.js application that demonstrates deep linking based on device type (Android/iOS/Desktop) and a Masonry Grid layout. The project fetches a redirect URL from an API and handles the redirection based on the device. Additionally, it includes a responsive Masonry Grid that dynamically arranges content.

## Features

1. **Deep Linking**
   * **Device-Specific Redirection**
     * **Android**: Attempts to open the link in the native app using `intent://` scheme. Falls back to the web version if the app is not installed.
     * **iOS**: Attempts to open the link in the native app using the regular URL scheme. Falls back to the web version if the app is not installed.
     * **Desktop**: Opens the link in a new tab.

2. **Masonry Grid Layout**
   * **Dynamic Content Arrangement**: The Masonry Grid layout allows for dynamically arranged cards with varying content types (image, text, link, etc.) and aspect ratios. The layout is fully responsive and adapts to different screen sizes.

## Getting Started

### Project Structure

- **/app**: Contains the main application components.
- **/redirect**: Handles the deep linking redirection logic.
- **/components**: Contains reusable components like the Masonry Grid.
- **/public**: Public assets like images, fonts, etc.

### Prerequisites

* **Node.js**: Ensure that you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
2. **Navigate to the Project Directory**
   ```bash
   cd masonryUiApp
3. **Install Dependencies**
   ```bash
   npm install

### Running the Project
  **Start the Development Server**
   ```bash
   npm install

