import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './main-page/HomePage'
import ButtomMenu from './components/ButtomMenu'
import ProjectPage from './main-page/ProjectPage'
import ProjectDetail from "./main-page/ProjectDetail";
import NavBarProject from './components/NavBarProject'
import ContentCreationPage from './main-page/ContentCreationPage'
import BrandingPage from './main-page/BrandingPage'
import EventPage from './main-page/EventPage'
import TotalSolutionPage from './main-page/TotalSolutionPage'
import DigitalPage from './main-page/DigitalPage'


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
          path: "/Total-Solution",
          element: <TotalSolutionPage />
        },
        {
          path: "/Storytelling",
          element: <ContentCreationPage />
        },
        {
          path: "/Digital",
          element: <DigitalPage />
        },
        {
          path: "/Events",
          element: <EventPage />
        },
        {
          path: "/Project",
          element: <ProjectPage />
        },
        {
          path: "/Branding",
          element: <BrandingPage />
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