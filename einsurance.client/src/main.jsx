import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
// // import Layout from './Layout.jsx';
// // import GetStartedPage from './components/GetStarted/GetStartedPage.jsx';
// // import Questiondetails from './components/QuestionDetails/Questiondetails.jsx';
// import Login from './components/Login/Login.jsx';
// import SignUp from './components/SignUpPage/SignUp.jsx';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' >
//       <Route path='' element={<SignUp/>}></Route>
//       <Route path='' element={<Questiondetails/>}></Route>

      
//     </Route>


//   )
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
