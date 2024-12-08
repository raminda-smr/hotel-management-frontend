import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PageWrapper from "../../../components/client/page-wrapper/pageWrapper"
import ImageSlider from "../../../components/client/image-slider/imageSlider"

export default function Room() {

    const [room, setRoom] = useState(null)
    const [slides, setSlides] = useState(null)
    const { id } = useParams()

    const settings = {
        autoSlide: true,
        slideDuration: 5000,  // in ms
        dots: true,
        nav: true,
        showTitle: false,
        showSubTitle: false,
        height: "400px",
    }

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/rooms/room-number/' + id, {}).then(
            (res) => {
                setRoom(res.data.room)
                if(res.data.room.images.length > 0){
                    setSlides(
                        res.data.room.images.map(
                            (image) => { return { url: image, title: '' }}
                        )
                    )
                }
                else{
                    setSlides([{ url: res.data.room.category.image, title: '',  }])
                }
            }
        ).catch(
            (err) => {
                console.log(err.message)
            }
        )
    }, [])

    return (
        <>
            <PageWrapper title="Room" image="/images/wrappers/contact-us.jpg" />

            {room && (
                <section className="structure bg-gray-200 py-16">
                    <h2 className="text-5xl text-gray-600 mb-4 text-center" >{room.category.name} Room - <span className="text-amber-500">{room.roomNumber}</span> </h2>
                    

                    <div className="w-full max-w-[1200px] mx-auto mt-10 flex">

                        <div className="gallery relative w-full">
                            <ImageSlider slides={slides} settings={settings} />
                        </div>

                        <div className="details w-full p-4 text-gray-500">
                            
                            <h4 className="text-lg font-semibold">Category: {room.category.name}</h4>

                            <p className="text-base">Room Number: <span className="text-amber-700">{room.roomNumber}</span></p>
                            <p className="text-base">Cost per night: <span className="text-amber-600">LKR{room.category.price}</span></p>
                            <p className="text-base">Max guest: <span className="text-amber-600">{room.maxGuests}</span></p>
                            
                            <h4 className="text-lg font-semibold mt-4">Description</h4>
                            {room.description ? (
                                <p className="text-base">{room.description}</p>
                            ):(
                                <p className="text-gray-500">{room.category.description}</p>
                            )}
                            
                            <p className="text-red-500 mt-4">* to check availabilty please select date range and category in the search bar</p>

                        </div>
                       
                    </div>
                </section>
            )}
        </>

    )
}
