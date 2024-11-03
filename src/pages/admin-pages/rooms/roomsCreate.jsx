import { MdOutlineArrowBack } from "react-icons/md"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"
import FileSelector from "../../../components/common/file-selector/fileSelector"
import Textarea from "../../../components/common/textarea/textarea"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function RoomsCreate() {

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    // send back
    function goBack() {
        navigate("/admin/rooms")
    }

    return (
        <>
            <PageHeader to="/admin/rooms" name="Categories" title="Create a room" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-md ' />
                    <span className='text-sm '>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form onSubmit="" className="min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Create a room</h3>

                    <Input name="roomNumber" type="number" min="1" step="1" />
                    

                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 flex justify-center hover:bg-blue-600" >
                        {
                            isLoading ?
                                (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                :
                                (<span> Add Room</span>)
                        }

                    </button>
                </form>
            </div>

        </>
    )
}
