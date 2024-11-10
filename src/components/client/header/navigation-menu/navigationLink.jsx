import { Link } from "react-router-dom";

export default function NavigationLink(props) {
    return (
        <Link onClick={props.onClick} className="px-6 py-2 select-none hover:bg-gray-200 flex items-center lg:py-5 lg:px-3 lg:hover:bg-[#2e6fd9] transition-all" to={props.to}>
            <span className="text-xl">{props.icon}</span>
            <span className="pl-2 lg:pl-1">{props.children}</span>
        </Link>
    )
}
