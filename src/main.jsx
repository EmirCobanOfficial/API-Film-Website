import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";
import UserContextProvider from "./contexts/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserContextProvider>
  </StrictMode>
);
