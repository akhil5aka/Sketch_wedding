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
import StoriesPage from './pages/StoriesPage'; // Importing the StoriesPage component
import StoryGallary from './components/StoriesComponents/StoryGallary'; // Importing the StoryGallary component


import { HashRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import Footer from './components/Footer';


function LayoutWrapper({ children }) {
  const location = useLocation();

  const isStoryGallery = location.pathname.startsWith("/story/");

  return (
    <>
      <Navbar hideBackground={isStoryGallery} />
      {children}
    </>
  );
}



function App() {
  return (
  


      <Router>
      <div>
        {/* <Navbar /> Always visible */}
        <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/story/:slug" element={<StoryGallary />} />
          {/* Add other routes as needed */}
        </Routes>
        </LayoutWrapper>

        <Footer /> {/* Always visible */}
      </div>
    </Router>
  );
}

export default App;
