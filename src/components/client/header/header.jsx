
import { useState } from "react"
import NavigationMenu from "./navigation-menu/navigationMenu"
import { Link } from "react-router-dom"


function Header(props) {


    return (
        <header className='w-full bg-blue-500 flex relative items-center justify-between px-4 lg:items-stretch '>
            <Link to="/">
                <div className="logo py-2">
                    <img src="/Leonine_Logo.png" alt="Logo" className="w-48" />
                </div>
            </Link>

            <NavigationMenu user={props.user} userLogged={props.userLogged} setUserLogged={props.setUserLogged} />
        </header>
    )
}

export default Header