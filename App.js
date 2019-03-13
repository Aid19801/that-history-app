import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './src/containers/home';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
)

export default App;