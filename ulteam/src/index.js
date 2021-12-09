import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import  ulteamStore  from "./redux/ulteamStore"

ReactDOM.render(
  <Provider store={ulteamStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
