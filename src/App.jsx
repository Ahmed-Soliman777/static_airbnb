import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Experience from "./Pages/Experience.jsx";
import Register from "./Pages/Register.jsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/experience", element: <Experience /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
