import { Link } from "react-router-dom"
import UserTag from "./userdata"

function Header() {
    return (
        <header className='w-full bg-blue-500 flex height-[100px] relative items-center justify-between p-3'>
            <div className="logo">
                <h1 className='text-white text-[30px] '>Lionine Villa</h1>
            </div>
            <div className="main-menu">
                <Link className="pl-3 text-gray-200 hover:text-white" to="/">Home</Link>
                <Link className="pl-3 text-gray-200 hover:text-white" to="/search-rooms">Search Rooms</Link>
                <Link className="pl-3 text-gray-200 hover:text-white" to="/about-us">About Us</Link>
                <Link className="pl-3 text-gray-200 hover:text-white" to="/contact-us">Contact Us</Link>
                <Link className="pl-3 text-gray-200 hover:text-white" to="/login">Login</Link>
                <Link className="pl-3 text-gray-200 hover:text-white" to="/register">Register</Link>
                
            </div>


        </header>
    )
}

export default Header