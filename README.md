# MyReads Project

This is my Project 6: MyReads application based on the template provided by Udacity. The goal of this project was to implement the React code needed to satisfy the [requirements](https://review.udacity.com/#!/rubrics/918/view).

## Installation/Launch

* Install all project dependencies with npm install
* Start the development server with npm start

## Resources/References

I used the following resources, references, and documentation to assist me in my development:

* [React](https://reactjs.org/docs/react-without-es6.html)

* [reacttraining.com](https://reacttraining.com/react-router/web/api)

* [Webinar: MyReads (P6) Sept-23 walk-thru with @Forrest (FEND) - YouTube](https://www.youtube.com/watch?v=bpKI3R0nf7E)

* [Webinar: MyReads (P6 LONG) Sept-22 walk-thru with @RyanWaite.ProjectCoach [FEND, MWS] - YouTube](https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be)

* [w3schools.com](https://www.w3schools.com/jsref/jsref_trim_string.asp)

* [Conditionals](https://www.w3schools.com/js/js_comparisons.asp)

* [Array.prototype.filter()
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

* [How to comment in React JSX](https://wesbos.com/react-jsx-comments/)

## Project Tree
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── icons #Components folder containing implemented components
    │   ├── Books.js # The books component
    │   ├── BookSearch.js # The search page
    │   ├── MyBookShelf.js # The main page
    │   └── Shelf.js # The shelf component
    ├── App.css # Styles for the app. Provided.
    ├── App.js # The root of the app. Updated per requirements.
    ├── App.test.js # Used for testing. Provided with Create React App. Not part of the requirements.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only. Modified with BrowserRouter.
```

## Backend Server

To simplify the development process, Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods  needed to perform necessary operations on the backend.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is based on the starter code for _all_ Udacity students, and a demonstration of what I have learned about React. Therefore, I most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
