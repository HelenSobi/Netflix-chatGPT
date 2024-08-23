import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './store/appStore.jsx';
import App from './App.jsx'
import './index.css'
import Browse from './pages/Browse.jsx'
import Home from './pages/Home.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  // {
  //   path:"/home",
  //   element:<Home/>,
  // },
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
