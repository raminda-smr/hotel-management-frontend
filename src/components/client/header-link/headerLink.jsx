import { Link } from "react-router-dom";

export default function HeaderLink(props) {
  return (
    <Link className="text-gray-200 hover:text-white hover:bg-blue-700 rounded-lg px-4 py-2" to={props.to}>{props.children}</Link>
  )
}
