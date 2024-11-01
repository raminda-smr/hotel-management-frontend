export default function ModalButton(props) {
    let colorClasses = "bg-gray-500 hover:bg-gray-600"
    

    if(props.type == "danger"){
        colorClasses ="bg-red-400 hover:bg-red-500"
    }
    else if(props.type == "primary"){
        colorClasses ="bg-blue-400 hover:bg-blue-500"
    }
    else if(props.type == "success"){
        colorClasses ="bg-green-400 hover:bg-green-500"
    }
    else if(props.type == "warning"){
        colorClasses ="bg-amber-400 hover:bg-amber-500"
    }
   

    return (
        <button onClick={props.onClick} className={`${colorClasses} text-white px-5 py-1 ml-1 rounded-md ${props.className}`}>{props.children}</button>
    )
}
