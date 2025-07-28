
import img1 from "../assets/Works/work1.jpeg";
import img2 from '../assets/Works/work4.jpeg';
import img3 from '../assets/Works/work3.jpeg';


export default function WorksShowcase() {   
    return (
        <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Works</h2>
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your work showcase items here */}
            <div className="bg-white p-4 rounded shadow">
                <img src={img1} alt="Work 1" className="w-full h-100% object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold">Wedding</h3>
                <p className="text-gray-600">The Big Day</p>
                </div>
            <div className="bg-white p-4 rounded shadow">

                <img src={img2} alt="Work 1" className="w-full h-100%object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold">Films</h3>
                <p className="text-gray-600">Creative Show</p>
                </div>
            <div className="bg-white p-4 rounded shadow">

                <img src={img3} alt="Work 1" className="w-full h-100% object-cover rounded mb-4" />
            
                <h3 className="text-xl font-semibold">Outdoors</h3>
                <p className="text-gray-600">Beginning of a journey</p>
            </div>
            {/* Repeat for more works */}
            </div>
        </div>
        </div>
    );
    }
    