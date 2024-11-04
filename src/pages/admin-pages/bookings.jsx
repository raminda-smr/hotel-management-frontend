import axios from "axios"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../components/admin/admin-table/adminTableTD"
import Modal from "../../components/common/modal/modal"
import ModalButton from "../../components/common/modal/modalButton"

export default function Bookings() {

    const [bookings, setBookings] = useState([])
    const [isBookingsLoaded, setIsBookingsLoaded] = useState(false)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")

    const tableFields = ['Booking ID', 'Room ID', 'Email', 'Phone', 'Status', 'Start Date', 'End Date', 'Actions']

    useEffect(() => {
        // read bookings
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

    function getDeleteConfirmation(id) {
        
        setSelectedItem(id)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }

    function deleteItem() {

        const id = selectedItem
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/bookings/' + id, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setSelectedItem("")
                    setIsBookingsLoaded(false)
                    setIsDeleteModalOpen(false)
                    toast.success('Booking deleted successfully')
                }
            )
        }
    }



    return (
        <>
            <PageHeader to="/admin/bookings" name="Bookings" title="Bookings" />

            <div className="booking-data">
                <AdminTable data={bookings} tableFields={tableFields}>
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
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { getDeleteConfirmation(booking.bookingId) }}>Delete</button>
                                            </AdminTableTD>
                                        </AdminTableRow>
                                    )
                                }
                            )
                        }

                    </AdminTableBody>
                </AdminTable>
            </div>

            {
                isDeleteModalOpen && (
                    <Modal setIsModalOpen={setIsDeleteModalOpen} title="Delete booking"  >
                        <p>Are you sure you want to delete this item?</p>
                        <div className="confirmation-buttons flex justify-end mt-2">
                            <ModalButton type="danger" onClick={deleteItem} >Yes</ModalButton>
                            <ModalButton type="primary" onClick={()=>{ 
                                setSelectedItem("") 
                                setIsDeleteModalOpen(false)
                                }} >No</ModalButton>
                            
                        </div>
                    </Modal>
                )
            }

        </>
    )
}