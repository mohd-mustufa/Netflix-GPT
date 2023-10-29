# Netflix-GPT

This is a Netflix clone project with a wide range of features including user authentication, multi-language support, a Netflix-like user interface, a unique GptSearch feature for AI-powered movie and TV series recommendations, and more. It fetches data from the TMDB API and is hosted on Heroku.

## Features

1. User Authentication

- Users can create accounts or log in.
- Proper validation checks during sign-up and login.
- User data is stored in Firebase.
- Users can also log out of their accounts securely.

2. Multi-Language Support

- Currently supports 4 languages (English, Hindi, Kannada, Spanish).
- Users can easily switch between languages.

3. Netflix-Like UI

- The user interface closely resembles Netflix for a familiar and comfortable experience.
- Supports both large and small screens for a responsive design across multiple devices.

4. GptSearch (AI-Powered Search)

- Unique search feature integrated with AI.
- Users can enter their preferences for movies or TV series, and the system will provide suggestions and search results based on their input.

5. Movie Player

- Watch your favorite movies and TV series with the integrated player.
- Enjoy a seamless viewing experience with playback controls.

6. Data from TMDB API

- The project fetches movie and TV series data from the TMDB API to provide up-to-date information.

## Tech Stack

**HTML:** For the project's structure and layout.
**CSS and Tailwind:** For styling and responsive design.
**JavaScript and React:** For the dynamic and interactive components.
**Firebase:** For user authentication and data storage.
**Redux:** For state management.
**TMDB APIs:** For fetching movie and TV series data. The GptSearch feature utilizes Gpt APIs for the AI-powered recommendations.
**React Router:** Navigation within the app is managed using `react-router-dom` for a smooth user experience.
**Heroku:** For hosting the project.

## Usage

1. Clone the repository:

```
git clone https://github.com/mohd-mustufa/Netflix-GPT.git

```

2. Install dependencies:

```
cd netflix-clone
npm install
```

3. Create a Firebase project and configure it.

4. Obtain an API key from TMDB and add it to your project.

5. Start the development server:

```
npm start
```

6. Access the app in your web browser at http://localhost:3000.

## Live Demo

Check out the live demo hosted on Heroku: [NetflixGPT](https://netflixgpt-e12de.web.app/)

## Contributing

We welcome contributions from the open-source community. If you have any suggestions or improvements, feel free to create an issue or pull request.

<hr>

Feel free to reach out if you have any questions or need further assistance. Enjoy using the NetflixGPT with the integrated movie player and AI-powered features!
