import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import UserContext from './context/UserContext.jsx';
import Home from './components/Home.jsx';
import PriviteRoute from './route/PriviteRoute.jsx';
import List from './components/List.jsx';

const router = createBrowserRouter([

{

  path: '/',
  element: <Root></Root>,
  children: [
    {


      path: '/',
      element:<Home></Home>
    },
{

  path: '/login',
  element: <Login></Login>
},

{


  path:'/signup',
  element: <SignUp></SignUp>
},
{

  path: '/list',
  element: <PriviteRoute>  <List></List> </PriviteRoute>
},
{


  path: '/profile',
  element: <PriviteRoute   > <h1>This is profile</h1> </PriviteRoute>
},
{


  path: '/about',
  element: <PriviteRoute   > <p>This is about section</p> </PriviteRoute>
}


  ]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<UserContext>
<RouterProvider  router={router} ></RouterProvider>

</UserContext>
  </React.StrictMode>,
)
