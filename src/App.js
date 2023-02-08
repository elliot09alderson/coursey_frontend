import React from 'react';
import Home from './components/Home';
import Header from './components/Layout/Header/Header.jsx'
import Courses from './components/Courses/Courses';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import ResetPassword from './components/Auth/ResetPassword/ResetPassword';
import ForgetPassword from './components/Auth/ForgetPassword/ForgetPassword';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
// import Subscribe from './components/Payments/Subscribe/Subscribe';
import Subscribe from './components/Payments/Subscribe';
import PaymentsFail from './components/Payments/PaymentsFail';
import PageNotFound from './components/Layout/PageNotFound';
import PaymentsSucess from './components/Payments/PaymentsSucess';
import Request from './components/Auth/Request/Request';
import CoursePage from './components/CoursePage/CoursePage';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Profile from './components/Profile/Profile';

import './App.css'
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/Courses/AdminCourses';
import Users from './components/Admin/Users/Users';
function App() {
  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
  })
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/forgotpassword' element={<ForgetPassword/>}/>
      <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/request' element={<Request/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='/paymentsuccess' element={<PaymentsSucess/>}/>
      <Route path='/paymentfailed' element={<PaymentsFail/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/updateprofile' element={<UpdateProfile/>}/>
      <Route path='/course/:id' element={<CoursePage/>}/>

      {/* {<------------------- admin Routes ------------------>} */}

      <Route path='/admin/dashboard' element={<Dashboard/>}/>
      <Route path='/admin/createcourse' element={<CreateCourse/>}/>
      <Route path='/admin/courses' element={<AdminCourses/>}/>
      <Route path='/admin/users' element={<Users/>}/>



    </Routes>
    <Footer/>
  </Router>
}

export default App;
