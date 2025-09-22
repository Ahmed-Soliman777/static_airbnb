import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'
// import Login from './Pages/login'

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/home', element: <Home /> },

        // Add experience routing here
        // { path: '/experience', element: ----},

        // Add services routing here
        // { path: '/service', element: ----},
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
