import { FaUmbrellaBeach, FaSwimmer, FaGlassCheers, FaUtensils, FaSpa, FaDumbbell, FaTree, FaConciergeBell, FaCar, FaShuttleVan, FaChild, FaBusinessTime, FaParking, FaTshirt, FaShieldAlt, FaFan, FaHotdog, FaBicycle, FaWifi } from "react-icons/fa";
import { MdOutlineBeachAccess, MdOutlineRoomService } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import PageWrapper from "../../../components/client/page-wrapper/pageWrapper";
import VillaFacility from "../../../components/client/villa-facility/villaFacility";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AboutUs() {

    const [roomCategories, setRoomCategories] = useState([])


    const facilities = [
        { name: "Beach Access", description: "Direct access to the beach or private beachfront", icon: <FaUmbrellaBeach /> },
        { name: "Swimming Pool", description: "Private pool with loungers and umbrellas", icon: <FaSwimmer /> },
        { name: "Bar and Lounge", description: "Onsite bar with indoor and outdoor seating", icon: <FaGlassCheers /> },
        { name: "Dining Area", description: "Restaurant or dining space with a variety of cuisine options", icon: <FaUtensils /> },
        { name: "Spa and Wellness Center", description: "Massage services, sauna, or hot tub", icon: <FaSpa /> },
        { name: "Fitness Center", description: "Gym with modern equipment", icon: <FaDumbbell /> },
        { name: "Sea-Facing Terrace", description: "Open area with seating to enjoy the view", icon: <MdOutlineBeachAccess /> },
        { name: "Garden and Outdoor Spaces", description: "Landscaped garden, walking paths, and seating areas", icon: <GiPalmTree /> },
        { name: "Room Service", description: "24/7 room service with a range of menu options", icon: <MdOutlineRoomService /> },
        { name: "Wi-Fi Access", description: "Complimentary high-speed internet throughout the property", icon: <FaWifi /> },
        { name: "Concierge Services", description: "Assistance with booking activities, tours, and transportation", icon: <FaConciergeBell /> },
        { name: "Airport Shuttle", description: "Pick-up and drop-off services for convenience", icon: <FaShuttleVan /> },
        { name: "Kids’ Play Area", description: "Dedicated space for children with toys and activities", icon: <FaChild /> },
        { name: "Event and Meeting Spaces", description: "Conference room or outdoor event space for gatherings", icon: <FaBusinessTime /> },
        { name: "Parking", description: "Free or secure parking options for guests", icon: <FaParking /> },
        { name: "Laundry Service", description: "Onsite laundry and dry-cleaning options", icon: <FaTshirt /> },
        { name: "24-Hour Security", description: "Surveillance cameras and security personnel", icon: <FaShieldAlt /> },
        { name: "Air Conditioning", description: "Individual climate control in each room", icon: <FaFan /> },
        { name: "BBQ Facilities", description: "Outdoor grill for guest use", icon: <FaHotdog /> },
        { name: "Bicycle and Vehicle Rentals", description: "For guests to explore nearby attractions", icon: <FaBicycle /> },
    ]


    // get room categories 
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/categories/with-rooms', {}).then(
            (res) => {
                if (res) {
                    setRoomCategories(res.data.list)
                }
            }
        )
    }, [])

    return (
        <>
            <PageWrapper title="About us" image="/images/wrappers/about-us.jpg" />

            {/* About villa */}
            <section className="villa bg-gray-200 py-20">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row ">
                    <div className="villa-image hidden lg:block lg:w-[50%] ">
                        <img src="/images/about/villa.jpg" alt="" className="border border-gray-400 p-2 rounded-lg overflow-hidden" />
                    </div>
                    <div className="villa-content px-4 lg:mt-4 lg:w-[50%]">
                        <h2 className="text-6xl text-gray-500 mb-4" >About Villa</h2>

                        <p className="text-gray-500 text-justify mb-4 first-letter:float-left first-letter:text-5xl first-letter:pr-2  first-letter:text-gray-400">Nestled along the scenic shores of Negombo, Gampaha in Sri Lanka, Leonine Villa offers the ultimate beachside escape. Our villa is a sanctuary of relaxation and luxury, with every detail crafted to provide an unforgettable experience.</p>

                        <p className="text-gray-500 text-justify">Indulge in our refreshing pool, unwind at our cozy bar, or enjoy the breathtaking ocean views from our open sea-facing terrace. Whether you're here to relax, celebrate, or explore, Leonine Villa is the perfect destination for all.</p>
                    </div>
                </div>
            </section>

            

            {roomCategories && roomCategories.length > 0 && (
                <section className="structure bg-gray-700 py-16">
                    <h2 className="text-5xl text-gray-200 mb-4 text-center" >Room Structure</h2>
                    <p className="text-center text-gray-100 text-xl font-thin ">Our rooms cater to every need, offering {roomCategories.length} categories for your comfort</p>

                    <div className="categories w-full max-w-[1200px] mx-auto mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 ">
                        {roomCategories.map((category, index) => (
                            <div key={index} className="category bg-gray-200 rounded">
                                <div className="head text-center p-4 pt-6 pb-0">
                                    <h3 className="text-2xl text-gray-800 uppercase font-medium">{category.name}</h3>
                                    <p className="text-gray-700 text-sm">{category.description}</p>
                                </div>
                                <div className="body flex flex-wrap py-4 px-3 justify-center text-center">
                                    {category.rooms && category.rooms.length > 0 && category.rooms.map((room, rmIndex) => (
                                        <div key={rmIndex} className="room w-1/3 p-1">
                                            <div className="number bg-sky-600 text-white py-5 rounded hover:bg-sky-800 w-full">{room.roomNumber}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            
            

            {/* Our facilities */}
            <section className="villa bg-gray-300 py-20">

                <h2 className="text-6xl text-gray-500 mb-4 text-center" >Our Facilities</h2>

                <div className="w-full max-w-[1200px] mx-auto grid grid-cols-2 p-4 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                    {
                        facilities.map((facility, index) => <VillaFacility key={index} facility={facility} />)
                    }
                </div>
            </section>


        </>
    )
}