import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import PhotosProvider, { PhotosContext } from "./contexts/PhotosContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PhotosProvider>
        <App />
      </PhotosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
