import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PageWrapper from "../../../components/client/page-wrapper/pageWrapper";
import RoomSearchBar from "../../../components/client/room-search-bar/roomSearchBar";
import { CiShoppingCart, CiUnlock } from "react-icons/ci";
import Room from "../../../components/client/room/room";

export default function RoomSearch() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const localdata = JSON.parse(localStorage.getItem("searchData"));

    useEffect(() => {
        const searchData = JSON.parse(localStorage.getItem("searchData"));

        if (!searchData || !searchData.start || !searchData.end || !searchData.category) {
            // Redirect to homepage if searchData is missing or incomplete
            navigate("/");
        } else {
            // Send request to get available rooms
            axios
                .post(
                    import.meta.env.VITE_BACKEND_URL + "/api/bookings/get-available-rooms",
                    searchData
                )
                .then((response) => {
                    setRooms(response.data.rooms || []);
                })
                .catch((error) => {
                    console.error("Error fetching available rooms:", error);
                })
                .finally(() => {
                    setLoading(false); // Stop loading spinner
                });
        }
    }, [localdata]);

    if (loading) {
        return <div>Loading...</div>; // Simple loading indicator
    }



    return (
        <>
            <PageWrapper title="Room Search" image="/images/wrappers/about-us.jpg" />


            <section className="search-area bg-gray-100 py-4">
                <div className="w-full max-w-[1200px] mx-auto flex justify-center ">
                    <RoomSearchBar className="w-full" />
                </div>
            </section>

            <section className="search-result bg-gray-100 py-4">
                <div className="w-full max-w-[1200px] mx-auto flex justify-center gap-4">
                    <div className="room-list lg:w-2/3">
                        <div className="rooms-list">
                            {rooms.map((room, index) => (
                                <Room key={index} room={room} />
                            ))}
                        </div>
                    </div>
                    <div className="selected-rooms lg:w-1/3">
                        <div className="cart bg-gray-200 border border-gray-300 rounded-lg p-4">
                            <h3 className="text-gray-500  flex items-center justify-center pb-4">
                                <CiShoppingCart className="text-4xl mr-2" />
                                <span className="uppercase text-2xl">Your Cart</span>
                            </h3>

                            <div className="cart-body w-full border-t border-gray-300 ">

                                <div className="login-message flex flex-col justify-center text-center pt-5">
                                    
                                    <div className="text-8xl mx-auto text-gray-300 ">
                                        <CiUnlock />
                                    </div>

                                    <p className="text-gray-500 mb-4">Please <Link to="/login" className="underline text-red-700">login</Link> or <Link to="/register" className="underline text-red-700">register</Link> in order to continue </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
