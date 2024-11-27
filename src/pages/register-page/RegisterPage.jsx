import { useEffect, useState } from "react"
import axios from "axios"
import { CiHome, CiLock, CiMail, CiUser } from "react-icons/ci"
import { Link } from "react-router-dom"
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa"
import toast from "react-hot-toast"

export default function RegisterPage() {

    const initialUser = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }
    const [registerUser, setRegisterUser] = useState(initialUser);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" })


    // Validate Email
    useEffect(() => {
        if (checkIfValidEmail(registerUser.email)) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users/check-email-exist/" + registerUser.email)
                .then(
                    (res) => {
                        // no users found
                        setErrorMessage("email", "")
                        setIsEmailValid(true)
                    }
                )
                .catch(
                    (err) => {
                        // user exist
                        setErrorMessage("email", "Email already have an account. Use different email.")
                        setIsEmailValid(false)
                    }
                )
                .finally(
                    () => {
                        setIsEmailChecked(true)
                    }
                )

        }
    }, [registerUser.email])

    // Validate password



    function setErrorMessage(name, message) {
        setErrors((prevData) => ({ ...prevData, [name]: message }))
    }

    function checkIfValidEmail(email) {
        let isValid = false

        // if not empty
        if (email.length > 5) {

            // check if in correct format
            let re = /\S+@\S+\.\S+/;
            if (!re.test(email)) {
                setErrorMessage("email", "Email is not in correct format")
            }
            else {
                isValid = true;
                setErrorMessage("email", "")
            }
        }
        return isValid
    }

    function handleChange(e) {
        const { name, value } = e.target
        setRegisterUser((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function resetForm() {
        setRegisterUser(initialUser)
        setIsLoading(false)
        setIsEmailChecked(false)
        setIsEmailValid(false)
    }

    function saveUser() {

        axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/register', registerUser, {}).then(
            (res) => {
                toast.success('Verification link sent to your email. Please verify your email within 1 hour.');
                resetForm()
                
            }
        ).catch(
            (error) => {
                toast.error("Failed to create user.");
            }
        )
    }

    function handleRegistration(e) {
        e.preventDefault()

        // validate input
        if (
            registerUser.password.length > 5 &&
            (registerUser.password == registerUser.confirmPassword) &&
            isEmailChecked &&
            isEmailValid
        ){
            if (isLoading) {
                // prevent button click while form processing
                return
            } else {
                // set form loading state
                setIsLoading(true)
            }
            
            // save user
            saveUser()
        }
    }

    return (
        <>
            <div className="w-full min-h-screen py-10 flex justify-center items-center bg-cover bg-center " style={{ backgroundImage: `url('./images/wrappers/login.jpg')` }}>

                <div className="login-card max-w-[350px] lg:max-w-[700px] bg-gray-50 flex flex-col lg:flex-row w-full rounded-lg overflow-hidden shadow-lg">
                    <div className="login-image lg:w-1/2 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('./images/pages/register/register.jpg')` }}></div>
                    <div className="login-form lg:w-1/2 p-6">
                        <h2 className="text-3xl mt-5 mb-2 text-gray-500" >Register now</h2>
                        <p className="text-sm text-gray-400 mb-10">Register with your personal information</p>

                        <form onSubmit={(e) => { handleRegistration(e) }} action="">

                            <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                                <div className="icon text-3xl text-gray-500">
                                    <CiUser />
                                </div>
                                <div className="input w-full flex flex-col px-2">
                                    <label htmlFor="" className="text-xs text-gray-400">First name</label>
                                    <input type="text" name="firstName" placeholder="John" className="w-full text-sm outline-none bg-transparent" required value={registerUser.firstName} onChange={handleChange} />
                                </div>
                                <div className="verified">

                                </div>

                            </div>

                            <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                                <div className="icon text-3xl text-gray-500">
                                    <CiUser />
                                </div>
                                <div className="input w-full flex flex-col px-2">
                                    <label htmlFor="" className="text-xs text-gray-400">Last name</label>
                                    <input type="text" name="lastName" placeholder="Doe" className="w-full text-sm outline-none bg-transparent" required value={registerUser.lastName} onChange={handleChange} />
                                </div>
                                <div className="verified">

                                </div>

                            </div>

                            <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                                <div className="icon text-3xl text-gray-500">
                                    <CiMail />
                                </div>
                                <div className="input w-full flex flex-col px-2">
                                    <label htmlFor="" className="text-xs text-gray-400">Email Address</label>
                                    <input type="email" name="email" placeholder="yourmail@example.com" className="w-full text-sm outline-none bg-transparent" required value={registerUser.email} onChange={handleChange} />
                                </div>
                                <div className="verified">
                                    {isEmailChecked && isEmailValid && <FaRegCheckCircle className="text-green-500 mr-2" />}
                                    {isEmailChecked && !isEmailValid && <FaRegTimesCircle className="text-red-500 mr-2" />}
                                </div>

                            </div>

                            <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                                <div className="icon text-3xl text-gray-500">
                                    <CiLock />
                                </div>
                                <div className="input w-full flex flex-col px-2">
                                    <label htmlFor="" className="text-xs text-gray-400">Password</label>
                                    <input type="password" name="password" placeholder="*********" className="w-full text-sm outline-none bg-transparent" required value={registerUser.password} onChange={handleChange} min={6} />
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
                                    <input type="password" name="confirmPassword" placeholder="*********" className="w-full text-sm outline-none bg-transparent" required value={registerUser.confirmPassword} onChange={handleChange} min={6} />
                                </div>
                                <div className="verified">
                                    {registerUser.password.length > 5 && (registerUser.password == registerUser.confirmPassword) && <FaRegCheckCircle className="text-green-500 mr-2" />}
                                    {registerUser.password.length > 5 && (registerUser.password != registerUser.confirmPassword) && <FaRegTimesCircle className="text-red-500 mr-2" />}
                                </div>

                            </div>





                            <div className="buttons flex mt-10 mb-5">
                                <button type="submit" className="bg-sky-600 font-medium text-white px-5 py-2 rounded-full shadow-md  text-sm hover:bg-sky-700" >
                                    {
                                        isLoading ?
                                            (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                            :
                                            (<span> Register Now</span>)
                                    }
                                </button>

                                <Link to="/login" className="bg-white font-medium text-gray-400 px-5 py-2 rounded-full shadow-md text-sm ml-3 hover:bg-gray-300" >I have an account</Link>

                            </div>


                            <div className="back-link  mt-5 mb-5">
                                <Link to="/" className="text-gray-400 flex items-center font-semibold hover:text-sky-600">
                                    <CiHome className="text-xl mr-1" />  Back to Home
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>


            </div>

        </>
    )
}
