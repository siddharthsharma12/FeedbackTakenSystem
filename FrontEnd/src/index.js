import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import  store from "./CopyRedux/store";

ReactDOM.render (

  <React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);



