import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableHead from "../../components/admin/admin-table/adminTableHead"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableTH from "../../components/admin/admin-table/adminTableTH"
import AdminTableBody from "../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../components/admin/admin-table/adminTableTD"

export default function Bookings() {

    const [bookings, setBookings] = useState([])
    const [isBookingsLoaded, setIsBookingsLoaded] = useState(false)

    const tableFields = ['Booking ID', 'Room ID', 'Email', 'Phone', 'Status', 'Start Date' , 'End Date', 'Actions']

    useEffect(() => {
        // read categories
        const token = localStorage.getItem('token')

        if (token != null && !isBookingsLoaded) {
            // console.log("started")
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/bookings', {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {

                    setBookings(res.data.list)
                    setIsBookingsLoaded(true)
                }
            )
        }
    }, [isBookingsLoaded])

    function deleteItem(name) {
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/bookings/' + name, {}).then(
                (res) => {
                    setIsBookingsLoaded(false)
                }
            )
        }
    }



    return (
        <>
            <PageHeader to="/admin/bookings" name="Bookings" title="Bookings" />

            <div className="booking-data">
                <AdminTable>

                    <AdminTableHead className="rounded-lg overflow-hidden">
                        <AdminTableRow className="bg-blue-500">
                            {
                                tableFields.map(
                                    (tableField, index) => <AdminTableTH key={index}>{tableField}</AdminTableTH>
                                )
                            }
                        </AdminTableRow>
                    </AdminTableHead>
                    <AdminTableBody>
                        {
                            bookings.map(
                                (booking, index) => {
                                    return (
                                        <AdminTableRow key={index}>
                                            <AdminTableTD>{booking.bookingId}</AdminTableTD>
                                            <AdminTableTD>{booking.roomId}</AdminTableTD>
                                            <AdminTableTD>{booking.email}</AdminTableTD>
                                            <AdminTableTD>{booking.phone}</AdminTableTD>
                                            <AdminTableTD>{booking.status}</AdminTableTD>
                                            <AdminTableTD>{new Date(booking.start).toDateString()}</AdminTableTD>
                                            <AdminTableTD>{new Date(booking.end).toDateString()}</AdminTableTD>

                                            <AdminTableTD>
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { deleteItem(category.name) }}>Delete</button>
                                            </AdminTableTD>
                                        </AdminTableRow>
                                    )
                                }
                            )
                        }

                    </AdminTableBody>
                </AdminTable>
            </div>

        </>
    )
}