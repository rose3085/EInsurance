import React from 'react'
import ReactDOM from 'react-dom/client'
/*import App from './App.jsx'*/
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
import { ChakraProvider } from '@chakra-ui/react';
import CompareResult from './components/FilterPolicy/CompareResult.jsx';
import ButtonPage from './components/Payment/ButtonPage.jsx';
import Khalti from './components/Payment/Khalti.jsx';
import PaymentResult from './components/Payment/PaymentResult.jsx';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import LoginVerify from './components/LoginVerify/LoginVerify.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<GetStartedPage/>}></Route>
      <Route path='Questiondetails' element={<Questiondetails/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
          <Route path='SignUp' element={<SignUp />}></Route>
          <Route path='Payment' element={<ButtonPage />}></Route>
          <Route path='Khalti' element={<Khalti />}></Route>
          <Route path='PaymentResult' element={<PaymentResult />}></Route>



      <Route path='EnterEmail' element={<EnterEmail/>}></Route>
      <Route path='EnterPhoneNumber' element={<EnterPhoneNumber/>}></Route>
      <Route path='EnterPassword' element={<EnterPassword/>}></Route>
          <Route path='FilterResult' element={<FilterResult />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='insurance' element={<Insurancepolicy />}></Route>
          <Route path='LoginVerify' element={<LoginVerify />}></Route>
          <Route path="/ViewDetail/:policyName" element={<ViewDetail/>}></Route>
          {/* <Route path='CompareResult' element={<CompareResult/>}></Route> */}
    </Route>


    )
)

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>,
)
