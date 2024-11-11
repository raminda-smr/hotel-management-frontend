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

            

        </>

    )
}


