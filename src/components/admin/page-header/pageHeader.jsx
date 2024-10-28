import { CiHome } from "react-icons/ci";
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";


export default function PageHeader(props) {
    return (
        <div className="page-header mb-6 ">
            <h2 className="text-gray-700 text-2xl mb-2">{ props.title != undefined ? props.title : props.name }</h2>
            <div className="path flex items-center text-sm border-b border-gray-300 pb-3 text-gray-500">
                <Link to="/"><CiHome /></Link> <TfiAngleRight />
                <Link to="/admin" >Admin</Link><TfiAngleRight />
                <Link to={props.to}>{props.name}</Link>
            </div>
        </div>
    )
}
