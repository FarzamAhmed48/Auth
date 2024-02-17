import React from 'react'
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Todo from './Todo';
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/SignUp",
    element: <Signup/>,
  },
  {
    path: "/Todo",
    element: <Todo/>,
  }
]);
const App = () => {

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App