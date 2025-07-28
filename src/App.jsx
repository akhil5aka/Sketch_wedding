import Hero from './components/Hero';
import Navbar from './components/HomepageComponents/Navbar';


import About from './components/HomepageComponents/About';
import HeroCarousel from './components/HomepageComponents/HeroCarousel'; 
import AboutUsBrief from './components/HomepageComponents/AboutUsBrief';
import WeddingStorySection from './components/HomepageComponents/WeddingStorySection';
import BottomFilimBanner from './components/HomepageComponents/BottomFilimBanner';
import WorksShowcase from './components/HomepageComponents/WorksShowcase';

import Home from "./pages/HomePage";
import AboutPage from './pages/AboutPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
  


      <Router>
      <div>
        <Navbar /> {/* Always visible */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer /> {/* Always visible */}
      </div>
    </Router>
  );
}

export default App;
