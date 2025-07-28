import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import HeroCarousel from './components/HeroCarousel'; 
import AboutUsBrief from './components/AboutUsBrief';
import WeddingStorySection from './components/WeddingStorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
      <Navbar />
      <HeroCarousel />
      <AboutUsBrief />
      <WeddingStorySection />
      <About />
      {/* Add Gallery, Services, etc. */}
      <Footer />
    </div>
  );
}

export default App;
