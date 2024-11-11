import { useState, useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

export default function ImageSlider(props) {

    const defaultSettings = {
        autoSlide: true,
        slideDuration: 5000,  // in ms
        transitionDuration: 1000, // in ms
        dots: true,
        nav: true,
        showTitle: true,
        showSubTitle: true,
        height: "100vh",
        width: "100%",
    }

    // change only the provided settings
    const settings = { ...defaultSettings, ...props.settings }

    const slides = props.slides

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (settings.autoSlide) {
            const interval = setInterval(() => {
                nextSlide();
            }, settings.slideDuration);
            return () => clearInterval(interval)
        }
    }, [currentIndex, settings]);

    function nextSlide() {
        setCurrentIndex((prevIndex) => {
            // console.log(prevIndex)
            return (prevIndex + 1) % slides.length
        }
        )
    }

    function previousSlide() {
        setCurrentIndex((prevIndex) => {
            // console.log(prevIndex)
            return (prevIndex - 1) < 0 ? slides.length - 1 : (prevIndex - 1)
        })

    }

    function gotoSlide(index) {
        setCurrentIndex(index)
    }


    return (
        <div className="relative w-full h-full overflow-hidden" style={{ width: settings.width, height: settings.height }} >
            <div className="slider-wrapper">
                {slides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 flex items-center hover:opacity-0 justify-center transition-all duration-[${settings.transitionDuration}ms] ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                        {(settings.showTitle || settings.showSubTitle) && (
                            <div className="content flex flex-col text-center px-5 py-3 bg-black/50 rounded-lg ">
                                {settings.showTitle && (
                                    <h2 className="text-white text-6xl font-bold shadow-lg">
                                        {slide.title}
                                    </h2>
                                )}
                                {settings.showSubTitle && (
                                    <h3 className="text-white text-2xl font-bold shadow-lg">
                                        {slide.subtitle}
                                    </h3>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {
                settings.nav && (
                    <div className="slider-controller w-full h-full absolute flex items-center justify-between text-white z-10">
                        <div onClick={previousSlide} className="next-button text-2xl ml-2 bg-black/40 p-3 rounded-full hover:bg-black/60 md:ml-8 md:text-3xl "><GrPrevious /></div>
                        <div onClick={nextSlide} className="next-button text-2xl mr-2 bg-black/40 p-3 rounded-full hover:bg-black/60 md:mr-8 md:text-3xl "><GrNext /></div>
                    </div>
                )
            }


            {
                settings.dots && (
                    <div className="slider-dots absolute bottom-0 mb-8 w-full flex items-center justify-center text-white z-10">
                        {slides.map((slide, index) => (
                            <div key={index} className='w-[10px] h-[10px] mx-4 bg-white rounded-full cursor-pointer transition-all hover:scale-150 ' onClick={() => gotoSlide(index)}></div>
                        ))}

                    </div>
                )
            }

        </div>
    )
}

