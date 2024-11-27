import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import NavigationLink from "./navigationLink"
import { useEffect, useState } from "react"
import LoggedUser from "./logged-user/loggedUser";
import { CiHome, CiImageOn, CiLocationOn, CiLogin, CiMedal, CiSaveDown1, CiSearch } from "react-icons/ci";

export default function NavigationMenu(props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuMobile, setIsMenuMobile] = useState(true)

    function toggleMenuOpen() {
        if(isMenuMobile){
            setIsMenuOpen(!isMenuOpen)
        }
    }

    useEffect(() => {

        function handleResize() {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(true) // Open menu if screen width is larger than 768px
                setIsMenuMobile(false)
            } else {
                setIsMenuOpen(false) // Close menu if screen width is 768px or smaller
                setIsMenuMobile(true)
            }
        }

        // Initialize menu state on component mount
        handleResize();

        // Listen for resize event
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [])


    return (
        <div className="main-menu flex items-center ">
            <div className="menu-button select-none text-white text-3xl lg:hidden" onClick={toggleMenuOpen}>
                <RxHamburgerMenu />
            </div>
            {
                isMenuOpen && (
                    <div className="menu-content absolute right-0 top-[64px] z-40 lg:relative lg:top-0 ">
                        <div className="menu-body bg-white text-gray-500 flex flex-col rounded-lg shadow-2xl overflow-hidden lg:flex-row lg:bg-transparent lg:text-white lg:shadow-none lg:rounded-none ">
                            <NavigationLink icon={<CiHome />} onClick={toggleMenuOpen} to="/">Home</NavigationLink>
                            <NavigationLink icon={<CiSearch />} onClick={toggleMenuOpen} to="/search-rooms">Search Rooms</NavigationLink>
                            <NavigationLink icon={<CiMedal />} onClick={toggleMenuOpen} to="/about-us">About Us</NavigationLink>
                            <NavigationLink icon={<CiImageOn />} onClick={toggleMenuOpen} to="/gallery">Gallery</NavigationLink>
                            <NavigationLink icon={<CiLocationOn />} onClick={toggleMenuOpen} to="/contact-us">Contact Us</NavigationLink>
                            {
                                props.userLogged ? (
                                    <LoggedUser user={props.user} userLogged={props.userLogged} setUserLogged={props.setUserLogged} />
                                ) : (
                                    <>
                                        <NavigationLink icon={<CiLogin />} to="/login">Login</NavigationLink>
                                        <NavigationLink icon={<CiSaveDown1 />} to="/register">Register</NavigationLink>
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
