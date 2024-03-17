import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ModalsProvider from "./context/ModalsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import Login from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ModalsProvider>
        <RouterProvider router={router} />
      </ModalsProvider>
    </React.StrictMode>
  );
}
