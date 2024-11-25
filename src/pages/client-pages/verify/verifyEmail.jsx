import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { CiHome, CiLogin, CiMail } from "react-icons/ci"
import { FaRegCheckCircle } from "react-icons/fa"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function VerifyEmail() {

    const navigate = useNavigate()

    const [isVerificationChecked, setIsVerificationChecked] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    const [isExpired, setIsExpired] = useState(false)

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { token } = useParams()

    useEffect(() => {
        if (!isVerificationChecked) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/users/verify/' + token, {}).then(
                (result) => {
                    if (result) {
                        setIsVerified(true)
                    }
                }
            ).catch(
                (error) => {
                    if (error.status == 400) {
                        setIsExpired(true)
                    }
                    else {
                        setIsExpired(false)
                    }
                }
            ).finally(
                () => {
                    setIsVerificationChecked(true)
                }
            )
        }

    }, [])


    function handleVerificationRequest(e) {
        e.preventDefault()

        if (isLoading) {
            return
        }

        setIsLoading(true)

        axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/request-verification', {
            email: email
        }).then(
            (result) => {
                if (result) {
                    // redirect to login
                    toast.success("Your verification mail sent. Please verify within an hour.", { duration: 20000 })
                    navigate('/login')
                }
            }
        ).catch(
            (error) => {
                if (error) {
                    toast.error("Your verification mail sending failed. " + error.message)
                    setIsLoading(false)
                }

            }
        )


    }

    return (
        <div className="p-20 flex justify-center">
            {
                // show if verification not completed
                !isVerificationChecked && (
                    <div className="loading-box max-w-[350px] flex flex-col text-center">
                        <h2 className="text-5xl mb-4 text-gray-400">Please Wait</h2>
                        <img src="/images/animated/infinite-spinner.svg" alt="" className="w-32 mx-auto" />
                        <h4 className="text-gray-500 mt-4">Verifing your email...</h4>
                    </div>
                )
            }

            {
                // show if verification not completed
                isVerificationChecked && isExpired && (
                    <div className="loading-box max-w-[350px] flex flex-col">
                        <h2 className="text-5xl mb-4 text-gray-400  text-center">Verification Expired</h2>

                        <p className="text-gray-500 mb-4">Request a new verification link</p>
                        <form action="" onSubmit={(e) => { handleVerificationRequest(e) }}>
                            <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                                <div className="icon text-3xl text-gray-500">
                                    <CiMail />
                                </div>
                                <div className="input w-full flex flex-col px-2">
                                    <label htmlFor="" className="text-xs text-gray-400 text-left">Email Address</label>
                                    <input type="email" name="email" placeholder="yourmail@example.com" className="w-full text-sm outline-none bg-transparent" required defaultValue={email} onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    } />
                                </div>
                                <div className="verified">

                                </div>

                            </div>


                            <div className="buttons flex justify-end mt-3 mb-5">
                                <button type="submit" className="bg-sky-600 font-medium text-white px-5 py-2 rounded-full shadow-md  text-sm hover:bg-sky-700" >
                                    {
                                        isLoading ?
                                            (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                            :
                                            (<span>Request a new verification link</span>)
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
                )
            }


            {
                // show if verification not completed
                isVerificationChecked && !isExpired && isVerified && (
                    <div className="loading-box max-w-[700px] flex flex-col text-center">
                        <h2 className="text-5xl mb-4 text-gray-400">Account verified!</h2>
                        <FaRegCheckCircle className="text-green-600 text-8xl mx-auto" />
                        <h4 className="text-gray-500 mt-4 mb-4">Your email verified.</h4>

                        <Link to="/login" className="flex bg-blue-500 items-center justify-center py-2 text-white rounded-lg transition-all hover:bg-blue-600">
                            <CiLogin className="text-2xl mt-1 mr-1" />
                            <span>Login with your credentials</span>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}
