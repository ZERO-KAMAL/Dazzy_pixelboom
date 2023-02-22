import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "remixicon/fonts/remixicon.css";
// Import Swiper styles

import "swiper/css/bundle";

import "./style/main.scss";

import { Provider } from "react-redux";
import { store } from "./redux/Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
