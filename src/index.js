import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import "font-awesome/css/font-awesome.min.css";

import App from "./Appy";
import registerServiceWorker from "./registerServiceWorker";

import reducer from "./store/reducer";

import bgImage from "./assets/img/bgRepeat.png";

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%"

          // backgroundImage: "url(" + bgImage + ")",
          // backgroundRepeat: "repeat-y",
          // backgroundSize: "100%"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          opacity: ".55"
        }}
      />
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
