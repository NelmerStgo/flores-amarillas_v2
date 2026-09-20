import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/global.css";
import "./styles/themes.css";
import "./styles/intro.css";
import "./styles/journey.css";
import "./styles/garden-environment.css";
import "./styles/art.css";

createRoot(
  document.getElementById("root")!,
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);