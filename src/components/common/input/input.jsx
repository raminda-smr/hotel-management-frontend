export default function Input(props) {

    let label = props.label != undefined ? props.label : "Label"
    let type = props.type ? props.type : 'text'
    let value = props.value != undefined ? props.value : ""
    let defaultValue = props.defaultValue ? props.defaultValue : ""
    let helper = props.helper ? "(" + props.helper + ")" : ""

    return (
        <div className="flex flex-col mb-3">
            <label className="text-gray-500 text-sm mb-1">{label} <span className="text-xs text-gray-400">{helper}</span></label>
            <input
                name={props.name}
                onChange={props.onChange}
                type={type}
                value={value}
                {...(props.required && { required: props.required })}
                {...(props.min && { min: props.min })}
                {...(props.max && { max: props.max })}
                {...(props.step && { step: props.step })}
                {...(props.disabled && { disabled: props.disabled })}
                className=" border border-gray-300 rounded-md w-full p-2" />
        </div>
    )
}
