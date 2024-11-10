
export default function UserDropdownButton(props) {

    const userImage = props.user.image != "" ? props.user.image : "/default-user.png"

    function toggleOpen(){
        props.setIsOpen(!props.isOpen)
    }

    function handleClick(){
        toggleOpen()
    }


    return (
        <div className="user-dropdown-button flex items-center bg-slate-900 -lg px-3 py-2 mr-4 select-none cursor-pointer" onClick={handleClick} >
            <div className="user-image">
                <img className="w-[30px] h-[30px] rounded-full" src={userImage} alt="User Image" />
            </div>
            <div className="user-name ml-2 text-white flex flex-col">
                <span>{props.user.firstName} {props.user.lastName}</span>
                <span className="text-xs">{props.user.email}</span>
            </div>
        </div>
    )
}
