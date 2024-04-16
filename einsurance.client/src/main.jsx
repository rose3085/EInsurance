import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx';
import GetStartedPage from './components/GetStarted/GetStartedPage.jsx';
import Questiondetails from './components/QuestionDetails/Questiondetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<GetStartedPage/>}></Route>
      <Route path='Questiondetails' element={<Questiondetails/>}></Route>

      
    </Route>


  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
