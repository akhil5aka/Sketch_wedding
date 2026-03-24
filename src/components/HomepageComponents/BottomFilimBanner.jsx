import { Link } from "react-router-dom"
import bg1 from "../../assets/banners/banner1.jpeg"

export default function BottomFilimBanner() {
  return (
    <div className="relative bg-gray-900 text-white flex items-center justify-center min-h-[400px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      ></div>
    
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">WEDDING STORY</h2>
        <p className="mb-8 text-lg md:text-xl leading-relaxed">
          At Sketch Wedding, passion and creativity drive everything we
          do. Our team is dedicated to capturing stunning, emotion-filled
          moments that you’ll cherish forever. When you choose us, you’re not
          just getting photographers—you’re getting a team that is professional,
          timely, attentive, and truly passionate about their craft.
        </p>
        <Link
          to="/films"
          className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
        >
          View Films
        </Link>
      </div>
    </div>
  );
}



