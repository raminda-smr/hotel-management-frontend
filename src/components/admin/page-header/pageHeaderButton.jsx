export default function PageHeaderButton(props) {
    return (
        <button onClick={props.onClick} className="bg-blue-500 text-white  py-2 px-3 rounded flex items-center hover:bg-blue-600">
            {props.children}
        </button>
    )
}