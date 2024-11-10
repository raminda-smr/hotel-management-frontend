import { Link } from "react-router-dom";

export default function UserDropdownItem(props) {
  return (
    <Link to="/admin/profile" className="flex items-center w-full py-2 pl-4 text-gray-600 hover:bg-slate-100" >
        <span className="icon text-xl">
            {props.icon} 
        </span>
        <span className="ml-3">{props.title}</span>
    </Link>
  )
}
