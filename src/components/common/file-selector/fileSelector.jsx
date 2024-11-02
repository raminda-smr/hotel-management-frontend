import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function FileSelector(props) {

    const [file, setFile] = useState(null)

    let label = props.label ? props.label : "Label"
    let helper = props.helper ? "(" + props.helper + ")" : ""

    function handleFileChange(e){
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]); 
            props.setFile(e.target.files[0])
        } else {
            setFile(null);
            props.setFile(e.target.files[0])
        }
        props.onChange && props.onChange(e);
    };

    return (
        <div className="flex flex-col mb-3">

            <label className="text-gray-500 text-sm mb-1">
                {label} <span className="text-xs text-gray-400">{helper}</span>
            </label>

            <label className="flex rounded-md w-full">
                <div className="flex-1 py-2 px-4 text-gray-500 border border-gray-300 rounded-md rounded-e-none ">
                    { file && file.name || "No file selected"} 
                </div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-r-md cursor-pointer flex items-center">
                    <IoCloudUploadOutline className="mr-1 mt-1 text-xl" />
                    <span>Select file</span>
                </div>
                <input
                    type="file"
                    name={props.name}
                    onChange={handleFileChange}
                    className="hidden" 
                />
            </label>
        </div>
    )
}
