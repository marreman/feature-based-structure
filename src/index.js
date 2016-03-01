import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import app from "./app";


const store = createStore(app.reducer);

ReactDOM.render(
  <Provider store={store}>
    <app.component />
  </Provider>,
  document.getElementById("app")
)
