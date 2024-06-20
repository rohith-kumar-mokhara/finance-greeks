import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/auth/login';
import SignUp from './screens/auth/signUp';
import Home from './screens/pages/home/home';
import Footer from './ui-elements/footer/footer';
import Navbar from './ui-elements/navbar/navbar';
import ForgotPass from './screens/auth/forgotPass';
import Otp from './screens/auth/otp';
import UpdateRole from './screens/admin/updateRole/updateRole';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='signUp' element={<SignUp/>}/>
          <Route path='/forgotPass' element={<ForgotPass/>}/>
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/updateRole' element={<UpdateRole/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
