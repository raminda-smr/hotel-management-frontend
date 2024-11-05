export default function PageHeaderButton(props) {
    return (
        <button onClick={props.onClick} className="text-gray-100 bg-amber-500 font-bold text-xl p-3 rounded-full flex items-center transition-all duration-300 hover:text-white hover:bg-blue-500 hover:animate-pulse">
            {props.children}
        </button>
    )
}
