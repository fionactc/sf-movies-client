## Aftership Code Challenge Backend track - Movies in San Francisco (Client)
This is a web application that let users search and see where movies have been filmed in San Francisco. This is the client side code repo.

Live Demo: [HERE](https://evening-ocean-41110.herokuapp.com/)

Server Side Repo: [HERE](https://github.com/fionactc/sf-movies-server)

### Technical Choices
- ReactJS: for frontend view. I have around 3 months experience on React.
- Redux-React: separate state and controller logic
- Google Map React: Map react component

React is chosen because I intend to decouple front end and back end and do client-side rendering so that map marker location can be shown on map without reloading.

### Project structure
```
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js // Main App Component
    ├── App.test.js
    ├── MapMarker.js // Map Marker Component
    ├── actions.js
    ├── index.css
    ├── index.js
    ├── reducers.js
    └── registerServiceWorker.js
```

### Trade-offs discussion and future Todos
As this assignment is for backend track, these items are left out due to time constraint:
- Simple front end. `App.js` can be decoupled into smaller components (e.g. `Map.js`, `ControlMenu.js` and `AutoComplete.js`)
- Location search result should be linked in `MapMarker` hover effect for better user experience
- More error message display
- Add test coverage
- Better commit messages
- Use environment variable for `ROOT_URL` to server
