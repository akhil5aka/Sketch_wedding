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

        <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center object-cover px-4 py-8"
         style={{
          backgroundImage: `url(/src/assets/Stories/${slug}/banner.jpeg)`,
          backgroundRepeat: "no-repeat",
        }}
        >
            <div>
                <h2 className="text-4xl  font-serif font-bold text-white mb-4  px-4 py-4">
                    {slug.replace(/-/g, " ").toUpperCase()}
                </h2>
                <button 
                  onClick={handleScrollToGallery}
                className="py-4 px-4 me-7 mb-4 ml-20 text-lg font-serif font-bold bg-offwhite rounded-sm border-2 border-gray-100 hover:bg-brown-700 text-white hover:text-white">
                    view all images
                </button>
               
            </div>

        </div>



      <div 
      ref={galleryRef}
       className="columns-1 sm:columns-2 md:columns-3 lg-columns-5 gap-6 p-4 space-y-2">
        
        {imageFilenames.map((filename, index) => (
          
          <img
          key={index}
            src={`/src/assets/Stories/${slug}/${filename}`}
            alt={`Story Image ${index + 1}`}
            className="w-full mb-4 object-cover rounded-md shadow hover:scale-105 transition-transform duration-300"
          />
        

        ))}



        
      </div>

    </div>
  );
}
