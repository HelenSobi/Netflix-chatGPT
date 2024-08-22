import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import {Provider} from 'react-redux';
import appStore from './utils/appStore.jsx';
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Browse from './components/Browse.jsx'
import Home from './components/Home.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // children:[
    //   {
    //     path:"/browse",
    //     element:<Browse/>,
    //   },
    // ],
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
