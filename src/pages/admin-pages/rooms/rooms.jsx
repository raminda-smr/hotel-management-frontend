import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import AdminTable from "../../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD"
import Modal from "../../../components/common/modal/modal"
import ModalButton from "../../../components/common/modal/modalButton"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import { MdOutlineCreate } from "react-icons/md"
import { useNavigate } from "react-router-dom"


function Rooms() {

    const [rooms, setRooms] = useState([])
    const [isRoomsLoaded, setIsRoomsLoaded] = useState(false)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")

    const navigate = useNavigate()

    const tableFields = ['Room', 'Category', 'Max Guests', 'Disabled', 'Description', 'Actions']

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token != null && !isRoomsLoaded) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/rooms', {}).then(
                (res) => {
                    // console.log(cats)
                    setRooms(res.data.list)
                    setIsRoomsLoaded(true)
                }
            )
        }

    }, [isRoomsLoaded])


    function getDeleteConfirmation(roomNumber) {

        setSelectedItem(roomNumber)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }

    function deleteItem() {

        const roomNumber = selectedItem
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/rooms/' + roomNumber, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setSelectedItem("")
                    setIsRoomsLoaded(false)
                    setIsDeleteModalOpen(false)
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
                    <MdOutlineCreate className='text-md ' />
                    <span className='text-sm '>Create</span>
                </PageHeaderButton>
            </PageHeader>


            <div className="room-data">
                <AdminTable data={rooms} tableFields={tableFields}>
                    <AdminTableBody>
                        {
                            rooms.map(
                                (room, index) => {
                                    return (
                                        <AdminTableRow key={index}>
                                            <AdminTableTD>{room.roomNumber}</AdminTableTD>
                                            <AdminTableTD>{room.category}</AdminTableTD>
                                            <AdminTableTD>{room.maxGuests}</AdminTableTD>
                                            <AdminTableTD>{room.disabled ? "Yes" : "No"}</AdminTableTD>
                                            <AdminTableTD>{room.description.substring(0, 50)}</AdminTableTD>

                                            <AdminTableTD>
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { getDeleteConfirmation(room.roomNumber) }}>Delete</button>
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