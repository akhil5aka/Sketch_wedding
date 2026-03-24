import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/background/bg1.jpeg';
import img2 from '../../assets/background/bg3.jpeg';
import img3 from '../../assets/background/bg4.jpeg';

const bgImages = [img1, img2, img3];
const bgMessages = [
  "Every Story Starts with a Smile",
  "Moments that Matter Forever",
  "Your Love, Our Lens, Eternal Memories"
];

export default function Navbar({ hideBackground = false }) {
  const [bgIndex, setBgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const goToPrev = () => {
    setBgIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  const goToNext = () => {
    setBgIndex((prev) => (prev + 1) % bgImages.length);
  };

  const NavLinks = ({ mobile = false }) => {
    const linkClass = mobile 
      ? "block py-2 text-lg hover:text-green-500 transition-colors" 
      : "hover:text-green-500 transition-colors";
    const heroLinkClass = mobile
      ? "block py-2 text-lg hover:text-yellow-300 transition-colors"
      : "hover:text-yellow-300 transition-colors";

    const currentClass = hideBackground ? linkClass : heroLinkClass;

    return (
      <>
        <li><Link to="/" onClick={() => setIsOpen(false)} className={currentClass}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)} className={currentClass}>About</Link></li>
        <li><Link to="/stories" onClick={() => setIsOpen(false)} className={currentClass}>Stories</Link></li>
        <li><Link to="/films" onClick={() => setIsOpen(false)} className={currentClass}>Films</Link></li>
        <li><Link to="/blog" onClick={() => setIsOpen(false)} className={currentClass}>Blog</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)} className={currentClass}>Contact</Link></li>
      </>
    );
  };

  // Just top navbar layout (no hero background)
  if (hideBackground) {
    return (
      <nav className="w-full bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="z-50">
            <img src="/logo.png" alt="Sketch Wedding" className="h-10" />
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-black font-serif text-lg">
            <NavLinks />
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 text-black" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
              <ul className="text-black font-serif text-2xl text-center space-y-4">
                <NavLinks mobile={true} />
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  }

  // Full hero background navbar
  return (
    <nav
      className="relative w-full text-white transition-all duration-700 ease-in-out min-h-[500px] md:h-[600px]"
      style={{
        backgroundImage: `url(${bgImages[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 py-6 h-full relative flex flex-col justify-between z-10 min-h-[500px] md:h-[600px]">
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          <Link to="/" className="z-50">
            <img src="/logo.png" alt="Sketch Wedding" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg font-serif">
            <NavLinks />
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 text-white" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
              <ul className="text-white font-serif text-2xl text-center space-y-4">
                <NavLinks mobile={true} />
              </ul>
            </div>
          )}
        </div>

        {/* Hero Text */}
        <div className="flex flex-col justify-center items-center flex-grow text-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">Capturing Love</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-serif text-white max-w-2xl">{bgMessages[bgIndex]}</p>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={goToPrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 md:p-3 rounded-full hover:bg-opacity-70 z-20 transition"
        aria-label="Previous Slide"
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 md:p-3 rounded-full hover:bg-opacity-70 z-20 transition"
        aria-label="Next Slide"
      >
        ▶   
      </button>
    </nav>
  );
}
