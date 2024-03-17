import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ModalsProvider from "./context/ModalsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import Login from "./pages/auth/Login";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/home/Home";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <ModalsProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </ModalsProvider>
    </Provider>
  );
}
