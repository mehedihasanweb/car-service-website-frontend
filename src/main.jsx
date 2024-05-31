import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Toast from "./utils/Toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toast />
    </AuthProvider>
  </React.StrictMode>
);
