import axios from "axios"
import toast from "react-hot-toast"
import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import AdminTable from "../../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD"
import Modal from "../../../components/common/modal/modal"
import ModalButton from "../../../components/common/modal/modalButton"
import Pagination from "../../../components/common/pagination/pagination"


export default function Bookings() {

    const [bookings, setBookings] = useState([])
    const [pagination, setPagination] = useState(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")
    
    const tableFields = ['Booking ID', 'Room ID', 'Email', 'Phone', 'Status', 'Start Date', 'End Date', 'Actions']

    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page") || "1");

    useEffect(() => {
        // read bookings
        const token = localStorage.getItem('token')

        if (token) {
            // console.log("started")
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/bookings?page=' + currentPage, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {

                    setBookings(res.data.list)
                    setPagination(res.data.pagination)
                }
            )
        }
    }, [currentPage])

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
                    setPagination(null)
                    setIsDeleteModalOpen(false)
                    toast.success('Booking deleted successfully')
                }
            )
        }
    }



    return (
        <>
            <PageHeader to="/admin/bookings" name="Bookings" title="Bookings" />

            <div className="booking-data p-4">
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
                                            <AdminTableTD>{booking.start.split('T')[0]}</AdminTableTD>
                                            <AdminTableTD>{booking.end.split('T')[0]}</AdminTableTD>

                                            <AdminTableTD>
                                                <div className="flex items-center">

                                                    <Link to={`/admin/bookings/view/${booking.bookingId}`} className="inline-block text-gray-500 rounded-full text-lg hover:text-blue-600">
                                                        <FaRegEye />
                                                    </Link>

                                                    <Link to="/admin/bookings/update" state={booking} className="inline-block text-gray-500 rounded-full text-lg ml-3 hover:text-green-600">
                                                        <FaEdit />
                                                    </Link>
                                                    <button className=" text-gray-500 text-lg ml-3 hover:text-red-600" onClick={() => { getDeleteConfirmation(booking.bookingId) }} >
                                                        <FaRegTrashAlt />
                                                    </button>
                                                </div>
                                            </AdminTableTD>
                                        </AdminTableRow>
                                    )
                                }
                            )
                        }

                    </AdminTableBody>
                </AdminTable>
            </div>

            <Pagination base="/admin/bookings" paginateData={pagination} />

            {
                isDeleteModalOpen && (
                    <Modal setIsModalOpen={setIsDeleteModalOpen} title="Delete booking"  >
                        <p>Are you sure you want to delete this item?</p>
                        <div className="confirmation-buttons flex justify-end mt-2">
                            <ModalButton type="danger" onClick={deleteItem} >Yes</ModalButton>
                            <ModalButton type="primary" onClick={() => {
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