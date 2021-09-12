import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Auth0Provider
    domain="dev-l-yx9bpu.us.auth0.com"
    clientId="wCub25oQgB7bRybqkUjpXLpOFTTtrEkU"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
