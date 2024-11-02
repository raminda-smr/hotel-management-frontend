export default function Textarea(props) {

    let label  = props.label ? props.label : "Label"
    let defaultValue = props.defaultValue ? props.defaultValue : ""


    return (
        <div className="flex flex-col mb-3">
            <label className="text-gray-500 text-sm mb-1">{label}</label>
            <textarea name={props.name} onChange={props.onChange} className="border border-gray-300 rounded-md w-full p-2" ></textarea>
        </div>
    )
}
