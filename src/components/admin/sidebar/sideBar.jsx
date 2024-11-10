import { Link } from "react-router-dom"
import { CiBookmarkCheck, CiChat2, CiGrid31, CiHome, CiImageOn, CiUser, CiViewTable } from "react-icons/ci";
import SidebarUserData from "../sidebar-user-data/sidebarUserData";

function Sidebar() {

    return (

        <div className='sidebar w-64 bg-gray-900 p-4'>
            <Link to="/" className="flex mb-6 mt-2">
                <img src="/Leonine_Logo.png" alt="Logo" className="flex"  />            
            </Link>

            <div className="sidebar-menu flex flex-col">


                <Link className='mb-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center' to="/admin" >
                    <CiGrid31 className="text-xl text-white" />
                    <span className="ml-1 text-white">Dashboard</span>
                </Link>


                <Link className='mb-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center' to="/admin/bookings" >
                    <CiBookmarkCheck className="text-xl text-white" />
                    <span className="ml-1 text-white">Bookings</span>
                </Link>

                <Link className='mb-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center' to="/admin/categories" >
                    <CiViewTable className="text-xl text-white" />
                    <span className="ml-1 text-white">Categories</span>
                </Link>


                <Link className='mb-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center' to="/admin/rooms" >
                    <CiHome className="text-xl text-white" />
                    <span className="ml-1 text-white">Rooms</span>
                </Link>

                <Link className='mb-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center' to="/admin/users" >
                    <CiUser className="text-xl text-white" />
                    <span className="ml-1 text-white">Users</span>
                </Link>

                <Link className='mb-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center' to="/admin/feedbacks" >
                    <CiChat2 className="text-xl text-white" />
                    <span className="ml-1 text-white">Feedbacks</span>
                </Link>

                <Link className='mb-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center' to="/admin/gallery" >
                    <CiImageOn className="text-xl text-white" />
                    <span className="ml-1 text-white">Gallery</span>
                </Link>

            </div>
        </div>
    )
}

export default Sidebar