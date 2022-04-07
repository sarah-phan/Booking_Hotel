import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'antd/dist/antd.css';

import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const logger = ({ getState }) => {
  return next => action => {
    if (process.env.NODE_ENV === 'development') {
    }

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)
    
    if (process.env.NODE_ENV === 'development') {
      console.log('%c state after dispatch', 'background: #222; color: #bada55',
        getState())
        // getState().medical_incident?.detailMedicalIncident?.actionsTop)

      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
    }
    return returnValue
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();