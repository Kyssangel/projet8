import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Thumb from "../public/logements.json";
import Logement from'./pages/Logement.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/thumb/:id",
        element: <Thumb />,
      },
      {
        path: "/logement/:id",
        element: <Logement />
      },
 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
