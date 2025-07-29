import {stories} from "../../../public/Stories/StoryList";
import { Link } from "react-router-dom";
export default function StoriesComponent() {
    return (
        <div className="block-container block-single-text page-block ca-background-DNOwNm text-center">
        <div className="block-container__block max-w-7xl mx-auto px-6">
            <div className="container-fluid max-w-4px mx-auto px-6 py-12 mrg-auto">
            <h2 className="text-3xl font-serif text-center mb-8">Every Photo Tells a Story</h2>
            <p className="text-lg text-gray-700 mb-6">
                At Sketch Wedding, we believe that every love story is unique and deserves to be told in a way that reflects the personalities and emotions of the couple. Our journey began with a passion for storytelling through photography and videography, capturing the essence of love in its purest form.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                With years of experience in the industry, our team is dedicated to creating timeless memories that couples can cherish forever. We take pride in our attention to detail, creativity, and commitment to excellence, ensuring that every moment is captured beautifully.
            </p>
         
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 py-12 ">

{stories.map((story) => (
                <Link key={story.slug} to={`/story/${story.slug}`} className="group block mb-8">
                    <img
                        src={story.image}
                        alt={story.couple}
                        className="w-full h-80 object-cover rounded-md shadow hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-black tracking-wide">
                        {story.couple}
                    </h3>
                    <p className="text-sm text-gray-500">{story.date}</p>
                </Link> 
))}
            </div>
        </div>
        </div>
    );
    }




