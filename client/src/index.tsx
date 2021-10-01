import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootSaga from "./redux/saga";
import { Provider } from "react-redux";
import user from "./redux/userReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from './redux/rootReducer';
import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware();



const store:any = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
