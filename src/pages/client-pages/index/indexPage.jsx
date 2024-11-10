import ImageSlider from "../../../components/client/image-slider/imageSlider";

export default function IndexPage() {

    const slides = [
        { "url":"http://localhost:3000/slides/slide-1.jpg", "title": "Beach" },
        { "url":"http://localhost:3000/slides/slide-2.jpg", "title": "Beach" },
        { "url":"http://localhost:3000/slides/slide-3.jpg", "title": "Beach" },
        { "url":"http://localhost:3000/slides/slide-4.jpg", "title": "Beach" },
        { "url":"http://localhost:3000/slides/slide-5.jpg", "title": "Beach" }
    ]

    const settings= {
        autoSlide: true,
        slideDuration: 5000,  // in ms
        transitionDuration: 1000, // in ms
        dots: false,
        showTitle: false,
        showSubTitle: false,
        height: "100%",
        width: "100%",
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


