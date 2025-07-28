import img1 from '../../assets/sk1.jpeg';
import img2 from '../../assets/sk2.jpeg';
import img3 from '../../assets/sk3.jpeg';

export default function WeddingSection() {
  return (
    <section className="bg-[#fefcf9] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="md:flex md:justify-between md:items-start mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Capturing Timeless Wedding Moments
            </h2>
          </div>
          <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              A wedding is a collection of priceless moments that deserve to be cherished forever.
              While life doesn’t have a rewind button, wedding photography ensures you relive your
              special day over and over again. At Sketch Wedding, we specialize in capturing
              the beauty, emotions, and joy of your big day, preserving them as if they happened
              just yesterday.
            </p>
            <p className="font-medium text-gray-800">
              Best Wedding Photography in Kerala – Kochi – Bangalore | India | UK | Dubai <br />
              Destination Wedding Photography | Candid & Traditional Wedding Films
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src={img1} alt="Wedding 1" className="rounded-md shadow-md object-cover w-full h-80" />
          <img src={img2} alt="Wedding 2" className="rounded-md shadow-md object-cover w-full h-80" />
          <img src={img3} alt="Wedding 3" className="rounded-md shadow-md object-cover w-full h-80" />
        </div>
      </div>
    </section>
  );
}
