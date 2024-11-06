import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import AdminTable from "../../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD"
import Modal from "../../../components/common/modal/modal"
import ModalButton from "../../../components/common/modal/modalButton"
import { Link } from "react-router-dom"
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"

export default function Users() {

    const [users, setUsers] = useState([])
    const [isUsersLoaded, setIsUsersLoaded] = useState(false)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")

    const tableFields = ['Image', 'Email', 'User Type', 'Whatsapp', 'Phone', 'Disabled', 'Email Verified', 'Actions']

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


    function getDeleteConfirmation(email) {

        setSelectedItem(email)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }


    function deleteItem() {

        const email = selectedItem
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/users/' + email, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setSelectedItem("")
                    setIsUsersLoaded(false)
                    setIsDeleteModalOpen(false)
                }
            )
        }
    }

    function handleCreate() {
        navigate("/admin/users/create")
    }

    return (
        <>
            <PageHeader to="/admin/users" name="Users" title="Users" >
                <PageHeaderButton onClick={handleCreate}>
                    <FaPlus className="text-xl m-1" />
                </PageHeaderButton>
            </PageHeader>

            <div className="user-data p-4">
                <AdminTable data={users} tableFields={tableFields}>
                    <AdminTableBody>
                        {
                            users.map(
                                (user, index) => {
                                    return (
                                        <AdminTableRow key={index}>
                                            <AdminTableTD>
                                                <img src={user.img ? user.img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} className="w-[50px]" alt="User" />
                                            </AdminTableTD>
                                            <AdminTableTD>
                                                <p>{user.firstName} {user.lastName}</p>
                                                {user.email}
                                            </AdminTableTD>
                                            <AdminTableTD>{user.type}</AdminTableTD>
                                            <AdminTableTD>{user.whatsapp}</AdminTableTD>
                                            <AdminTableTD>{user.phone}</AdminTableTD>
                                            <AdminTableTD>{user.disabled ? "Yes" : "No"}</AdminTableTD>
                                            <AdminTableTD>{user.emailVerified ? "Yes" : "No"}</AdminTableTD>

                                            <AdminTableTD>
                                                <div className="flex items-center">
                                                    <Link to="/admin/users/update" state={user} className="inline-block text-gray-500 rounded-full text-lg hover:text-green-600">
                                                        <FaEdit />
                                                    </Link>
                                                    <button className="text-gray-500 text-lg ml-3 hover:text-red-600" onClick={() => { getDeleteConfirmation(user.email) }}><FaRegTrashAlt /></button>
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

            {
                isDeleteModalOpen && (
                    <Modal setIsModalOpen={setIsDeleteModalOpen} title="Delete user"  >
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