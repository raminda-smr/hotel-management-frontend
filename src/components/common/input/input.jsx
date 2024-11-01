export default function Input(props) {

    let label  = props.label ? props.label : "Label"
    let type = props.type ? props.type : 'text'
    let defaultValue = props.defaultValue ? props.defaultValue : ""


    return (
        <div className="flex flex-col mb-3">
            <label htmlFor="" className="text-gray-500 text-sm mb-1">{label}</label>
            <input type={type} defaultValue={defaultValue} className=" border border-gray-300 rounded-md w-full p-2" />
        </div>
    )
}
