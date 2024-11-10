import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import NavigationLink from "./navigationLink"
import { useState } from "react"

export default function NavigationMenu(props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenuOpen(){
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="main-menu flex items-center">
            <div className="menu-button text-white text-3xl" onClick={toggleMenuOpen}>
                <RxHamburgerMenu />
            </div>
            {
                isMenuOpen && (
                    <div className="menu-content absolute right-0 top-[64px] w-full">
                        <div className="menu-body bg-white text-gray-500 flex flex-col rounded-lg shadow-2xl overflow-hidden">
                            <NavigationLink to="/">Home</NavigationLink>
                            <NavigationLink to="/search-rooms">Search Rooms</NavigationLink>
                            <NavigationLink to="/about-us">About Us</NavigationLink>
                            <NavigationLink to="/contact-us">Contact Us</NavigationLink>
                            {
                                props.userLogged ? (
                                    <Link to="/admin">
                                        {/* <UserTag setUserLogged={setUserLogged} /> */}
                                    </Link>
                                ) : (
                                    <>
                                        <NavigationLink to="/login">Login</NavigationLink>
                                        <NavigationLink to="/register">Register</NavigationLink>
                                    </>
                                )
                            }
                        </div>
                    </div>
                )
            }

        </div>
    )
}
