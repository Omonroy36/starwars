
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//import your own components
import Layout from "./layout";

import 'jquery';
import 'popper.js';
import 'bootstrap';

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#root"));