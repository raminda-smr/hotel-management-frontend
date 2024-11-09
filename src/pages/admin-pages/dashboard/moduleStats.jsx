import { Link } from "react-router-dom"

export default function ModuleStat(props) {
    let className = props.className ? props.className : ""
    return (
        <Link to={props.to} className={`p-4  w-full flex flex-col items-center rounded text-white ${className}`}>
            <div className="icon flex justify-center text-5xl mb-1">{props.icon}</div>
            <h4 className="flex justify-center text-center  leading-none mb-1">{props.title}</h4>
            <h4 className="flex justify-center text-2xl leading-none">{props.count}</h4>
        </Link>
    )
}
