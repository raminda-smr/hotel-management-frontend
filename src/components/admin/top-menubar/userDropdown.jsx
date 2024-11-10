import { useState } from "react";
import UserDropdownButton from "./userDropdownButton";
import UserDropdownContent from "./userDropdownContent";

export default function UserDropdown() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    
    return (
        <div className="user-drop-down relative">

            <UserDropdownButton setOpen={setIsDropdownOpen} />
            <UserDropdownContent />

        </div>
    )
}
