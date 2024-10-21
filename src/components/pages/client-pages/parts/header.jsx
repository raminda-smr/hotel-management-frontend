import { Link } from "react-router-dom"
import UserTag from "./userdata"

function Header() {
    return (
        <header className='w-full bg-blue-500 flex height-[100px] relative items-center justify-between p-3'>
            <div className="logo">
                <h1 className='text-white text-[30px] '>Lionine Villa</h1>
            </div>
            <div className="main-menu flex items-center">
                <Link className="text-gray-200 hover:text-white hover:bg-blue-700 rounded-lg px-4 py-2" to="/">Home</Link>
                <Link className="text-gray-200 hover:text-white hover:bg-blue-700 rounded-lg px-4 py-2" to="/search-rooms">Search Rooms</Link>
                <Link className="text-gray-200 hover:text-white hover:bg-blue-700 rounded-lg px-4 py-2" to="/about-us">About Us</Link>
                <Link className="text-gray-200 hover:text-white hover:bg-blue-700 rounded-lg px-4 py-2" to="/contact-us">Contact Us</Link>
                <Link className="text-gray-200 hover:text-white hover:bg-blue-700 rounded-lg px-4 py-2" to="/login">Login</Link>
                <Link className="text-gray-200 hover:text-white hover:bg-blue-700 rounded-lg px-4 py-2" to="/register">Register</Link>
                <Link to="/admin">
                    <UserTag />
                </Link>
                
            </div>


        </header>
    )
}

export default Header