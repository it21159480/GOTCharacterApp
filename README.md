# GOTCharacterApp

GOTCharacterApp is a React Native application providing user authentication with Firebase. The app includes features like user registration, login, profile management, and persistent user sessions. The app uses React Native Paper for UI components, Firebase for authentication, Context API for state management, and the Game of Thrones Character API for displaying characters.


# Features

- User Registration
- User Login
- Profile Management
- Persistent User Sessions
- Search Functionality


## Demo

Check out the video demonstration of the application workflow [here](https://drive.google.com/file/d/1yIIEAaYIkGoGoWdlV1b2bDXPk82F-qkN/view?usp=sharing).

# Installation

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- React Native CLI installed
- Android Studio (for Android) or Xcode (for iOS)
- Firebase project setup

#### Firebase Setup

1. **Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).**
2. **Add an Android app to your Firebase project and download the `google-services.json` file.**
3. **Place the `google-services.json` file in the `android/app` directory.**
4. **Update the Firebase configuration in `AuthContext.js` with your Firebase project's details.**

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};
```
## Project Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MyAssignmentApp
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start the development server**
    ```bash
   npx react-native start
   ```
6. **Run the App**
   - For Android:
      ```bash
      npx react-native run-android
      ```
   - For iOS:
      ```bash
      npx react-native run-ios
      ```

# API Integration

The application fetches character data from the [Game of Thrones Character API](https://thronesapi.com/) and integrates it into the app. This data is then searchable within the app.

## State Management Approach

This project uses Context API for state management to efficiently handle the state of authentication and user information across the application.

### Why Context API?

Context API is a way to manage state globally, making it easier to share state across multiple components without having to pass props down manually at every level.

#### Benefits of Using Context API:

1. **Simplicity**: Provides a simpler and more straightforward way to manage global state compared to Redux.
2. **Flexibility**: Easy to set up and use for small to medium-sized applications.
3. **Lightweight**: No additional library needed, reducing the bundle size and complexity.

### How It’s Implemented:

1. **AuthContext**: The context that holds the state and functions related to authentication.
2. **AuthProvider**: The provider component that wraps the application and provides the context to its children.
3. **useContext Hook**: Used in functional components to access the context.

# Bonus Features

- **Persistent Storage**
  - User sessions are maintained using Firebase's authentication state persistence.
- **Visual Feedback**
  - The app uses React Native Paper's components for enhanced UI/UX.
- **Search Functionality**
  - Allows searching for characters by name, title, or family.
- **Basic Styling**
  - Basic styling and theming for a better user experience.

# Technologies Used

- **React Native**
- **Firebase Authentication**
- **React Native Paper**
- **Context API**

# Usage

1. **User Registration**
   - Navigate to the Sign Up screen, fill in the required details, and click "Sign Up".
2. **User Login**
   - Navigate to the Login screen, enter your credentials, and click "Sign In".
3. **Profile Management**
   - View and manage user profile information on the Profile screen.
4. **Search**
   - Use the search bar on the Welcome screen to filter characters by name, title, or family.

# Contributing

Contributions are always welcome! Please create a pull request or open an issue to discuss any changes.





# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
