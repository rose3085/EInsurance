import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx';
import GetStartedPage from './components/GetStarted/GetStartedPage.jsx';
import Questiondetails from './components/QuestionDetails/Questiondetails.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUpPage/SignUp.jsx';
import EnterEmail from './components/SignUpPage/EnterEmail.jsx';
import EnterPhoneNumber from './components/SignUpPage/EnterPhoneNumber.jsx';
import EnterPassword from './components/SignUpPage/EnterPassword.jsx';
import FilterResult from './components/FilterPolicy/FilterResult.jsx';
import ViewDetail from './components/FilterPolicy/ViewDetail.jsx';
import About from './components/Aboutus/About.jsx';
import Insurancepolicy from './components/Insurance/Insurancepolicy.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<GetStartedPage/>}></Route>
      <Route path='Questiondetails' element={<Questiondetails/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='SignUp' element={<SignUp/>}></Route>
      <Route path='EnterEmail' element={<EnterEmail/>}></Route>
      <Route path='EnterPhoneNumber' element={<EnterPhoneNumber/>}></Route>
      <Route path='EnterPassword' element={<EnterPassword/>}></Route>
          <Route path='FilterResult' element={<FilterResult />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='insurance' element={<Insurancepolicy />}></Route>
          <Route path="/ViewDetail/:companyName" element={<ViewDetail/>}></Route>
    </Route>


  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
