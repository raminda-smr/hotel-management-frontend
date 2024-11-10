import { Link } from "react-router-dom";

export default function UserDropdownItem(props) {
  return (
    <Link to={props.to} className="flex items-center w-full py-2 pl-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200" >
        <span className="icon text-xl">
            {props.icon} 
        </span>
        <span className="ml-3">{props.title}</span>
    </Link>
  )
}
