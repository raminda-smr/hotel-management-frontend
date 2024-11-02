import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function FileSelector(props) {


    let label = props.label ? props.label : "Label"
    let helper = props.helper ? "(" + props.helper + ")" : ""

    return (
        <div className="flex flex-col mb-3">

            <label className="text-gray-500 text-sm mb-1">
                {label} <span className="text-xs text-gray-400">{helper}</span>
            </label>

            <label className="flex rounded-md w-full">
                <div className="flex-1 py-2 px-4 text-gray-500 border border-gray-300 rounded-md rounded-e-none ">
                    { props.defaultValue && props.defaultValue.name || "No file selected"} 
                </div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-r-md cursor-pointer flex items-center">
                    <IoCloudUploadOutline className="mr-1 mt-1 text-xl" />
                    <span>Select file</span>
                </div>
                <input
                    type="file"
                    name={props.name}
                    onChange={props.onChange}
                    className="hidden" 
                />
            </label>
        </div>
    )
}
