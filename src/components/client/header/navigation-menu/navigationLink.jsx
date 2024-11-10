import { Link } from "react-router-dom";

export default function NavigationLink(props) {
    return (
        <Link onClick={props.onClick} className="px-6 py-2 select-none hover:bg-gray-200" to={props.to}>
            {props.children}
        </Link>
    )
}
