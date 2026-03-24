import { useParams } from "react-router-dom";
import { useRef } from "react";

export default function StoryGallery() {
  const { slug } = useParams();

   const galleryRef = useRef(null);

  // Define image count or filenames manually per slug
  const imageFilenames = [
    "j11.jpeg",
    "j12.jpeg",
    "j13.jpeg",
    "j14.jpeg",
    "j15.jpeg",
    "j16.jpeg",
    "j17.jpeg",
    "j18.jpeg",
    "j110.jpeg",
    "j111.jpeg",
    "j112.jpeg",
    "j113.jpeg",
    "banner.jpeg",
    // Add more if needed
  ];

    const handleScrollToGallery = () => {
       
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
        <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-4"
         style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/Stories/${slug}/banner.jpeg)`,
          backgroundRepeat: "no-repeat",
        }}
        >
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 tracking-wider">
                    {slug.replace(/-/g, " ").toUpperCase()}
                </h2>
                <button 
                  onClick={handleScrollToGallery}
                  className="py-4 px-8 text-lg font-serif font-bold text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                    VIEW ALL IMAGES
                </button>
            </div>
        </div>

      <div 
        ref={galleryRef}
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 p-6 space-y-6"
      >
        {imageFilenames.map((filename, index) => (
          <img
            key={index}
            src={`/Stories/${slug}/${filename}`}
            alt={`Story Image ${index + 1}`}
            className="w-full break-inside-avoid rounded-lg shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-zoom-in"
          />
        ))}
      </div>
    </div>
  );
}
