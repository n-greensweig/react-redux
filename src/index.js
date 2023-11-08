import React from 'react';
import ReactDOM from 'react-dom/client';

// Step 1: import Provider, applyMiddleware, combineReducers, createStore, logger
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
// End Step 1

import App from './components/App/App';
import './index.css';

// Create a reducer (a variable that we can share across components) to store a counter
//     name    value = initial value    action
// The count equals the value of our return statement
const count = (state = 0, action) => {
  if (action.type === 'INCREASE') {
    return state + 1; // ! NOT state += 1
  } else if (action.type === 'DECREASE') {
    return state - 1;
  } else if (action.type === 'RESET') {
    return 0;
  }
  // Returning state means the reducer is
  // unchanged
  return state;
};

const listName = (state = '', action) => {

  if (action.type === 'SET_LIST_NAME') {
    // We pass our new list name via action.payload
    return action.payload;
  }

  // ! Reducers must always return state by default
  return state;
};

// Reducer
const bookList = (state = [], action) => {
  // TODO - set book list with data from server
  return state;
}

// Step 2: create your store (boilerplate code)
const reduxStore = createStore(
  combineReducers({
    // Only part of this code block that changes
    bookList,
    count,
    listName
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 3: Wrap your App in a provider */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
