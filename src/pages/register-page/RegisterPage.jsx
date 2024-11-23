import { useState } from "react"
import axios from "axios"
import { CiHome, CiLock, CiMail, CiUser } from "react-icons/ci"
import { Link } from "react-router-dom"

export default function RegisterPage() {

    const initialUser = { firstName:"", lastName: "", email:"", password:"", confirmPassword:"" }
    const [user, setUser] = useState(initialUser);


    function handleChange(e){
        const {name, value} = e.target
        setUser((prevData) =>({
            ...prevData, 
            [name]: value 
        }))
    }

    function handleRegistration() {

    }

    return (
        <>
            <div className="w-full min-h-screen py-10 flex justify-center items-center bg-cover bg-center " style={{ backgroundImage: `url('./images/wrappers/login.jpg')` }}>

                <div className="login-card max-w-[350px] lg:max-w-[700px] bg-gray-50 flex flex-col lg:flex-row w-full rounded-lg overflow-hidden shadow-lg">
                    <div className="login-image lg:w-1/2 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('./images/pages/register/register.jpg')` }}></div>
                    <div className="login-form lg:w-1/2 p-6">
                        <h2 className="text-3xl mt-5 mb-2 text-gray-500" >Register now</h2>
                        <p className="text-sm text-gray-400 mb-10">Register with your personal information</p>

                        <form action="">

                            <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                                <div className="icon text-3xl text-gray-500">
                                    <CiUser />
                                </div>
                                <div className="input w-full flex flex-col px-2">
                                    <label htmlFor="" className="text-xs text-gray-400">First name</label>
                                    <input type="text" name="firstName" placeholder="John" className="w-full text-sm outline-none bg-transparent" required value={user.firstName} onChange={handleChange} />
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
                                    <input type="text" name="lastName" placeholder="Doe" className="w-full text-sm outline-none bg-transparent" required value={user.lastName} onChange={handleChange} />
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
                                    <input type="email" name="email" placeholder="yourmail@example.com" className="w-full text-sm outline-none bg-transparent" required value={user.email} onChange={handleChange} />
                                </div>
                                <div className="verified">

                                </div>

                            </div>

                            <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                                <div className="icon text-3xl text-gray-500">
                                    <CiLock />
                                </div>
                                <div className="input w-full flex flex-col px-2">
                                    <label htmlFor="" className="text-xs text-gray-400">Password</label>
                                    <input type="password" name="password" placeholder="*********" className="w-full text-sm outline-none bg-transparent" required value={user.password} onChange={handleChange} />
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
                                    <input type="password" name="confirmPassword" placeholder="*********" className="w-full text-sm outline-none bg-transparent" required value={user.confirmPassword} onChange={handleChange} />
                                </div>
                                <div className="verified">

                                </div>

                            </div>





                            <div className="buttons flex mt-10 mb-5">
                                <button type="submit" className="bg-sky-600 font-medium text-white px-5 py-2 rounded-full shadow-md  text-sm hover:bg-sky-700" onClick={handleRegistration} >Register Now</button>

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
