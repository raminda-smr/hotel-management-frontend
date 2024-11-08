import axios from "axios"
import toast from "react-hot-toast"
import { MdOutlineArrowBack } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDownloadURL } from "firebase/storage"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"
import uploadMedia from "../../../utils/mediaUpload"

export default function UserChagePassword() {

    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const location = useLocation()
    const navigate = useNavigate()

    if (location.state == null) {
        window.location.href = "/admin/users"
    }

    const initialUser = {
        email: location.state.email,
        password: "",
    }


    const [user, setUser] = useState(initialUser)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [image, setImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const userTypes = [
        { value: "customer", label: "Customer" },
        { value: "admin", label: "Admin" }
    ]

    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "", })


    // check password in correct format
    useEffect(() => {

        let newPass = user.password.trim()
        let newConf = confirmPassword.trim()

        if( newPass.length < 6){
            setErrorMessage("password", "Password must be at least 6 characters long.")
        }
        else if( newPass.length >= 6){
            setErrorMessage("password", "")
        }

        if (newPass != newConf) {
            setErrorMessage("confirmPassword", "Password confirmation is missmatched.")
        }
        else{
            setErrorMessage("confirmPassword", "")
        }
        

    }, [user.password, user.newPassword, confirmPassword])


    function setErrorMessage(name, message) {
        setErrors((prevData) => ({ ...prevData, [name]: message }))
    }


    // send back
    function goBack() {
        navigate("/admin/users")
    }


    function handleChange(e) {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }

    function handleConfirmationPasswordChange(e) {
        const { name, value } = e.target;
        setConfirmPassword(value);
    }

    function resetForm() {
        goBack()
    }


    function updateUserPassword() {

        axios.put(import.meta.env.VITE_BACKEND_URL + '/api/users/change-password/' + initialUser.email, user, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('Password changed!');
                resetForm()

            }
        ).catch(
            (error) => {
                toast.error("Failed to change password.");
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

        if(user.password != confirmPassword){
            return false
        }

        updateUserPassword()
        
    }



  return (
    <>
            <PageHeader to="/admin/users" name="User" title="Change user's password" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-2xl ' />
                    <span className='text-base pr-2'>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form onSubmit={handleSubmit} className="bg-white min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Change user's password</h3>

                    <Input name="email" type="email" label="Email*" required="required" onChange={handleChange} value={user.email} error={errors.email} disabled />

                    <Input name="password" type="password" label="Current Password*" required="required" onChange={handleChange} value={user.password} error={errors.password} />


                    <Input name="confirmPassword" type="password" label="Password Confirmation*" required="required" onChange={handleConfirmationPasswordChange} value={confirmPassword} error={errors.confirmPassword} />


                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 flex justify-center hover:bg-blue-600" >
                        {
                            isLoading ?
                                (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                :
                                (<span> Change Password</span>)
                        }

                    </button>
                </form>
            </div>
        </>
  )
}
