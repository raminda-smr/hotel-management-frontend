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
                {...(props.defaultValue && { min: props.defaultValue })}
                {...(props.required && { required: props.required })}
                {...(props.value && { value: props.value })}
                {...(props.checked && { checked: props.checked })}
                {...(props.defaultChecked && { defaultChecked: props.defaultChecked })}
                
                className=" border border-gray-300 rounded-md p-2" />
                <span className="ml-1">{label}</span> <span className="text-xs text-gray-400">{helper}</span></label>

        </div>
    )
}
