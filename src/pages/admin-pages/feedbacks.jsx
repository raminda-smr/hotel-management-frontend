import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableHead from "../../components/admin/admin-table/adminTableHead"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableTH from "../../components/admin/admin-table/adminTableTH"
import AdminTableBody from "../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../components/admin/admin-table/adminTableTD"

export default function Feedbacks() {

    const [feedbacks, setFeedbacks] = useState([])
    const [isFeedbacksLoaded, setIsFeedbacksLoaded] = useState(false)

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

    function deleteItem(id) {
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks/' + id, {}).then(
                (res) => {
                    setIsFeedbacksLoaded(false)
                }
            )
        }
    }



    return (
        <>
            <PageHeader to="/admin/feedbacks" name="Feedbacks" title="Feedbacks" />

            <div className="user-data">
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
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { deleteItem(feedback._id) }}>Delete</button>
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