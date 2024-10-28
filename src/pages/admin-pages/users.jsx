import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableHead from "../../components/admin/admin-table/adminTableHead"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableTH from "../../components/admin/admin-table/adminTableTH"
import AdminTableBody from "../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../components/admin/admin-table/adminTableTD"

export default function Users() {

    const [users, setUsers] = useState([])
    const [isUsersLoaded, setIsUsersLoaded] = useState(false)

    const tableFields = ['Image', 'Email', 'User Type', 'Whatsapp', 'Phone', 'Disabled' , 'Email Verified', 'Actions']

    useEffect(() => {
        // read users
        const token = localStorage.getItem('token')

        if (token != null && !isUsersLoaded) {
            // console.log("started")
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/users', {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {

                    setUsers(res.data.list)
                    setIsUsersLoaded(true)
                }
            )
        }
    }, [isUsersLoaded])

    function deleteItem(email) {
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/users/' + email, {}).then(
                (res) => {
                    setIsUsersLoaded(false)
                }
            )
        }
    }



    return (
        <>
            <PageHeader to="/admin/users" name="Users" title="Users" />

            <div className="user-data">
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
                            users.map(
                                (user, index) => {
                                    return (
                                        <AdminTableRow key={index}>
                                            <AdminTableTD>
                                                <img src={user.img ? user.img: "https://cdn-icons-png.flaticon.com/512/149/149071.png" } className="w-[50px]" alt="User" />
                                            </AdminTableTD>
                                            <AdminTableTD>
                                                <p>{user.firstName} {user.lastName}</p>
                                                {user.email}
                                            </AdminTableTD>
                                            <AdminTableTD>{user.type}</AdminTableTD>
                                            <AdminTableTD>{user.whatsapp}</AdminTableTD>
                                            <AdminTableTD>{user.phone}</AdminTableTD>
                                            <AdminTableTD>{user.disabled? "Yes": "No"}</AdminTableTD>
                                            <AdminTableTD>{user.emailVerified? "Yes": "No"}</AdminTableTD>

                                            <AdminTableTD>
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { deleteItem(user.email) }}>Delete</button>
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