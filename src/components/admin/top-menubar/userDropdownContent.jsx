import UserDropdownItem from "./userDropdownItem"
import { LiaUser, LiaUserEditSolid } from "react-icons/lia"
import { IoLogOutOutline } from "react-icons/io5"
import { useContext } from "react"
import UserContext from "../../../context/userContext"
import { useNavigate } from "react-router-dom"

export default function UserDropdownContent(props) {

    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)

    function logout(){
        localStorage.removeItem('token')
        setUser(null)
        // window.location.href="/"
    }

    return (
        <div className="dropdown-body absolute right-4 w-full">
            <div className="dropdown-content bg-white shadow-2xl flex flex-col rounded-xl overflow-hidden ">
                <UserDropdownItem icon={<LiaUser />} title="Profile" to="/admin/profile" />
                <UserDropdownItem icon={<LiaUserEditSolid />} title="Edit Profile" to="/admin/profile/edit" />
                <UserDropdownItem icon={<IoLogOutOutline />} title="Log out" onClick={logout} />
            </div>
        </div>
    )
}
