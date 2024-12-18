import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import AdminTable from "../../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD"
import Modal from "../../../components/common/modal/modal"
import ModalButton from "../../../components/common/modal/modalButton"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Pagination from "../../../components/common/pagination/pagination"
import toast from "react-hot-toast"



function Rooms() {

    const [rooms, setRooms] = useState([])
    const [pagination, setPagination] = useState(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")
    const [listUpdated, setListUpdated] = useState(0)

    const navigate = useNavigate()

    const tableFields = ['Room', 'Category', 'Max Guests', 'Disabled', 'Description', 'Actions']

    const [searchParams] = useSearchParams()
    const currentPage = parseInt(searchParams.get("page") || "1")

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/rooms?page=' + currentPage, {}).then(
                (res) => {
                    // console.log(cats)
                    setRooms(res.data.list)
                    setPagination(res.data.pagination)
                }
            )
        }

    }, [currentPage, listUpdated])


    function getDeleteConfirmation(roomNumber) {

        setSelectedItem(roomNumber)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }

    function deleteItem() {

        const roomNumber = selectedItem
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/rooms/room-number/' + roomNumber, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setSelectedItem("")
                    setListUpdated(listUpdated + 1)
                    setIsDeleteModalOpen(false)
                    toast.success('Room deleted successfully')
                }
            )
        }
    }

    function handleCreate() {
        navigate("/admin/rooms/create")
    }


    return (
        <>
            <PageHeader to="/admin/rooms" name="Rooms" title="Rooms" >
                <PageHeaderButton onClick={handleCreate}>
                    <FaPlus className="text-xl m-1" />
                </PageHeaderButton>
            </PageHeader>


            <div className="room-data p-4">
                <AdminTable data={rooms} tableFields={tableFields}>
                    <AdminTableBody>
                        {rooms.map(
                            (room, index) => {
                                return (
                                    <AdminTableRow key={index}>
                                        <AdminTableTD>{room.roomNumber}</AdminTableTD>
                                        <AdminTableTD>{room.category}</AdminTableTD>
                                        <AdminTableTD>{room.maxGuests}</AdminTableTD>
                                        <AdminTableTD>{room.disabled ? "Yes" : "No"}</AdminTableTD>
                                        <AdminTableTD>{room.description.substring(0, 50)}</AdminTableTD>

                                        <AdminTableTD>

                                            <div className="flex items-center">
                                                <Link to="/admin/rooms/update" state={room} className="inline-block text-gray-500 rounded-full text-lg hover:text-green-600">
                                                    <FaEdit />
                                                </Link>
                                                <button className="text-gray-500 text-lg ml-3 hover:text-red-600" onClick={() => { getDeleteConfirmation(room.roomNumber) }}><FaRegTrashAlt /></button>
                                            </div>

                                        </AdminTableTD>
                                    </AdminTableRow>
                                )
                            }
                        )}

                    </AdminTableBody>
                </AdminTable>
            </div>

            <Pagination base="/admin/rooms" paginateData={pagination} />

            {
                isDeleteModalOpen && (
                    <Modal setIsModalOpen={setIsDeleteModalOpen} title="Delete room"  >
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

export default Rooms