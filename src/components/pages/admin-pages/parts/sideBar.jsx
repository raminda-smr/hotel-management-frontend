import { Link } from "react-router-dom"

function Sidebar() {

    return (
        <div className="sidebar-menu flex flex-col">
            <Link className='mb-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700' to="/admin/" >Dashboard </Link>
            <Link className='mb-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700' to="/admin/bookings" >Bookings </Link>
            <Link className='mb-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700' to="/admin/rooms" >Rooms </Link>
            <Link className='mb-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700' to="/admin/categories" >Categories </Link>
        </div>
    )
}

export default Sidebar