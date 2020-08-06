import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import allReducers from './redux/reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/rootSaga';
import history from './History';
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history} basename="/">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
