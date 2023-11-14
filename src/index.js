import React from 'react';
import ReactDOM from 'react-dom/client';
import reduxStore from './store';

// Step 1: import Provider, applyMiddleware, combineReducers, createStore, logger
import { Provider } from 'react-redux';
// End Step 1

import App from './components/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 3: Wrap your App in a provider */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);