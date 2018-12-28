import React, { Component } from 'react';
import Posts from './Posts';
import Postform from './Postform';
import Products from './Products';
import { Provider } from 'react-redux';
import store from '../store';

import '../css/reset.css';
import '../css/styles.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="react-app">
          <Products />
          <hr />
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    )
  }
}

export default App;