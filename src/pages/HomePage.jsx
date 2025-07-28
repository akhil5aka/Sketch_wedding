import HeroCarousel from '../components/HomepageComponents/HeroCarousel'; 
import AboutUsBrief from '../components/HomepageComponents/AboutUsBrief';
import WeddingStorySection from '../components/HomepageComponents/WeddingStorySection';
import BottomFilimBanner from '../components/HomepageComponents/BottomFilimBanner';
import WorksShowcase from '../components/HomepageComponents/WorksShowcase';
import About from '../components/HomepageComponents/About';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutUsBrief />
      <WeddingStorySection />
      <BottomFilimBanner />
      <WorksShowcase />
      <About />
    </>
  );
}
