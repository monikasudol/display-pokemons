import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './state';
import rootSaga from './state/saga';

const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
  sagaMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...reduxMiddlewares)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
