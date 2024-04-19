//import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
//import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUpPage/SignUp';
import EnterEmail from './components/SignUpPage/EnterEmail';
import EnterPassword from './components/SignUpPage/EnterPassword';
import EnterPhoneNumber from './components/SignUpPage/EnterPhoneNumber';
// import PolicyResult from './Components/GetPolicy/PolicyResult';
// import FilterResult from './Components/GetPolicy/FilterResult';
//import Summary from './components/FilterPolicy/Summary';
import FilterResult from './components/FilterPolicy/FilterResult';
import ViewDetail from './components/FilterPolicy/ViewDetail';

function App() {
 
    return (
        <div className='App'>
            <Router>
                    <Link to="Login"></Link>
            <Routes>
                  <Route path='/' element={<Login/>}></Route>
                  <Route path='/SignUp' element={<SignUp/>}></Route>
                 
                  <Route path='/EnterEmail' element={<EnterEmail/>}></Route>

                  <Route path='/EnterPassword' element={<EnterPassword/>}></Route>
                  <Route path='/EnterPhoneNumber' element={<EnterPhoneNumber/>}></Route>
                  <Route path='/FilterResult' element={<FilterResult/>}></Route>
                  <Route path='/ViewDetail' element={<ViewDetail/>}></Route>

                  {/* <Route path='/PolicyResult' element={<PolicyResult/>}></Route>
                  <Route path='/FilterResult' element={<FilterResult/>}></Route> */}
            </Routes>
            </Router>
        </div>
    );
    

}

export default App;