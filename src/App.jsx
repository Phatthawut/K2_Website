import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './main-page/HomePage'
import ButtomMenu from './components/ButtomMenu'
import ProjectPage from './main-page/ProjectPage'
import ProjectDetail from "./main-page/detail-page/ProjectDetailPage";
import NavBarProject from './components/NavBarProject'
import ContentCreationPage from './main-page/ContentCreationPage'
import BrandingPage from './main-page/BrandingPage'
import EventPage from './main-page/EventPage'
import TotalSolutionPage from './main-page/TotalSolutionPage'
import DigitalPage from './main-page/DigitalPage'
import BrandingNongmonPage from './main-page/detail-page/BrandingNongmonPage'
import BrandingPDFPage from './main-page/detail-page/BrandingPDFPage'
import BrandingHopeSpotPage from './main-page/detail-page/BrandingHopeSpotPage'
import BrandingHatyaiJazzPage from './main-page/detail-page/BrandingHatyaiJazzPage'
import ContentBangseanPage from './main-page/detail-page/ContentBangseanPage'
import ContentPDFPage from './main-page/detail-page/ContentPDFPage'
import ContentDGAPage from './main-page/detail-page/ContentDGAPage'
import ContentHopePage from './main-page/detail-page/ContentHopePage'
import EventHopeSpotEMPage from './main-page/detail-page/EventHopeSpotEMPage'
import EventHopeSpotWSPage from './main-page/detail-page/EventHopeSpotWSPage'
import EventBMWPage from './main-page/detail-page/EventBMWPage'
import EventHealthFestivalPage from './main-page/detail-page/EventHealthFestivalPage'
import TotalPDFPage from './main-page/detail-page/TotalPDFPage'
import TotalHopeSpotPage from './main-page/detail-page/TotalHopeSpotPage'
import TotalKaesapuePage from './main-page/detail-page/TotalKaesapuePage'
import WebAppPDFMainPage from './main-page/detail-page/WebAppPDFMainPage'
import WebAppPDFMiniPage from './main-page/detail-page/WebAppPDFMiniPage'
import WebAppCarbonPointPage from './main-page/detail-page/WebAppCarbonPointPage'
import WebAppHopespotPage from './main-page/detail-page/WebAppHopespotPage'


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
          path: "/Nongmon",
          element: <BrandingNongmonPage />
        },
        {
          path: "/PDF-ERC",
          element: <BrandingPDFPage />
        },
        {
          path: "/Hope-Spot",
          element: <BrandingHopeSpotPage />
        },
        {
          path: "/Hatyai-Jazz",
          element: <BrandingHatyaiJazzPage />
        },
        {
          path: "/Bangsean",
          element: <ContentBangseanPage />
        },
        {
          path: "/PDF-Content",
          element: <ContentPDFPage />
        },
        {
          path: "/DGA-Content",
          element: <ContentDGAPage />
        },
        {
          path: "/Hope-Spot-Content",
          element: <ContentHopePage />
        },
        {
          path: "/Hope-Spot-Event-mini-concert",
          element: <EventHopeSpotEMPage />
        },
        {
          path: "/Hope-Spot-Event-workshop",
          element: <EventHopeSpotWSPage />
        },
        {
          path: "/BMW-Event",
          element: <EventBMWPage />
        },
        {
          path: "/Health-Festival-Event",
          element: <EventHealthFestivalPage />
        },
        {
          path: "/PDF-Total-Solution",
          element: <TotalPDFPage />
        },
        {
          path: "/Hope-Spot-Total-Solution",
          element: <TotalHopeSpotPage />
        },
        {
          path: "/Kaeng-Saphue-Total-Solution",
          element: <TotalKaesapuePage />
        },
        {
          path: "/PDF-Mainsite-Website",
          element: <WebAppPDFMainPage />
        },
        {
          path: "/PDF-Minisite-Website",
          element: <WebAppPDFMiniPage />
        },
        {
          path: "/Hopespot-InformativeWeb-Website",
          element: <WebAppHopespotPage />
        },
        {
          path: "/Hopespot-CarbonPoint-WebApp",
          element: <WebAppCarbonPointPage />
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