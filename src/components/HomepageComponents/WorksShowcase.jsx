import img1 from "../../assets/Works/work1.jpeg";
import img2 from '../../assets/Works/work4.jpeg';
import img3 from '../../assets/Works/work3.jpeg';


export default function WorksShowcase() {   
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Add your work showcase items here */}
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <img src={img1} alt="Wedding Work" className="w-full h-64 md:h-80 object-cover rounded mb-4" />
                        <h3 className="text-xl font-serif font-semibold">Wedding</h3>
                        <p className="text-gray-600">The Big Day</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <img src={img2} alt="Films Work" className="w-full h-64 md:h-80 object-cover rounded mb-4" />
                        <h3 className="text-xl font-serif font-semibold">Films</h3>
                        <p className="text-gray-600">Creative Show</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <img src={img3} alt="Outdoors Work" className="w-full h-64 md:h-80 object-cover rounded mb-4" />
                        <h3 className="text-xl font-serif font-semibold">Outdoors</h3>
                        <p className="text-gray-600">Beginning of a journey</p>
                    </div>
                    {/* Repeat for more works */}
                </div>
            </div>
            <div className="mt-12 flex justify-center px-6">
                <button className="py-4 px-8 text-lg font-medium bg-white rounded-md border border-gray-300 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                    See more Gallery
                </button>
            </div>
        </div>
    );
}