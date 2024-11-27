import { useContext, useEffect } from "react"
import UserContext from "../../../context/userContext"
import { useNavigate } from "react-router-dom"

export default function UserDropdownButton(props) {
    
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const userImage = user != null ? user.image : "/default-user.png"


    function toggleOpen() {
        props.setIsOpen(!props.isOpen)
    }

    function handleClick() {
        toggleOpen()
    }

    return (
        <>
            {
                user != null && (
                    <div className="user-dropdown-button flex items-center bg-slate-900 -lg px-3 py-2 mr-4 select-none cursor-pointer" onClick={handleClick} >
                        <div className="user-image">
                            <img className="w-[30px] h-[30px] rounded-full" src={userImage} alt="User Image" />
                        </div>
                        <div className="user-name ml-2 text-white flex flex-col">
                            <span>{user.firstName} {user.lastName}</span>
                            <span className="text-xs">{user.email}</span>
                        </div>
                    </div>
                )
            }
        </>

    )
}
