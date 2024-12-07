import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminTable from "../../../components/admin/admin-table/adminTable";
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody";
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow";
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD";
import { FaRegEye } from "react-icons/fa";

export default function Feedbacks() {

    const [feedbacks, setFeedbacks] = useState(null)
    const tableFields = ['Username', 'Email', 'Title', 'Description', 'Created at', 'Approved', 'Actions']

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (token != null) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks/customer', {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            })
                .then(
                    (res) => {
                        setFeedbacks(res.data.list)
                    }
                ).catch(
                    (err) => {
                        if (err) {
                            setBooking([])
                        }
                    }
                )
        }
        else {
            window.location.href = "/"
        }
    }, [])

    if (feedbacks == null) {
        return <div>Loading...</div>
    }

    return (
        <>
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-600">
                    Feedbacks
                </h1>
                <p className="text-gray-600">
                    Your feedbacks
                </p>
            </header>
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">

                <div className="flex w-full border-b border-gray-200 mb-3 pb-2 justify-between">
                    <h4 className="text-xl">Create a feedback</h4>
                    <Link to="/customer/feedbacks/create" className="bg-blue-500 px-3 py-1 rounded text-white hover:bg-blue-600 text-sm">Create</Link>
                </div>

                {feedbacks.length > 0 ? (
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
                                            <AdminTableTD>{feedback.date.split('T')[0]}</AdminTableTD>
                                            <AdminTableTD>{feedback.approved ? "Yes" : "No"}</AdminTableTD>

                                            <AdminTableTD>
                                                <div className="flex items-center">
                                                    <Link to={`/customer/feedbacks/view/${feedback._id}`} className="inline-block text-gray-500 rounded-full text-lg hover:text-blue-600">
                                                        <FaRegEye />
                                                    </Link>
                                                </div>
                                            </AdminTableTD>
                                        </AdminTableRow>
                                        )
                                    }
                                )
                            }

                        </AdminTableBody>
                    </AdminTable>


                ) : (
                    <span className="text-gray-500"> 0 feedbacks found!</span>
                )}
            </div>


        </>
    )
}
