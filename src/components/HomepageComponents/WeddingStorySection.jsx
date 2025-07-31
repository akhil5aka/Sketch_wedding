export default function WeddingStorySection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-ceter md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
            Our Wedding Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Every wedding has a unique story, and we are here to tell yours. Our
            team captures the essence of your love story, from the first glance
            to the last dance. We believe in creating a narrative that reflects
            your journey together, filled with emotions, laughter, and
            unforgettable moments.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With a focus on authenticity and creativity, we blend candid
            photography with artistic videography to create a comprehensive
            visual story of your special day. Let us help you preserve the magic
            of your wedding for years to come.
          </p>
        </div>

        <div className="animate-slide-right md:w-1/2 w-full">
          <iframe
            className=" w-full h-69 md:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/sEjPczAi29I"
            title="Sample Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

