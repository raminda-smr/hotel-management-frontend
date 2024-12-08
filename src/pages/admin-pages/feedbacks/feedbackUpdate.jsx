import axios from "axios"
import toast from "react-hot-toast"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { MdOutlineArrowBack } from "react-icons/md"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"
import Textarea from "../../../components/common/textarea/textarea"
import CheckBox from "../../../components/common/checkbox/checkbox"
import Select from "../../../components/common/select/select"


export default function FeedbackUpdate(props) {

    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const location = useLocation()
    const navigate = useNavigate()

    if (location.state == null) {
        window.location.href = "/admin/feedbacks"
    }

    const ratingData = [
        {"value": "1", "label": "1 Star"},
        {"value": "2", "label": "2 Stars"},
        {"value": "3", "label": "3 Stars"},
        {"value": "4", "label": "4 Stars"},
        {"value": "5", "label": "5 Stars"},
    ] 

    const initialFeedback = {
        email: location.state.email,
        username: location.state.username,
        title: location.state.title,
        description: location.state.description,
        date: location.state.date.split("T")[0],
        approved: location.state.approved
    }

    const [feedback, setFeedback] = useState(initialFeedback)
    const [isLoading, setIsLoading] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target
        setFeedback((prevData) => ({ ...prevData, [name]: value }))
    }

    function handleCheckChange(e) {
        const { name, checked } = e.target;
        setFeedback((prevData) => ({
            ...prevData,
            [name]: checked
        }));
    }

    // send back
    function goBack() {
        navigate("/admin/feedbacks")
    }

    function updateFeedback() {

        // prevent changing feedback date, username, email
        setFeedback(feedback["date"] = initialFeedback.date)
        setFeedback(feedback["username"] = initialFeedback.username)
        setFeedback(feedback["email"] = initialFeedback.email)

        axios.put(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks/' + location.state._id, feedback, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('Feedback successfully updated!')
                goBack()
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
            <PageHeader to="/admin/feedbacks" name="Feedbacks" title="Update feedback" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-2xl ' />
                    <span className='text-base pr-2'>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form onSubmit={handleSubmit} className="bg-white min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Update Feedback</h3>

                    <Input name="email" required="required" value={feedback.email} label="Email*" onChange={handleChange} disabled />
                   
                    <Input name="username" required="required" value={feedback.username} label="Username*" onChange={handleChange} disabled />

                    <Select name="rating" required="required" label="Rating*" value={feedback.rating} onChange={handleChange} >
                        {ratingData.map((item, index) =>
                            <option key={index} value={item.value} >{item.label}</option>
                        )}
                    </Select>

                    <Input name="title" required="required" value={feedback.title} label="Title*" onChange={handleChange} />

                    <Textarea name="description" required="required" value={feedback.description} label="Description*" onChange={handleChange} ></Textarea>

                    <Input name="date" type="date" value={feedback.date} onChange={handleChange} label="Created at" disabled />

                    <CheckBox name="approved" label="Approved" onChange={handleCheckChange} checked={feedback.approved} help="Only approved feedback will show on frontend" />

                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 flex justify-center hover:bg-blue-600" >
                        {
                            isLoading ?
                                (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                :
                                (<span> Update Feedback</span>)
                        }
                    </button>
                </form>
            </div>

        </>
    )
}
