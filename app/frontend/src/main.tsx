import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.scss";

// Font Awesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faMountainSun,
  faPersonHiking,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { faMap, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faLocationDot,
  faMap,
  faMountainSun,
  faPaperPlane,
  faTag,
  faPersonHiking,
  faInstagram,
  faFacebookF,
  faXTwitter,
  faLinkedin
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
