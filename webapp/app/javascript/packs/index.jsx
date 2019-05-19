import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AlbumReducer from './reducers/AlbumReducer';
import AlbumContainer from './containers/AlbumContainer';
import AlbumShowContainer from './containers/AlbumShowContainer';

import { BrowserRouter, Route, Link } from 'react-router-dom'

const store = createStore(
  AlbumReducer,
  applyMiddleware(thunk)
);

// ToDo routingをindex.jsと分離する
// 
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={AlbumContainer} />
      <Route path='/:id' component={AlbumShowContainer} />
    </div>
  </BrowserRouter>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div')),
);
