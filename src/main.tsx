import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="app">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);

export default App;
