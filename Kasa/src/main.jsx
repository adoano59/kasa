import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Fiche from "./pages/Fiche";
import Footer from "./components/Footer";
import Error from './components/Error';
const Layout = () => (
  <>
   <div className="BarHeader"><Logo /><Navbar />
   </div> 
   
   <Outlet />
   <Footer />
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
      },
      {
        path: "/logement/:id",
        element: <Fiche />
      }, 
       {
        path: "*",
        element: <Error />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
