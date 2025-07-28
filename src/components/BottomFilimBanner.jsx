import bg1 from "../assets/banners/banner1.jpeg";

export default function BottomFilimBanner() {
  return (
    <div className="relative bg-gray-1 text-white  text-center h-[600px]">
      <div
        className="absolute inset-0  bg-cover bg-bottom bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
        }}
      > </div>
    

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
        <h2 className="text-3xl font-bold mb-4">WEDDING STORY</h2>
        <p className="mb-6">
          At Sketch Wedding, passion and creativity drive everything we
          do. Our team is dedicated to capturing stunning, emotion-filled
          moments that you’ll cherish forever. When you choose us, you’re not
          just getting photographers—you’re getting a team that is professional,
          timely, attentive, and truly passionate about their craft.
        </p>
        <a
          href="https://www.youtube.com/embed/sEjPczAi29I"
          className="bg-yellow-500 text-gray-800 px-6 py-3 rounded hover:bg-yellow-400 transition"
        >
          View Films
        </a>
      </div>
    </div>
  );
}



