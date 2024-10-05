import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './main-page/HomePage'
import ButtomMenu from './components/ButtomMenu'
import ProjectPage from './main-page/ProjectPage'
import OWBandingPage from './main-page/OWBandingPage'
import ProjectDetail from "./main-page/ProjectDetail";
import NavBarProject from './components/NavBarProject'


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
          path: "/OWB",
          element: <OWBandingPage />
        },
        {
          path: "/Project",
          element: <ProjectPage />
        },
        {
          path: "/ProjectDetail",
          element: <ProjectDetail />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

{ /* set 2 difference menu
  <>
  {location.pathname === '/' && <NavBar />}
  {location.pathname === '/Project' && <NavBarProject />}
  <Outlet />
  <ButtomMenu />
  <Footer />
  </>
*/}