import React, { useContext } from 'react'
import UserContext from '../../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'

export default function Sidebar() {

    const navigate  = useNavigate()
    const {user, setUser} = useContext(UserContext)
    

    function logout(){
        localStorage.removeItem('token')
        setUser(null)
        navigate('/')
    }

    return (
        <aside className="w-64 bg-gray-100 rounded flex flex-col">
            <div className="p-6 text-xl font-semibold text-gray-600">
                Customer Dashboard
            </div>

            <div className="user flex items-center mx-4 px-4 py-2 mb-4 bg-gray-300 rounded">
                <div className="icon pr-3 text-gray-700">
                    <CiUser className='text-2xl' />
                </div>
                <div className="data">
                    <div className="text-gray-600">{user.firstName}  {user.lastName} </div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                </div>
            </div>

            <nav className="flex-1 px-4">
                <ul>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Overview
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Orders
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Settings
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Support
                        </a>
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
