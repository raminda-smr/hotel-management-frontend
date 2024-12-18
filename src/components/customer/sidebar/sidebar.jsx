import React, { useContext } from 'react'
import UserContext from '../../../context/userContext'
import { Link, useNavigate } from 'react-router-dom'
import { CiBookmark, CiBookmarkCheck, CiBookmarkMinus, CiBookmarkPlus, CiChat1, CiGrid41, CiUser } from 'react-icons/ci'

export default function Sidebar() {

    const { user, setUser } = useContext(UserContext)
    const userImage = user.image != null ? user.image : "/default-user.png"

    function logout() {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <aside className="min-w-64 bg-gray-200 rounded flex flex-col">
            <div className="p-6 text-xl font-semibold text-gray-600">
                Customer Dashboard
            </div>


            <Link to="/customer/profile">
                <div className="user flex items-center mx-4 px-4 py-2 mb-4 bg-gray-300 rounded">
                    <div className="icon pr-3 text-gray-700">
                        <img className="w-[40px] h-[40px] rounded-full object-cover" src={userImage} alt="User Image" />
                        {/* <CiUser className='text-2xl' /> */}
                    </div>
                    <div className="data">
                        <div className="text-gray-600">{user.firstName}  {user.lastName} </div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                </div>
            </Link>


            <nav className="flex-1 px-4">
                <ul>
                    <li className="mb-2">
                        <Link to="/customer" className="px-4 py-2 flex items-center rounded hover:bg-gray-300 text-gray-600">
                            <CiGrid41 className='text-2xl mr-2' /> <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link to="/customer/booking/requests" className="px-4 py-2 flex items-center rounded hover:bg-gray-300 text-gray-600">
                            <CiBookmark className='text-2xl mr-2' /> <span>Booking Requests</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link to="/customer/booking/rejected" className="px-4 py-2 flex items-center rounded hover:bg-gray-300 text-gray-600">
                            <CiBookmarkMinus className='text-2xl mr-2' /> <span>Rejected Requests</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link to="/customer/booking/accepted" className="px-4 py-2 flex items-center rounded hover:bg-gray-300 text-gray-600">
                            <CiBookmarkPlus className='text-2xl mr-2' /> <span>Accepted Bookings</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link to="/customer/booking/completed" className="px-4 py-2 flex items-center rounded hover:bg-gray-300 text-gray-600">
                            <CiBookmarkCheck className='text-2xl mr-2' /> <span>Completed Bookings</span>
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link to="/customer/feedbacks" className="px-4 py-2 flex items-center rounded hover:bg-gray-300 text-gray-600">
                            <CiChat1 className='text-2xl mr-2' /> <span>Feedbacks</span>
                        </Link>
                    </li>

                    <li className="mb-2 ">
                        <Link to="/customer/profile/edit" className="px-4 py-2 flex items-center rounded hover:bg-gray-300 text-gray-600">
                            <CiUser className='text-2xl mr-2' /> <span>Edit Profile</span>
                        </Link>
                    </li>


                </ul>
            </nav>
            <div className="p-4">
                <button className="w-full bg-red-600 px-4 py-2 rounded text-white hover:bg-red-500" onClick={logout}>
                    Logout
                </button>
            </div>
        </aside>
    )
}
