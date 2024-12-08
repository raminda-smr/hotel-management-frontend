import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminTable from "../../../components/admin/admin-table/adminTable";
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody";
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow";
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD";
import { FaRegEye } from "react-icons/fa";

export default function BookingAccepted() {

    const [bookings, setBooking] = useState(null)
    const tableFields = ['Booking ID', 'Room ID', 'Status', 'Start Date', 'End Date', 'Actions']

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (token != null) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/bookings/customer/approved', {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            })
                .then(
                    (res) => {
                        setBooking(res.data.list)
                    }
                ).catch(
                    (err) => {
                        if (err) {
                            setBooking([])
                        }
                    }
                )
        }
        else {
            window.location.href = "/"
        }
    }, [])

    if (bookings == null) {
        return <div>Loading...</div>
    }

    return (
        <>
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-600">
                    Accepted Bookings
                </h1>
                <p className="text-gray-600">
                    Your approved or paid booking requests
                </p>
            </header>
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                {bookings.length > 0 ? (
                    <AdminTable data={bookings} tableFields={tableFields}>
                        <AdminTableBody>
                            {
                                bookings.map(
                                    (booking, index) => {
                                        return (
                                            <AdminTableRow key={index}>
                                                <AdminTableTD>{booking.bookingId}</AdminTableTD>
                                                <AdminTableTD>{booking.roomId}</AdminTableTD>
                                                <AdminTableTD>
                                                    <span className={  "text-white px-2 py-[2px] inline-block rounded " + (booking.status =="paid" ? "bg-green-600 ": "bg-amber-600")}>{booking.status}</span>
                                                </AdminTableTD>
                                                <AdminTableTD>{booking.start.split('T')[0]}</AdminTableTD>
                                                <AdminTableTD>{booking.end.split('T')[0]}</AdminTableTD>

                                                <AdminTableTD>
                                                    <div className="flex items-center">

                                                        <Link to={`/customer/booking/view/${booking.bookingId}`} className="flex items-center text-gray-500 rounded-full text-lg hover:text-blue-600">
                                                            <FaRegEye /> <span className="text-sm ml-1">View</span>
                                                        </Link>
                                                    </div>
                                                </AdminTableTD>
                                            </AdminTableRow>
                                        )
                                    }
                                )
                            }

                        </AdminTableBody>
                    </AdminTable>


                ) : (
                    <span className="text-gray-500"> 0 bookings found!</span>
                )}
            </div>


        </>
    )
}
