
import { useState } from "react"
import NavigationMenu from "./navigation-menu/navigationMenu"
import { Link } from "react-router-dom"


function Header(props) {


    return (
        <header className='bg-blue-500 '>
            <div className="header-content max-w-[1200px] flex relative items-center justify-between px-4 lg:items-stretch mx-auto">
                <Link to="/">
                    <div className="logo py-2">
                        <img src="/Leonine_Logo.png" alt="Logo" className="w-48" />
                    </div>
                </Link>

                <NavigationMenu />
            </div>

        </header>
    )
}

export default Header