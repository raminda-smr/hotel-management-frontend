import { Link } from "react-router-dom";
import ImageSlider from "../../../components/client/image-slider/imageSlider";
import GalleryItem from "../../../components/client/gallery-item/galleryItem";
import FeedbackItem from "../../../components/client/feedback-item/feedbackItem";
import RoomSearchBar from "../../../components/client/room-search-bar/roomSearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import RoomCategory from "../../../components/client/room-category/roomCategory";
import { FaDumbbell, FaGlassCheers, FaSpa, FaSwimmer, FaUmbrellaBeach, FaUtensils, FaWifi } from "react-icons/fa";
import { MdOutlineBeachAccess, MdOutlineRoomService } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import VillaFacility from "../../../components/client/villa-facility/villaFacility";

export default function IndexPage() {

    const [roomCategories, setRoomCategories] = useState([])
    const [galleryItems, setGalleryItems] = useState([])

    const slides = [
        { "url": "/slides/slide-1.jpg", "title": "Welcome Lionion Vila Resort", "subtitle": "Beach Resort" },
        { "url": "/slides/slide-2.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url": "/slides/slide-3.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url": "/slides/slide-4.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url": "/slides/slide-5.jpg", "title": "Beach", "subtitle": "Beach Resort" }
    ]

    const settings = {
        autoSlide: true,
        slideDuration: 5000,  // in ms
        dots: false,
        nav: true,
        showTitle: false,
        showSubTitle: false,
        height: "400px",
    }

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
        { name: "Wi-Fi Access", description: "Complimentary high-speed internet throughout the property", icon: <FaWifi /> }
    ]

    const feedbacks = [
        { email: "johndoe@example.com", username: "JohnDoe", title: "Great Service!", description: "I had a wonderful experience with the customer service team. They were very helpful and resolved my issue quickly.", date: "2023-11-01T10:00:00Z", approved: true },
        { email: "janedoe@example.com", username: "JaneDoe", title: "Improvement Needed", description: "The website is great, but it would be helpful to have more detailed FAQs for common issues.", date: "2023-11-05T14:30:00Z", approved: true },
        { email: "alexsmith@example.com", username: "AlexSmith", title: "Satisfied Customer", description: "Overall, I am happy with my purchase. The delivery was fast, and the product quality is excellent.", date: "2023-11-08T09:00:00Z", approved: true },
        { email: "emilyjohnson@example.com", username: "EmilyJohnson", title: "User-Friendly Interface", description: "The app is very user-friendly and intuitive. I had no issues navigating through different sections.", date: "2023-11-10T18:45:00Z", approved: true }
    ]

    // get room categories 
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/categories/with-rooms', {}).then(
            (res) => {
                if (res) {
                    // console.log(res)
                    setRoomCategories(res.data.list)
                }
            }
        )
    }, [])

    // get gallery items  
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/gallery?limit=8', {}).then(
            (res) => {
                if (res) {
                    // console.log(res)
                    setGalleryItems(res.data.list)
                }
            }
        )
    }, [])


    return (
        <>
            <section className="search-rooms relative">
                <ImageSlider slides={slides} settings={settings} />

                <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:top-auto lg:bottom-0 lg:translate-y-[50%]  flex justify-center items-center z-20'>
                    <RoomSearchBar />

                </div>
            </section>

            <section className="welcome py-20 bg-gray-100">
                <div className="max-w-[768px] mx-auto px-4">
                    <h1 className='text-gray-500 text-5xl text-center mb-3'>Welcome to the Leonine Villa</h1>
                    <p className="text-center text-gray-500 text-xl font-thin ">Nestled along the scenic shores of Negombo, Gampaha in Sri Lanka, Leonine Villa offers the ultimate beachside escape. Our villa is a sanctuary of relaxation and luxury, with every detail crafted to provide an unforgettable experience.</p>
                </div>
            </section>


            {roomCategories && roomCategories.length > 0 && (
                <section className="our-rooms py-20 bg-blue-500">
                    <div className="max-w-[768px] mx-auto px-4 mb-8">
                        <h2 className="text-white text-5xl text-center mb-3">Our Rooms</h2>
                        <p className="text-center text-white text-xl font-thin ">Our rooms cater to every need, offering {roomCategories.length} categories for your comfort</p>
                    </div>

                    <div className="max-w-[1200px] mx-auto">
                        <div className="room-categories grid gap-4 px-4 lg:grid-cols-3">
                            {roomCategories.map((category, index) => (
                                <RoomCategory key={index} category={category} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {roomCategories && roomCategories.length > 0 && (
                <section className="structure bg-gray-700 py-16">
                    <h2 className="text-5xl text-gray-200 mb-4 text-center" >Room Structure</h2>
                    <p className="text-center text-gray-100 text-xl font-thin ">Our rooms cater to every need, offering {roomCategories.length} categories for your comfort</p>

                    <div className="categories w-full max-w-[1200px] mx-auto mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 ">
                        {roomCategories.map((category, index) => (
                            <div key={index} className="category bg-gray-200 rounded">
                                <div className="head text-center p-4 pt-6 pb-0">
                                    <h3 className="text-2xl text-gray-800 uppercase font-medium">{category.name}</h3>
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

            <section className="villa bg-gray-300 py-20">
                <h2 className="text-6xl text-gray-500 mb-4 text-center" >Our Facilities</h2>
                <div className="w-full max-w-[1200px] mx-auto grid grid-cols-2 p-4 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                    {
                        facilities.map((facility, index) => <VillaFacility key={index} facility={facility} />)
                    }
                </div>
            </section>



            {galleryItems && galleryItems.length > 0 && (
                <section className="our-gallery py-20 bg-gray-100">

                    <div className="max-w-[768px] mx-auto px-4 mb-8">
                        <h2 className="text-gray-500 text-5xl text-center mb-3">Gallery</h2>
                        <p className="text-center text-gray-500 text-xl font-thin ">Capture the Beauty of Every Moment – Explore Leonine Villa's Stunning Spaces</p>
                    </div>

                    <div className="max-w-[1200px] mx-auto">
                        <div className="gallery-items grid gap-4 grid-cols-2 px-4 lg:grid-cols-4">

                            {galleryItems.map((item, index) => <GalleryItem key={index} item={item} />)}

                        </div>
                    </div>

                    <div className="max-w-[1200px] mx-auto text-center mt-4">
                        <Link className='text-white bg-blue-600 px-5 py-2 rounded-full inline-block mx-auto mt-3 mb-4 transition-all hover:bg-amber-500' to="/gallery"> Go to Gallery</Link>
                    </div>
                </section>
            )}



            <section className="our-feedbacks py-20 bg-gray-300">

                <div className="max-w-[768px] mx-auto px-4 mb-8">
                    <h2 className="text-gray-600 text-5xl text-center mb-3">Guest Experiences</h2>
                    <p className="text-center text-gray-600 text-xl font-thin ">Hear from Our Guests – Your Stories Inspire Us to Serve Better</p>
                </div>

                <div className="max-w-[1200px] mx-auto">
                    <div className="feedback-items grid gap-4 grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4">

                        {feedbacks.map((item, index) => <FeedbackItem key={index} item={item} />)}

                    </div>
                </div>
            </section>

        </>

    )
}


