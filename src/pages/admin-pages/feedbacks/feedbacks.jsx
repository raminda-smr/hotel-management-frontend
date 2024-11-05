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
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa"

export default function Feedbacks() {

    const [feedbacks, setFeedbacks] = useState([])
    const [isFeedbacksLoaded, setIsFeedbacksLoaded] = useState(false)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")

    const tableFields = ['Username', 'Email', 'Title', 'Description', 'Created at', 'Approved', 'Actions']

    useEffect(() => {
        // read feedbacks
        const token = localStorage.getItem('token')

        if (token != null && !isFeedbacksLoaded) {
            // console.log("started")
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks', {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {

                    setFeedbacks(res.data.list)
                    setIsFeedbacksLoaded(true)
                }
            )
        }
    }, [isFeedbacksLoaded])

    function getDeleteConfirmation(id) {

        setSelectedItem(id)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }

    function deleteItem() {

        const id = selectedItem
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks/' + id, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setSelectedItem("")
                    setIsFeedbacksLoaded(false)
                    setIsDeleteModalOpen(false)
                }
            )
        }
    }



    return (
        <>
            <PageHeader to="/admin/feedbacks" name="Feedbacks" title="Feedbacks" />

            <div className="feedback-data p-4">
                <AdminTable data={feedbacks} tableFields={tableFields}>
                    <AdminTableBody>
                        {
                            feedbacks.map(
                                (feedback, index) => {
                                    return (
                                        <AdminTableRow key={index}>

                                            <AdminTableTD>{feedback.username}</AdminTableTD>
                                            <AdminTableTD>{feedback.email}</AdminTableTD>
                                            <AdminTableTD>{feedback.title}</AdminTableTD>
                                            <AdminTableTD>{feedback.description.substring(0, 50)}</AdminTableTD>
                                            <AdminTableTD>{new Date(feedback.date).toDateString()}</AdminTableTD>
                                            <AdminTableTD>{feedback.disabled ? "Yes" : "No"}</AdminTableTD>

                                            <AdminTableTD>
                                                <div className="flex items-center">
                                                    <Link to={`/admin/feedbacks/view/${feedback._id}`} className="inline-block text-gray-500 rounded-full text-lg hover:text-blue-600">
                                                        <FaRegEye />
                                                    </Link>

                                                    <Link to="/admin/feedbacks/update" state={feedback} className="inline-block text-gray-500 rounded-full text-lg ml-3 hover:text-green-600">
                                                        <FaEdit />
                                                    </Link>
                                                    <button className=" text-gray-500 text-lg ml-3 hover:text-red-600" onClick={() => { getDeleteConfirmation(feedback._id) }} >
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


            {
                isDeleteModalOpen && (
                    <Modal setIsModalOpen={setIsDeleteModalOpen} title="Delete feedback item"  >
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