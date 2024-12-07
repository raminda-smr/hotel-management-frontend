import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaRegEnvelope, FaRegUser, FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";


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
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks/customer/' + id, {
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
                    goBack()
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


    function renderStars(rating) {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar key={i} className={`mr-1 text-amber-400 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`} />
            );
        }
        return stars
    }


    return (
        <>

            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-600">
                    View Feedback
                </h1>
                <p className="text-gray-600">
                    View your feedback with full details
                </p>
            </header>

            <div className="flex justify-center mt-8">

                {feedback && (
                    <div className="bg-white w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500">



                        <h4 className="text-lg text-gray-700 text-center pb-2 mb-3 border-b border-gray-300">{feedback.title}</h4>
                        <div className="flex justify-center mb-3">
                            {renderStars(feedback.rating)}
                        </div>

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
