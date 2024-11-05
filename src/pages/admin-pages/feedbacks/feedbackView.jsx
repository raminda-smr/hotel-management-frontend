import { MdOutlineArrowBack } from "react-icons/md";
import PageHeader from "../../../components/admin/page-header/pageHeader";
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton";
import { useNavigate } from "react-router-dom";

export default function FeedbackView() {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

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
        </>
    )
}
