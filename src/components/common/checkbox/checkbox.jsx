export default function CheckBox(props) {
    let label = props.label ? props.label : "Label"
    let defaultValue = props.defaultValue ? props.defaultValue : ""
    let helper = props.helper ? "(" + props.helper + ")" : ""

    return (
        <div className="flex flex-col mb-3">
            <label className="text-gray-500 text-sm mb-1 flex items-center">
                <input
                name={props.name}
                onChange={props.onChange}
                type="checkbox"
                checked={props.checked}
                value={props.value}
                {...(props.required && { required: props.required })}
                
                className=" border border-gray-300 rounded-md p-2" />
                <span className="ml-1">{label}</span> <span className="text-xs text-gray-400">{helper}</span></label>

        </div>
    )
}
