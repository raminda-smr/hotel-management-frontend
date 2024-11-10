import { useNavigate } from "react-router-dom"

export default function LoggedUser(props) {

    const navigation = useNavigate()
    const userImage = props.user.image != "" ? props.user.image : "/default-user.png"

    function handleProfileClick(){
        if(props.user.type == "admin"){
            navigation("/admin")
        }
        else{
            navigation("/customer")
        }
        
    }


    return (
        <div className="px-6 py-2 select-none cursor-pointer bg-gray-200  hover:bg-gray-300 lg:py-3 lg:px-3 lg:bg-slate-800 lg:hover:bg-slate-900" >
            <div className="user-button flex items-center" onClick={handleProfileClick} >
                <div className="icon text-3xl">
                    <img className="w-[30px] h-[30px] rounded-full lg:w-[40px] lg:h-[40px]" src={userImage} alt="User Image" />
                </div>
                <div className="content pl-1 flex flex-col text-xs">
                    <span className="text-base">{props.user.firstName} {props.user.lastName}</span>
                    <span className="">{props.user.email}</span>
                </div>
            </div>

        </div>
    )
}
