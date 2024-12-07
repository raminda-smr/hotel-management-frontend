import axios from "axios"
import toast from "react-hot-toast"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../../../components/common/input/input"
import Textarea from "../../../components/common/textarea/textarea"
import UserContext from "../../../context/userContext"
import Select from "../../../components/common/select/select"


export default function FeedbackCreate(props) {
    
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const {user} = useContext(UserContext)

    const ratingData = [
        {"value": "1", "label": "1 Star"},
        {"value": "2", "label": "2 Stars"},
        {"value": "3", "label": "3 Stars"},
        {"value": "4", "label": "4 Stars"},
        {"value": "5", "label": "5 Stars"},
    ] 

    const initialFeedback = { email: user.email , rating: 5 , title: '', description: '' }

    const [feedback, setFeedback] = useState(initialFeedback)
    const [isLoading, setIsLoading] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target
        setFeedback((prevData) => ({ ...prevData, [name]: value }))
    }


    function updateFeedback() {

        axios.post(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks/' , feedback, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('Feedback successfully updated!')
                navigate("/customer/feedbacks")
            }
        ).catch(
            (error) => {
                toast.error("Failed to update feedback.")
            }
        )
    }


    function handleSubmit(e) {
        e.preventDefault()

        if (isLoading) {
            // prevent button click while form processing
            return
        } else {
            // set form loading state
            setIsLoading(true)
        }

        updateFeedback()
    
    }


    return (
        <>
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-600">
                    Create a Feedback
                </h1>
                <p className="text-gray-600">
                    Explain your experience
                </p>
            </header>


            <div className="form-container flex justify-center mt-8">
                <form onSubmit={handleSubmit} className="bg-white min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Update Feedback</h3>

                    <Input name="email" required="required" value={feedback.email} label="Email*" onChange={handleChange} disabled />
                   
                    <Select name="rating" required="required" label="Rating*" value={feedback.rating} onChange={handleChange} >
                        {ratingData.map((item, index) =>
                            <option key={index} value={item.value} >{item.label}</option>
                        )}
                    </Select>

                    <Input name="title" required="required" value={feedback.title} label="Title*" onChange={handleChange} />

                    <Textarea name="description" required="required" value={feedback.description} label="Description*" onChange={handleChange} ></Textarea>

                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 flex justify-center hover:bg-blue-600" >
                        {
                            isLoading ?
                                (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                :
                                (<span> Create Feedback</span>)
                        }
                    </button>
                </form>
            </div>

        </>
    )
}
