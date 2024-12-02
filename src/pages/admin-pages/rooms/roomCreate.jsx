import { MdOutlineArrowBack } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"
import FileSelector from "../../../components/common/file-selector/fileSelector"
import Textarea from "../../../components/common/textarea/textarea"
import Select from "../../../components/common/select/select"
import axios from "axios"
import CheckBox from "../../../components/common/checkbox/checkbox"
import toast from "react-hot-toast"

export default function RoomCreate() {

    const initialRoom = { roomNumber: "", category: "", description: "", maxGuests: 1, disabled: false, images: [], notes: "" }

    const [room, setRoom] = useState(initialRoom)
    const [images, setImages] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [categories, setCategories] = useState([])
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false)

    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    useEffect(() => {
        if (!isCategoriesLoaded) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/categories', {}).then(
                (res) => {
                    // console.log(res)
                    setCategories(res.data.list)
                    setIsCategoriesLoaded(true)
                }
            )
        }
    }, [isCategoriesLoaded])

    // send back
    function goBack() {
        navigate("/admin/rooms")
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setRoom((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }

    function handleCheckChange(e) {
        const { name, checked } = e.target;
        setRoom((prevData) => ({
            ...prevData,
            [name]: checked
        }));
    }


    function handleFileChange(e) {
        const { files } = e.target;
        if (files && files.length > 0) {
            let newFiles = [];

            for (let i = 0; i < files.length; i++) {
                newFiles[i] = files[i];
            }
            setImages(newFiles);
        } else {
            setImages(null);
        }
    }

    function resetForm(){
        setRoom(initialRoom)
        setIsLoading(false)
        setImages(null)
    }


    function saveRoom() {

        
        axios.post(import.meta.env.VITE_BACKEND_URL + '/api/rooms/', room, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('Room successfully created!');
                resetForm()
               
            }
        ).catch(
            (error) => {
                console.error("Error creating room:", error);
                toast.error("Failed to create room.");
            }
        )
    }

    function handleSubmit(e){
        e.preventDefault()

        if (isLoading) {
            // prevent button click while form processing
            return
        } else {
            // set form loading state
            setIsLoading(true)
        }
        saveRoom()
    }


    return (
        <>
            <PageHeader to="/admin/rooms" name="Categories" title="Create a room" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-2xl ' />
                    <span className='text-base pr-2'>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form onSubmit={handleSubmit} className="bg-white min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Create a room</h3>

                    <Input name="roomNumber" type="number" label="Room number*" required="required" min="1" step="1" onChange={handleChange} value={room.roomNumber} />

                    <Select name="category" required="required" label="Category*" onChange={handleChange} >
                        <option value="">Select a category</option>
                        {categories.map((item, index) =>
                            <option key={index} value={item.name} >{item.name}</option>
                        )}
                    </Select>

                    <Textarea name="description" label="Description" onChange={handleChange} value={room.description} ></Textarea>

                    <Input name="maxGuests" type="number" required="required" min="1" step="1" label="Maximum guests*" defultValue="1" onChange={handleChange} value={room.maxGuests}  />

                    <CheckBox name="disabled" label="Disabled" onChange={handleCheckChange} checked={room.disabled} />

                    <FileSelector name="images" label="Images" multiple="multiple" onChange={handleFileChange} value={images}  />

                    <Textarea name="notes" label="Notes" onChange={handleChange} value={room.notes}  ></Textarea>

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
