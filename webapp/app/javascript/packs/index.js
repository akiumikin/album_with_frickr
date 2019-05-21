import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/Reducer';
import AlbumContainer from './containers/AlbumContainer';
import AlbumFormSelectContainer from './containers/AlbumFormSelectContainer';
import AlbumShowContainer from './containers/AlbumShowContainer';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const store = createStore(
  Reducer,
  applyMiddleware(thunk)
);

// ToDo routingをindex.jsと分離する
// https://github.com/akiumikin/album_with_frickr/issues/36
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={AlbumContainer} />
      <Route path='/new' component={AlbumFormSelectContainer} />
      <Route path='/edit/:id' component={AlbumFormSelectContainer} />
      <Route path='/:id' component={AlbumShowContainer} />
    </Switch>
  </BrowserRouter>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div')),
);
