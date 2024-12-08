import { useState } from "react";
import UserDropdownButton from "./userDropdownButton";
import UserDropdownContent from "./userDropdownContent";

export default function UserDropdown() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    
    function toggle(){
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <div className="user-drop-down relative">

            <UserDropdownButton setIsOpen={setIsDropdownOpen} isOpen={isDropdownOpen} />

            {
                isDropdownOpen && <UserDropdownContent toggle={toggle} />
            }
            

        </div>
    )
}
