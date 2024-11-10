import { useState } from "react";
import UserDropdownButton from "./userDropdownButton";
import UserDropdownContent from "./userDropdownContent";

export default function UserDropdown() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    
    return (
        <>
            <UserDropdownButton setOpen={setIsDropdownOpen} />
            <UserDropdownContent />
        </>

    )
}
