import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import PageWrapper from "../../../components/client/page-wrapper/pageWrapper"
import RoomSearchBar from "../../../components/client/room-search-bar/roomSearchBar"
import Room from "../../../components/client/room/room"
import Cart from "../../../components/client/cart/cart"

export default function RoomSearch() {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false)
    const [cartChanged, setCartChanged] = useState(0)

    useEffect(() => {
        const searchData = JSON.parse(localStorage.getItem("searchData"))

        if (!searchData || !searchData.start || !searchData.end || !searchData.category) {
            // Redirect to homepage if searchData is missing or incomplete
            navigate("/")
        } else {
            // Send request to get available rooms
            axios
                .post(
                    import.meta.env.VITE_BACKEND_URL + "/api/bookings/get-available-rooms",
                    searchData
                )
                .then((response) => {
                    setRooms(response.data.rooms || [])
                })
                .catch((error) => {
                    console.error("Error fetching available rooms:", error)
                })
                .finally(() => {
                    setLoading(false) // Stop loading spinner
                })
        }
        
        setCartChanged(cartChanged + 1)

    }, [refresh])

    if (loading) {
        return <div>Loading...</div> // Simple loading indicator
    }



    return (
        <>
            <PageWrapper title="Room Search" image="/images/wrappers/about-us.jpg" />


            <section className="search-area bg-gray-100 py-4">
                <div className="w-full max-w-[1200px] mx-auto flex justify-center ">
                    <RoomSearchBar className="w-full" setRefresh={setRefresh} refresh={refresh} />
                </div>
            </section>

            <section className="search-result bg-gray-100 py-4">
                <div className="w-full max-w-[1200px] mx-auto flex justify-center gap-4">
                    <div className="room-list lg:w-2/3">
                        <div className="rooms-list">
                            {rooms.map((room, index) => (
                                <Room key={index} room={room} cartChanged={cartChanged} setCartChanged={setCartChanged} />
                            ))}
                        </div>
                    </div>
                    <div className="selected-rooms lg:w-1/3">
                        <Cart cartChanged={cartChanged} setCartChanged={setCartChanged} />
                    </div>
                </div>
            </section>


        </>
    )
}
