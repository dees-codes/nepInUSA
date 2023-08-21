import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Colleges from './components/colleges/Colleges';
import College from './components/colleges/College';
import { UserContextProvider } from './components/userContetx';
import NotFound from './components/Error/NotFound';
import StudentInfo from './components/StudentInfo/StudentInfo';
import MyAccount from './components/myaccount/MyAccount';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/contactus/ContactUs';
import Blog from './components/blog/Blog';
import Visa from './components/visa/visa';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import StudentProfilePage from './components/student/StudentProfilePage';
// eslint-disable-next-line no-unused-vars
import FacebookChat from './components/facebookChat/FacebookChat';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login userType="student" />} />
            <Route path="/register" element={<Register userType="student" />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/colleges/:id" element={<College />} />
            <Route path="/error" element={<NotFound />} />
            <Route path="/application" element={<StudentInfo />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route path="/admin/login" element={<Login userType="admin" />} />
            <Route path="/admin/register" element={<Register userType="admin" />} />
            <Route path="/student/:studentId" element={<StudentProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Header>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
