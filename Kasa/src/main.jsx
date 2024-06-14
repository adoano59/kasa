import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
const Layout = () => (
  <>
    <Logo /><Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
