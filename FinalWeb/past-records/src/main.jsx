import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Programs from './pages/Programs.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import About from './pages/About.jsx'

const router=createBrowserRouter([
{path:'/',
  element:<LandingPage></LandingPage>
},
{path:'/Programs',
  element:<Programs></Programs>
},
{path:'/ContactUsPage',
  element:<ContactUsPage></ContactUsPage>
},
{path:'/About',
  element:<About></About>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
