import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './main-page/HomePage'
import ButtomMenu from './components/ButtomMenu'
import OurWorkPage from './main-page/OurWorkPage'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <NavBar />
        <Outlet />
        <ButtomMenu />
        <Footer />
        </>
      ),
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "/OurWork",
          element: <OurWorkPage />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
