import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AlbumReducer from './reducers/AlbumReducer';
import AlbumContainer from './containers/AlbumContainer';

const store = createStore(
  AlbumReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <AlbumContainer />
  </Provider>,
  document.body.appendChild(document.createElement('div')),
);
