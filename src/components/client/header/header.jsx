import { Link } from "react-router-dom"
import UserTag from "../userdata/userdata"
import HeaderLink from "../header-link/headerLink"
import { useState } from "react"


function Header() {

    const [userLogged, setUserLogged] = useState(true)

    return (
        <header className='w-full bg-blue-500 flex height-[100px] relative items-center justify-between p-3'>
            <div className="logo">
                <h1 className='text-white text-[30px] '>Lionine Villa</h1>
            </div>
            <div className="main-menu flex items-center">
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="/search-rooms">Search Rooms</HeaderLink>
                <HeaderLink to="/about-us">About Us</HeaderLink>
                <HeaderLink to="/contact-us">Contact Us</HeaderLink>
                {
                    userLogged ? (
                        <Link to="/admin">
                            <UserTag setUserLogged={setUserLogged} />
                        </Link>
                    ) : (
                        <>
                            <HeaderLink to="/login">Login</HeaderLink>
                            <HeaderLink to="/register">Register</HeaderLink>
                        </>
                    )
                }

            </div>


        </header>
    )
}

export default Header