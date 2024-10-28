import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableHead from "../../components/admin/admin-table/adminTableHead"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableTH from "../../components/admin/admin-table/adminTableTH"
import AdminTableBody from "../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../components/admin/admin-table/adminTableTD"



function Rooms() {

    const [rooms, setRooms] = useState([])
    const [isRoomsLoaded, setIsRoomsLoaded] = useState(false)

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


    function deleteItem(roomNumber) {
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/rooms/' + roomNumber, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setIsRoomsLoaded(false)
                }
            )
        }
    }


    return (
        <>
            <PageHeader to="/admin/rooms" name="Rooms" title="Room list" />


            <div className="room-data">
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
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { deleteItem(room.roomNumber) }}>Delete</button>
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

export default Rooms