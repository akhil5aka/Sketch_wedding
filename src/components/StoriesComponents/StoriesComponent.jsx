import {stories} from "../../../public/Stories/StoryList";
import { Link } from "react-router-dom";
export default function StoriesComponent() {
    return (
        <div className="bg-[#fefcf9] py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-8">Every Photo Tells a Story</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        At Sketch Wedding, we believe that every love story is unique and deserves to be told in a way that reflects the personalities and emotions of the couple. Our journey began with a passion for storytelling through photography and videography, capturing the essence of love in its purest form.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        With years of experience in the industry, our team is dedicated to creating timeless memories that couples can cherish forever. We take pride in our attention to detail, creativity, and commitment to excellence, ensuring that every moment is captured beautifully.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {stories.map((story) => (
                        <Link key={story.slug} to={`/story/${story.slug}`} className="group block">
                            <div className="overflow-hidden rounded-lg shadow-sm">
                                <img
                                    src={story.image}
                                    alt={story.couple}
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="mt-6 text-xl font-serif font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                {story.couple}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{story.date}</p>
                        </Link> 
                    ))}
                </div>
            </div>
        </div>
    );
}



