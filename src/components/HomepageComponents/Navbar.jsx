import React, { useState } from "react";
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

  const goToPrev = () => {
    setBgIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  const goToNext = () => {
    setBgIndex((prev) => (prev + 1) % bgImages.length);
  };

  // Just top navbar layout (no hero background)
  if (hideBackground) {
    return (
      <nav className="w-full bg-white shadowsm py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src="/logo.png" alt="Sketch Wedding" className="h-10" />
          <ul className="flex space-x-6 text-black font-serif text-lg">
            <li><a href="/" className="hover:text-green-500">Home</a></li>
            <li><a href="/about/" className="hover:text-green-500">About</a></li>
            <li><a href="/stories/" className="hover:text-green-500">Stories</a></li>
            <li><a href="/films/" className="hover:text-green-500">Films</a></li>
            <li><a href="/blog/" className="hover:text-green-500">Blog</a></li>
            <li><a href="/contact/" className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }

  // Full hero background navbar
  return (
    <nav
      className="relative w-full text-white transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${bgImages[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "600px",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 py-6 h-full relative flex flex-col justify-between z-10">
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          <img src="/logo.png" alt="Sketch Wedding" className="h-10" />
          <ul className="flex space-x-6 text-lg font-serif">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/about/" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="/stories/" className="hover:text-yellow-300 transition">Stories</a></li>
            <li><a href="/films/" className="hover:text-yellow-300 transition">Films</a></li>
            <li><a href="/blog/" className="hover:text-yellow-300 transition">Blog</a></li>
            <li><a href="/contact/" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Hero Text */}
        <div className="flex flex-col justify-center items-center h-64 text-center">
          <h1 className="text-5xl font-serif text-white mb-4">Capturing Love</h1>
          <p className="text-xl font-serif text-white">{bgMessages[bgIndex]}</p>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-3 rounded-full hover:bg-opacity-70 z-20 transition"
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-3 rounded-full hover:bg-opacity-70 z-20 transition"
      >
        ▶   
      </button>
    </nav>
  );
}
