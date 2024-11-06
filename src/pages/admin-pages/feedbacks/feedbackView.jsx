import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaRegEnvelope, FaRegUser} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../../components/admin/page-header/pageHeader";
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton";


export default function FeedbackView() {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const [feedback, setFeedback] = useState()

    // get browser parameter
    const { id } = useParams()
    useEffect(() => {
        if (id != null) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks/' + id, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setFeedback(res.data.feedback)
                }
            ).catch(
                (err) => {
                    // goBack()
                }
            )
        }
        else {
            goBack()
        }
    }, [])

    // send back
    function goBack() {
        navigate("/admin/feedbacks")
    }


    return (
        <>
            <PageHeader to="/admin/feedbacks" name="Feedbacks" title="View feedback" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-2xl ' />
                    <span className='text-base pr-2'>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="flex justify-center mt-8">

                {feedback && (
                    <div className="bg-white w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500">

                        <h3 className="text-lg font-medium mb-5  ">Feedback</h3>


                        <h4 className="text-lg text-gray-700 text-center pb-2 mb-3 border-b border-gray-300">{feedback.title}</h4>
                        <p className="flex items-center text-sm mb-1">
                            <span className=" bg-teal-800 text-white px-3 py-1 rounded-l-md"><FaRegUser className="inline-block" /></span>
                            <span className="bg-teal-700 text-white py-1 px-3 rounded-r-md">{feedback.username}</span>
                        </p>

                        <p className="flex items-center text-sm mb-4">
                            <span className=" bg-gray-700 text-white px-3 py-1 rounded-l-md"><FaRegEnvelope className="inline-block" /></span>
                            <span className="bg-gray-600 text-white py-1 px-3 rounded-r-md">{feedback.email}</span>
                        </p>

                        <p className="mb-4 text-center text-gray-700">{feedback.description}</p>

                        <p className="text-sm text-gray-600"><span className="font-medium">Created at: </span> {feedback.date.split('T')[0]}
                        </p>

                        <p className=" flex items-center text-sm text-gray-600" >
                            <span className="font-medium">Approved (Visible in frontend ): </span>
                            <span className="bg-yellow-200 px-2 py-1">{feedback.approved ? "Yes" : "No"}</span>
                        </p>

                    </div>
                )}

            </div>
        </>
    )
}
