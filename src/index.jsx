// index.jsx is defined as the entry-point for webpack

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// <App/> component is rendered to react-app-root div in the DOM.  <App/> is the top-level parent react component
ReactDOM.render(
   <App/>,
  document.getElementById('react-app-root')
);