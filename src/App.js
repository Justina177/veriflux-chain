import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import IssueCertificate from './pages/issueCertificate/IssueCertificate';
import VerifyCertificate from './pages/verifyCertificate/VerifyCertificate';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/issue-certificate" element={<IssueCertificate />} />
      <Route path="/verify-certificate" element={<VerifyCertificate />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      
    </Router>
  );
}

export default App;
