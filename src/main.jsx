import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>}> */}
  </React.StrictMode>,
)
