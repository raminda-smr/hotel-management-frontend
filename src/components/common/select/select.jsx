export default function Select(props) {

    let label = props.label ? props.label : "Label"
    let helper = props.helper ? "(" + props.helper + ")" : ""

    return (
        <div className="flex flex-col mb-3">
            <label className="text-gray-500 text-sm mb-1">{label} <span className="text-xs text-gray-400">{helper}</span></label>
            <select name={props.name} onChange={props.onChange} value={props.value} className="border border-gray-300 rounded-md w-full p-2">
                {props.children}
            </select>
        </div>
    )
}
