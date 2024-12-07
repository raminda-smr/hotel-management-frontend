import { useContext, useEffect, useState } from "react";
import UserContext from "../../../context/userContext";
import axios from "axios";
import AdminTable from "../../../components/admin/admin-table/adminTable";
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody";
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow";
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
    
    const {user} = useContext(UserContext)

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

    return (
        <>
            <header className="mb-6">
                <h4 className="text-lg text-gray-400">Hi, {user.firstName}</h4>
                <h1 className="text-3xl font-bold text-gray-600">
                    Welcome to Your Dashboard
                </h1>
                <p className="text-gray-600">
                    Here is an overview of your account and activities.
                </p>
            </header>

            <section className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4">Accepted bookings</h2>
                { bookings != null && bookings.length > 0 ? (
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
            </section>

        </>
    )
}
