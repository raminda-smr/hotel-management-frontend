import { Link } from "react-router-dom";

export default function NavigationLink(props) {
  return (
    <Link className="px-6 py-2 hover:bg-gray-200" to={props.to}>{props.children}</Link>
  )
}
