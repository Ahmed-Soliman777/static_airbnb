import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/login', element: <Login /> },

        // Add experience routing here
        { path: "/experience", element: <Experience /> },

        // Add services routing here
        // { path: '/service', element: ----},
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
