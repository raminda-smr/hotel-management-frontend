import { useState, useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

export default function ImageSlider(props) {

    const settings = props.settings
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

    return (
        <div className="relative w-full h-full overflow-hidden" style={{ width: settings.width, height: settings.height }} >
            <div className="slider-wrapper">
                {slides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 flex items-center hover:opacity-0 justify-center transition-all duration-[${settings.transitionDuration}ms] ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                        <div className="content flex flex-col text-center px-5 py-3 bg-black/50 rounded-lg ">
                            
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}

