import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminTable from "../../../components/admin/admin-table/adminTable";
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody";
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow";
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD";
import { FaRegEye } from "react-icons/fa";

export default function BookingView() {

    const { id } = useParams()
    const [booking, setBooking] = useState(null)

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (token != null) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/bookings/customer/byId/' + id, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            })
                .then(
                    (res) => {
                        setBooking(res.data.booking)
                    }
                ).catch(
                    (err) => {
                        if (err) {
                            setBooking(null)
                        }
                    }
                )
        }
        else {
            window.location.href = "/"
        }
    }, [])



    return (
        <>
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-600">
                    View Booking
                </h1>
                <p className="text-gray-600">
                    Your booking request detials
                </p>
            </header>
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg max-w-[400px]">
                {booking != null ? (
                    <div className="">
                        <h1 className="text-2xl font-bold mb-4 text-center text-gray-400">Booking Details</h1>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Booking ID:</span>
                                <span>{booking.bookingId}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Room ID:</span>
                                <span>{booking.roomId}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Email:</span>
                                <span>{booking.email}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Phone:</span>
                                <span>{booking.phone || "N/A"}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Status:</span>
                                <span
                                    className={`font-semibold ${booking.status === "approved" 
                                            ? "text-green-600"
                                            :booking.status === "paid"
                                                ?  "text-green-500"
                                                :booking.status === "completed"
                                                    ?  "text-blue-500"
                                                    : booking.status === "canceled"
                                                        ? "text-red-600"
                                                        : "text-gray-600"
                                        }`}
                                >
                                    {booking.status}
                                </span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Start Date:</span>
                                <span>{new Date(booking.start).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">End Date:</span>
                                <span>{new Date(booking.end).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Note:</span>
                                <span>{booking.note || "N/A"}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Timestamp:</span>
                                <span>{new Date(booking.timestamp).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>


                ) : (
                    <span className="text-gray-500"> Booking not found!</span>
                )}
            </div>


        </>
    )
}
