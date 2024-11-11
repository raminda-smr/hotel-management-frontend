import { Link } from "react-router-dom";
import ImageSlider from "../../../components/client/image-slider/imageSlider";

export default function IndexPage() {

    const slides = [
        { "url": "http://localhost:5173/slides/slide-1.jpg", "title": "Welcome Lionion Vila Resort", "subtitle": "Beach Resort" },
        { "url": "http://localhost:5173/slides/slide-2.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url": "http://localhost:5173/slides/slide-3.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url": "http://localhost:5173/slides/slide-4.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url": "http://localhost:5173/slides/slide-5.jpg", "title": "Beach", "subtitle": "Beach Resort" }
    ]

    const settings = {
        autoSlide: true,
        slideDuration: 5000,  // in ms
        dots: false,
        nav: true,
        showTitle: false,
        showSubTitle: false,
        height: "500px",
    }


    return (
        <>
            <section className="search-rooms relative">
                <ImageSlider slides={slides} settings={settings} />

                <div className='absolute top-0 w-full h-full flex justify-center items-center z-20'>
                    <div className='bg-blue-500 flex flex-col rounded-lg justify-center items-center p-4  min-w-[260px]'>
                        <div className="flex flex-col w-full md:flex-row">
                            <input type="date" name='start_date' className="w-full rounded py-2 px-4 mb-2 mr-2" />
                            <input type="date" name='end_date' className="w-full rounded py-2 px-4 mb-2" />
                        </div>
                        <select name="room-category" id="" className="w-full rounded py-2 px-4 mb-2">
                            <option value="Standard">Standard</option>
                            <option value="Luxuary">Luxuary</option>
                            <option value="Supreme">Supreme</option>
                        </select>
                        <button className="bg-amber-400 px-6 py-2 rounded-lg  transition-all duration-300 overflow-hidden outline-amber-400 hover:bg-yellow-600 hover:outline-white hover:outline hover:outline-2 hover:-outline-offset-4 hover:text-white">Book Now</button>
                    </div>



                </div>
            </section>

            <section className="welcome py-20 bg-gray-100">
                <div className="max-w-[768px] mx-auto px-4">
                    <h1 className='text-gray-500 text-5xl text-center mb-3'>Welcome to the Leonine Villa</h1>
                    <p className="text-center text-gray-500 text-xl font-thin ">Nestled along the scenic shores of Negombo, Gampaha in Sri Lanka, Leonine Villa offers the ultimate beachside escape. Our villa is a sanctuary of relaxation and luxury, with every detail crafted to provide an unforgettable experience.</p>
                </div>
            </section>

            <section className="our-rooms py-20 bg-blue-500">

                <div className="max-w-[768px] mx-auto px-4 mb-8">
                    <h2 className="text-white text-5xl text-center mb-3">Our Rooms</h2>
                    <p className="text-center text-white text-xl font-thin ">Our rooms cater to every need, offering three categories for your comfort</p>
                </div>

                <div className="max-w-[1200px] mx-auto">


                    <div class="room-categories grid gap-4 px-4 lg:grid-cols-3">

                        <div className="room-category bg-white rounded-lg overflow-hidden flex flex-col md:flex-row md:items-center lg:flex-col">
                            <div className="image md:max-w-[50%] lg:max-w-full">
                                <img src="https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Standard-Room1-e1464286427430.jpg" alt="" className="w-full" />
                            </div>
                            <div className="content flex flex-col">
                                <h2 className="pt-3 pb-2 text-center text-3xl">Standard</h2>
                                <p className="px-4 pb-4 text-center">Cozy and comfortable, ideal for couples or solo travelers.</p>
                                <Link className='text-white bg-blue-600 px-5 py-2 rounded-full inline-block mx-auto mb-4 hover:bg-blue-500' to="/">Book Now</Link>
                            </div>
                        </div>

                        <div className="room-category bg-white rounded-lg overflow-hidden flex flex-col md:flex-row md:items-center lg:flex-col">
                            <div className="image md:max-w-[50%] lg:max-w-full">
                                <img src="https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Superior-Room1-e1464286461356.jpg" alt="" className="w-full" />
                            </div>
                            <div className="content flex flex-col">
                                <h2 className="pt-3 pb-2 text-center text-3xl">Deluxe</h2>
                                <p className="px-4 pb-4 text-center">Spacious rooms with added amenities for a premium stay.</p>
                                <Link className='text-white bg-blue-600 px-5 py-2 rounded-full inline-block mx-auto mb-4 hover:bg-blue-500' to="/">Book Now</Link>
                            </div>
                        </div>

                        <div className="room-category bg-white rounded-lg overflow-hidden flex flex-col md:flex-row md:items-center lg:flex-col">
                            <div className="image md:max-w-[50%] lg:max-w-full">
                                <img src="https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg" alt="" className="w-full" />
                            </div>
                            <div className="content flex flex-col">
                                <h2 className="pt-3 pb-2 text-center text-3xl">Luxury</h2>
                                <p className="px-4 pb-4 text-center">The epitome of opulence, with spectacular views and the finest comforts.</p>
                                <Link className='text-white bg-blue-600 px-5 py-2 rounded-full inline-block mx-auto mb-4 hover:bg-blue-500' to="/">Book Now</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>

    )
}


