export default function LoggedUser(props) {

    const userImage = props.user.image != "" ? props.user.image : "/default-user.png"

    return (
        <div className="px-6 py-2 select-none bg-gray-200  hover:bg-gray-300" >
            <div className="user-button flex items-center ">
                <div className="icon text-3xl">
                    <img className="w-[30px] h-[30px] rounded-full" src={userImage} alt="User Image" />
                </div>
                <div className="content pl-1 flex flex-col text-xs">
                    <span className="text-base">{props.user.firstName} {props.user.lastName}</span>
                    <span className="">{props.user.email}</span>
                </div>
            </div>

        </div>
    )
}
