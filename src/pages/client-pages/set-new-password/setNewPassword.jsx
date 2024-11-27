import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiHome, CiLock } from "react-icons/ci"
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SetNewPassword() {

    const navigate = useNavigate()

    const { token } = useParams()
    const initialData = { token: token, password: "", confirmPassword: "" }

    const [resetData, setResetData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState({ token: "", password: "", confirmPassword: "" })


    function handleChange(e) {
        const { name, value } = e.target
        setResetData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        setErrors({})
    }

    function resetForm() {
        setResetData(initialData)
        setIsLoading(false)
    }

    function handlePasswordReset(e) {
        e.preventDefault()


        if (isLoading) {
            return
        }
        else {
            setIsLoading(true)
        }

        if (resetData.password.length < 6) {
            setErrors({ password: "Minimum password length is 6 characters" });
        }

        if (resetData.password != resetData.confirmPassword) {
            toast.error('Password missmatched')
            return
        }

        axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/reset-password', {
            token: token,
            password: resetData.password
        }).then(
            (result) => {
                if (result) {
                    // redirect to login
                    toast.success("Your password reset mail sent. Please reset within day.", { duration: 20000 })
                    navigate('/')
                }
            }
        ).catch(
            (error) => {
                if (error) {
                    toast.error("Your password reset mail sending failed. " + error.message)
                }
            }
        )
        .finally(
            ()=>{
                setIsLoading(false)
            }
        )
    }

    return (
        <div className="py-20  flex justify-center">
            <div className="loading-box max-w-[350px] flex flex-col">
                <h2 className="text-3xl mb-4 text-gray-400  text-center">Reset your password</h2>

                <p className="text-gray-500 text-sm mb-4 text-center">Type your new password below. Minimum length 6 characters.</p>
                <form action="" onSubmit={(e) => { handlePasswordReset(e) }}>

                    <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                        <div className="icon text-3xl text-gray-500">
                            <CiLock />
                        </div>
                        <div className="input w-full flex flex-col px-2">
                            <label htmlFor="" className="text-xs text-gray-400">Password </label>
                            <input type="password" name="password" placeholder="*********" className="w-full text-sm outline-none bg-transparent" required value={resetData.password} onChange={handleChange} />
                            {errors.password != "" && (<span className="text-red-600 text-xs">{errors.password}</span>)}
                        </div>
                        <div className="verified">

                        </div>

                    </div>

                    <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                        <div className="icon text-3xl text-gray-500">
                            <CiLock />
                        </div>
                        <div className="input w-full flex flex-col px-2">
                            <label htmlFor="" className="text-xs text-gray-400">Password Confirmation</label>
                            <input type="password" name="confirmPassword" placeholder="*********" className="w-full text-sm outline-none bg-transparent" required value={resetData.confirmPassword} onChange={handleChange} />
                        </div>
                        <div className="verified">
                            {resetData.password.length > 0 && (resetData.password == resetData.confirmPassword) && <FaRegCheckCircle className="text-green-500 mr-2" />}
                            {resetData.password.length > 0 && (resetData.password != resetData.confirmPassword) && <FaRegTimesCircle className="text-red-500 mr-2" />}
                        </div>

                    </div>


                    <div className="buttons flex justify-end mt-3 mb-5">
                        <button type="submit" className="bg-sky-600 font-medium text-white px-5 py-2 rounded-full shadow-md  text-sm hover:bg-sky-700" >
                            {
                                isLoading ?
                                    (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                    :
                                    (<span>Request a new link</span>)
                            }

                        </button>
                    </div>


                    <div className="back-link flex justify-end  mt-5 mb-5">
                        <Link to="/" className="text-gray-400 flex items-center font-semibold hover:text-sky-600">
                            <CiHome className="text-xl mr-1" />  Back to Home
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    )
}
