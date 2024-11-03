import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function FileSelector(props) {


    let label = props.label ? props.label : "Label"
    let helper = props.helper ? "(" + props.helper + ")" : ""
    
    let selectedFile = "No file selected"

    if(props.value && Array.isArray(props.value)){
        selectedFile = props.value.length + " Files selected";
    }
    else if(props.value && props.value.name){
        selectedFile = props.value.name.length > 30 ? props.value.name.slice(0, 27) + "..." : props.value.name
    }


    return (
        <div className="flex flex-col mb-3">

            <label className="text-gray-500 text-sm mb-1">
                {label} <span className="text-xs text-gray-400">{helper}</span>
            </label>

            <label htmlFor={props.name} className="flex rounded-md w-full">
                <div className="flex-1 py-2 px-4 text-gray-500 border border-gray-300 rounded-md rounded-e-none ">
                    { selectedFile } 
                </div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-r-md cursor-pointer flex items-center">
                    <IoCloudUploadOutline className="mr-1 mt-1 text-xl" />
                    <span>{props.buttonTitle || "Select file"}</span>
                </div>
                <input
                    type="file"
                    name={props.name}
                    id={props.name}
                    onChange={props.onChange}
                    {...(props.required && { required: props.required })}
                    {...(props.multiple && { multiple: props.multiple })}
                    className="hidden" 
                />
            </label>
        </div>
    )
}
