import { useState } from "react"
import axios from "axios"
import { CiHome, CiLock, CiMail } from "react-icons/ci"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export default function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin(e) {

        e.preventDefault()

        if (isLoading) {
            return
        }
        else {
            setIsLoading(true)
        }

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
            email: email,
            password: password
        }).then(
            (res) => {
                localStorage.setItem('token', res.data.token)

                if (res.data.user.type == 'customer') {
                    navigate("/")
                }
                else if (res.data.user.type == 'admin') {
                    navigate("/admin")
                }
            }
        ).catch(
            (err) => {

                if (err.status == 402) {
                    navigate('/verify/verification-failed')
                }
                else {
                    toast.error(err.message)
                }
                setIsLoading(false)
            }
        )
    }


    function loadAdmin(){
        setEmail('admin@email.com')
        setPassword('123')
    }

    function loadCustomer(){
        setEmail('customer@email.com')
        setPassword('123')
    }

    return (
        <>
            <div className="w-full min-h-screen py-10 flex justify-center items-center bg-cover bg-center " style={{ backgroundImage: `url('./images/pages/login/background.jpg')` }}>

                <div className="login-card max-w-[350px] lg:max-w-[700px] bg-gray-50 flex flex-col lg:flex-row w-full rounded-lg overflow-hidden shadow-lg">
                    <div className="login-image lg:w-1/2 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('./images/pages/login/side-image.jpg')` }}></div>
                    <div className="login-form lg:w-1/2 p-6">
                        <h2 className="text-3xl mt-5 mb-2 text-gray-500" >Login</h2>
                        <p className="text-sm text-gray-400 mb-10">To keep connected with us please login with your personal information</p>

                        <form action="" onSubmit={(e) => { handleLogin(e) }}>
                            <div className="input-group flex items-center border-b border-gray-300 bg-gray-200 py-2 px-3 focus-within:bg-gray-50">
                                <div className="icon text-3xl text-gray-500">
                                    <CiMail />
                                </div>
                                <div className="input w-full flex flex-col px-2">
                                    <label htmlFor="" className="text-xs text-gray-400">Email Address</label>
                                    <input type="email" name="email" placeholder="yourmail@example.com" className="w-full text-sm outline-none bg-transparent" required defaultValue={email} onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    } />
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
                                    <input type="password" name="password" placeholder="*********" className="w-full text-sm outline-none bg-transparent" required defaultValue={password} onChange={
                                        (e) => {
                                            setPassword(e.target.value)
                                        }
                                    } />
                                </div>
                                <div className="verified">

                                </div>

                            </div>


                            <div className="flex items-center my-5 mb-5 justify-between">
                                <label htmlFor="remember" className="text-sm text-gray-400 flex items-center select-none cursor-pointer">
                                    <input type="checkbox" name="remember" id="remember" className="border-gray-400 mr-1" />
                                    Remember Me
                                </label>

                                <Link to="/password-reset" className="text-sm text-gray-400">Forget Password?</Link>

                            </div>


                            <div className="buttons flex mt-3 mb-5">
                                <button type="submit" className="bg-sky-600 font-medium text-white px-5 py-2 rounded-full shadow-md  text-sm hover:bg-sky-700"  >Login Now</button>

                                <Link to="/register" className="bg-white font-medium text-gray-400 px-5 py-2 rounded-full shadow-md text-sm ml-3 hover:bg-gray-300" >Create Account</Link>

                            </div>

                            <div className="mt-5">
                                <h5 className="text-lg font-semibold mb-3">Demo Logins</h5>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                        <thead className="bg-gray-100 text-gray-700">
                                            <tr>
                                                <th className="px-2 py-2 text-left text-xs font-medium border-b">User</th>
                                                <th className="px-2 py-2 text-center text-xs font-medium border-b">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-2 py-1 border-b text-xs text-gray-800">
                                                    <div>
                                                        <p className="font-medium">Email: admin@email.com</p>
                                                        <p>Password: 123</p>

                                                    </div>
                                                </td>
                                                <td className="px-2 py-1 border-b text-center">
                                                    <p className="mb-1 text-xs">Admin</p>
                                                    <button type="button" className="px-3 py-1 text-xs text-white bg-blue-500 hover:bg-blue-600 rounded" onClick={loadAdmin}>
                                                        Load
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-2 py-1 border-b text-xs text-gray-800">
                                                    <div>
                                                        <p className="font-medium">Email: customer@email.com</p>
                                                        <p>Password: 123</p>

                                                    </div>
                                                </td>
                                                <td className="px-2 py-1 border-b text-center">
                                                    <p className="mb-1 text-xs">Customer</p>
                                                    <button type="button" className="px-3 py-1 text-xs text-white bg-blue-500 hover:bg-blue-600 rounded" onClick={loadCustomer}>
                                                        Load
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
