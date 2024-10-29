import { useState } from "react"
import uploadMedia from "../../utils/mediaUpload"

export default function TestPage() {
    const [file, setFile] =useState(null)

    return (
        <div>
            <input type="file" defaultChecked={file} onChange={(e) => {
                setFile(e.target.files[0])
            }} />


            <button onClick={()=>{
                uploadMedia(file)
            }}>Submit</button>
        </div>
    )
}
