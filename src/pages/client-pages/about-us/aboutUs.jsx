import { FaUmbrellaBeach, FaSwimmer, FaGlassCheers, FaUtensils, FaSpa, FaDumbbell, FaTree, FaConciergeBell, FaCar, FaShuttleVan, FaChild, FaBusinessTime, FaParking, FaTshirt, FaShieldAlt, FaFan, FaHotdog, FaBicycle, FaWifi } from "react-icons/fa";
import { MdOutlineBeachAccess, MdOutlineRoomService } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import PageWrapper from "../../../components/client/page-wrapper/pageWrapper";
import VillaFacility from "../../../components/client/villa-facility/villaFacility";

export default function AboutUs() {

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

    return (
        <>
            <PageWrapper title="About us" image="/images/wrappers/about-us.jpg" />

            <section className="villa bg-gray-200 py-20">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row ">
                    <div className="villa-image hidden lg:block lg:w-[50%] ">
                        <img src="/images/about/villa.jpg" alt="" />
                    </div>
                    <div className="villa-content px-4 lg:mt-4 lg:w-[50%]">
                        <h2 className="text-6xl text-gray-500 mb-4" >About Villa</h2>

                        <p className="text-gray-500 text-justify mb-4 first-letter:float-left first-letter:text-5xl first-letter:pr-2  first-letter:text-gray-400">Nestled along the scenic shores of Negombo, Gampaha in Sri Lanka, Leonine Villa offers the ultimate beachside escape. Our villa is a sanctuary of relaxation and luxury, with every detail crafted to provide an unforgettable experience.</p>

                        <p className="text-gray-500 text-justify">Indulge in our refreshing pool, unwind at our cozy bar, or enjoy the breathtaking ocean views from our open sea-facing terrace. Whether you're here to relax, celebrate, or explore, Leonine Villa is the perfect destination for all.</p>
                    </div>
                </div>
            </section>


            <section className="villa bg-white py-20">

                <h2 className="text-6xl text-gray-500 mb-4 text-center" >Our Facilities</h2>

                <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        facilities.map((facility, index) => <VillaFacility key={index} facility={facility} />)
                    }
                </div>
            </section>


            <div className='w-full h-screen bg-blue-900'>
                <h1 className="text-white text-5xl text-center pt-10 pb-10">About us</h1>

                <div className="container w-[1200px] mx-auto">

                    <div className="grid grid-cols-2 gap-4">
                        <div className="about-image">
                            <img src="https://www.thedivinevilla.com/upload/room/gallery/-360145419_190842995487_1674122999_n.jpg" alt="" className='w-full rounded-lg' />
                        </div>
                        <div className="content">
                            <h2 className='text-white text-3xl mb-5 uppercase'>Lionine Villa</h2>
                            <p className='text-gray-100 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sint ipsam dolorem perferendis? Modi hic, autem cupiditate natus reprehenderit facilis beatae error accusantium dignissimos, sequi nam illum delectus iusto aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis expedita blanditiis beatae autem facilis quisquam vero, eius quaerat repudiandae, quae reiciendis iure! Provident accusamus autem perspiciatis molestias, eum iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, quis corporis. Inventore commodi, possimus alias a et maxime. Magnam obcaecati fuga nemo consectetur iusto aliquam mollitia iste eaque laboriosam perferendis.</p>
                        </div>

                    </div>



                    <div className="grid grid-cols-4 gap-4 mt-5">
                        <div>
                            <img src="https://www.thedivinevilla.com/upload/room/gallery/-82877919081_108325221825_1676617647_n.jpg" alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <img src="https://www.thedivinevilla.com/upload/room/gallery/-313142954_190889997952_1674122913_n.jpg" alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <img src="https://www.thedivinevilla.com/upload/room/gallery/-359137559_190844003347_1674122912_n.jpg" alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <img src="https://www.thedivinevilla.com/upload/room/gallery/-108099078_191095041828_1674122911_n.jpg" alt="" className='rounded-lg' />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}