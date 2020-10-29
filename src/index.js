import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./styles/404.css";

import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

window.jQuery = window.$ = $;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals();
