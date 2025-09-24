import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Experience from "./Pages/Experience.jsx";
import Register from "./Pages/Register.jsx";
import Services from "./Pages/Services/Services";
import HelpCenter from "./Pages/HelpCenter/HelpCenter";

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
        { path: "/service", element: <Services /> },
        { path: "/service", element: <Services /> },
        { path: "/help", element: <HelpCenter /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
