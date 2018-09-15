import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import reducer from "./store/reducer";
const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
