import ImageSlider from "../../../components/client/image-slider/imageSlider";

export default function IndexPage() {

    const slides = [
        { "url":"http://localhost:5173/slides/slide-1.jpg", "title": "Welcome Lionion Vila Resort", "subtitle": "Beach Resort" },
        { "url":"http://localhost:5173/slides/slide-2.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url":"http://localhost:5173/slides/slide-3.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url":"http://localhost:5173/slides/slide-4.jpg", "title": "Beach", "subtitle": "Beach Resort" },
        { "url":"http://localhost:5173/slides/slide-5.jpg", "title": "Beach", "subtitle": "Beach Resort" }
    ]

    const settings= {
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
            <ImageSlider slides={slides} settings={settings} />

            <div className='w-full h-screen bg-blue-900 flex flex-col items-center'>

                <div className='border border-white bg-white w-[700px] h-[100px] flex rounded-lg justify-center items-center'>

                    <input type="date" name='start-date' />

                    <input type="date" name='end-date' />

                    <select name="room-category" id="">
                        <option value="Standard">Standard</option>
                        <option value="Luxuary">Luxuary</option>
                        <option value="Supreme">Supreme</option>
                    </select>

                    <button>Book Now</button>
                </div>

                <h1 className='text-white text-5xl'>Welcome to the Lionine Villa</h1>

            </div>
        </>

    )
}


