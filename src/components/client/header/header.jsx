import { Link } from "react-router-dom"
import UserTag from "../userdata/userdata"
import HeaderLink from "../header-link/headerLink"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"


function Header(props) {

    const [userLogged, setUserLogged] = useState(true)

    return (
        <header className='w-full bg-blue-500 flex relative items-center justify-between px-4 py-2'>
            <div className="logo">
                <img src="/Leonine_Logo.png" alt="Logo" className="w-48" />
            </div>
            <div className="main-menu flex items-center">
                <div className="menu-button text-white text-3xl">
                    <RxHamburgerMenu />
                </div>
                <div className="menu-content hidden">
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/search-rooms">Search Rooms</HeaderLink>
                    <HeaderLink to="/about-us">About Us</HeaderLink>
                    <HeaderLink to="/contact-us">Contact Us</HeaderLink>
                    {
                        props.userLogged ? (
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
            </div>
        </header>
    )
}

export default Header