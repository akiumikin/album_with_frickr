import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AlbumReducer from './reducers/Reducer';
import AlbumContainer from './containers/AlbumContainer';
import AlbumNewContainer from './containers/AlbumNewContainer';
import AlbumShowContainer from './containers/AlbumShowContainer';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const store = createStore(
  AlbumReducer,
  applyMiddleware(thunk)
);

// ToDo routingをindex.jsと分離する
// 
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={AlbumContainer} />
      <Route path='/new' component={AlbumNewContainer} />
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
