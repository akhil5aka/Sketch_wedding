import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

export default function FilmsComponent() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12&type=video`
        );
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error.message);
        }

        const videoList = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          url: `https://www.youtube.com/embed/${item.id.videoId}`,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
        }));

        setFilms(videoList);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (API_KEY && CHANNEL_ID) {
      fetchVideos();
    } else {
      setError("YouTube API key or Channel ID is missing.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 px-4">
        <p className="text-red-500 text-xl font-serif">Something went wrong...</p>
        <p className="text-gray-600 mt-2">{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
          Our Wedding Films
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Every wedding is a cinematic journey. Explore our collection of 
          beautifully crafted wedding films that capture the heart of every story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {films.map((film) => (
          <div key={film.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="aspect-video relative">
               <iframe
                className="absolute inset-0 w-full h-full"
                src={film.url}
                title={film.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                 <h3 className="text-xl font-serif text-gray-800 mb-2 line-clamp-2" title={film.title}>
                  {film.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {film.description}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">FILM</span>
                <a 
                  href={`https://www.youtube.com/watch?v=${film.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 text-sm font-semibold transition"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
