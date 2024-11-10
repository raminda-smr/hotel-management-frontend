import { CiUser } from "react-icons/ci";

export default function LoggedUser(props) {


    return (
        <div className="px-6 py-2 select-none hover:bg-gray-200" >
            <div className="user-button flex items-center ">
                <div className="icon text-3xl"><CiUser /></div>
                <div className="content pl-1 flex flex-col text-xs">
                    <span className="text-base">{props.user.firstName} {props.user.lastName}</span>
                    <span className="">{props.user.email}</span>
                </div>
            </div>

        </div>
    )
}
