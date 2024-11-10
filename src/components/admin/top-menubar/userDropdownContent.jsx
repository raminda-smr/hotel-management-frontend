import UserDropdownItem from "./userDropdownItem"
import { LiaUser, LiaUserEditSolid } from "react-icons/lia"
import { IoLogOutOutline } from "react-icons/io5"

export default function UserDropdownContent(props) {

    function logout(){
        localStorage.removeItem('token')
        props.setUserLogged(false)
    }

    return (
        <div className="dropdown-body absolute right-4 w-full">
            <div className="dropdown-content bg-white drop-shadow-lg flex flex-col rounded-xl overflow-hidden ">
                <UserDropdownItem icon={<LiaUser />} title="Profile" to="/admin/profile" />
                <UserDropdownItem icon={<LiaUserEditSolid />} title="Edit Profile" to="/admin/profile/edit" />
                <UserDropdownItem icon={<IoLogOutOutline />} title="Log out" onClick={logout} />
            </div>
        </div>
    )
}
