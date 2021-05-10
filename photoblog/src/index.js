import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";

import App from './App';
import reportWebVitals from './reportWebVitals';

{/*Provider is going to keep track of that store which is that global state and that
  allows us to access that store from anywhere inside of the app. We don't have to be exactly in a parent
  component or in a child component, we can access that state from anywhere.*/}

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
