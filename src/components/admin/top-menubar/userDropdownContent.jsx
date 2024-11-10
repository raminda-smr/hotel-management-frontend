import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import UserDropdownItem from "./userDropdownItem";

export default function UserDropdownContent() {
    return (
        <div className="dropdown-body absolute right-4 w-full">
            <span></span>
            <div className="dropdown-content bg-white p-1 drop-shadow-md flex flex-col">
                <div className="dropdown-item flex">
                    <UserDropdownItem icon={<CiUser />} title="Profile" />
                </div>
            </div>
        </div>
    )
}
