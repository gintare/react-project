import { useState, createContext } from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import { getDefaultToken } from './assets/service';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Menu from './pages/Menu.jsx';
import SignupPage from './pages/SignupPage.jsx';
import Order from './pages/Order.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';

export const UserContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
    errorElement: <ErrorPage />,
    children: [
       {
        path: "/signup",
        element: <SignupPage />
       },
       {
        path: "/order",
        element: <Order/>
       },
       {
        path: "/login",
        element: <Login />
       },
       {
        path: "/logout",
        element: <Logout />
       }
    ]

  },
]);

function App() {
  const [useToken, setUseToken] = useState(getDefaultToken());

  return (
    <>
    <UserContext.Provider value={{ useToken, setUseToken }}>
    {console.log("useToken = "+useToken)}
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>}></RouterProvider>
    </UserContext.Provider>
    </>
  )
}

export default App
