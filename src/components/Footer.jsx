import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <img src="/logo.png" alt="Sketch Wedding" className="h-10 mx-auto md:mx-0 mb-4" />
          <p className="text-gray-400 max-w-xs">
            Capturing the beauty, emotions, and joy of your big day, preserving them as if they happened just yesterday.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-serif uppercase tracking-widest">
          <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link to="/stories" className="hover:text-yellow-500 transition-colors">Stories</Link>
          <Link to="/films" className="hover:text-yellow-500 transition-colors">Films</Link>
          <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
        </div>

        <div className="text-center md:text-right">
          <h4 className="font-serif mb-2">Contact Us</h4>
          <p className="text-gray-400">info@sketchwedding.com</p>
          <p className="text-gray-400">+91 98765 43210</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sketch Wedding. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
