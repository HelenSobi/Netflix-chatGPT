import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import App from './App'
import Browse from './pages/Browse'
import Movies from './pages/Movies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/movies",
    element:<Movies/>,
  },
  {
    path:"/browse",
    element:<Browse/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={appStore}>
        <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
