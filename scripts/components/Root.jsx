import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from '../redux/reducers/Root';
import App from './Containers/App';

const store = createStore(RootReducer);

/**
 * This is the root component for the react code
 */
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
