import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import { appRoutes } from "./routes/AppRoutes.js";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {appRoutes}
    </Routes>
  </BrowserRouter>
);