import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Root from './root'
import configureStore from './store/store'
import { saveState } from "./store/localStorage";

// import * as serviceWorker from './serviceWorker';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore()
  store.subscribe(() => {
    saveState(store.getState())})

    window.getState = store.getState
  const root = document.getElementById("root")
  ReactDOM.render(<Root store={store}/>, root)
})
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
