import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ClothesProvider from "./store/ClothesProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClothesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClothesProvider>
);
