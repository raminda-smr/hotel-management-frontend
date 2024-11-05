import axios from "axios"
import toast from "react-hot-toast"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { MdOutlineArrowBack } from "react-icons/md"
import { getDownloadURL } from "firebase/storage"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"
import FileSelector from "../../../components/common/file-selector/fileSelector"
import Textarea from "../../../components/common/textarea/textarea"
import uploadMedia from "../../../utils/mediaUpload"



export default function GalleryUpdate(props) {

    const token = localStorage.getItem("token")

    if (token == null) {
        window.location.href = "/login"
    }

    const location = useLocation();
    const navigate = useNavigate()

    if (location.state == null) {
        window.location.href = "/admin/gallery"
    }

    const initialGalleryItem = { 
        name: location.state.name, 
        image: location.state.image, 
        description: location.state.description 
    }

    const [galleryItem, setGalleryItem] = useState(initialGalleryItem)
    const [image, setImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target
        setGalleryItem((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleFileChange(e) {
        // console.log(e)
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0])
        } else {
            setImage(null)
        }
    };


    // send back
    function goBack() {
        navigate("/admin/gallery")
    }


    function resetForm() {
        setImage(null)
        setGalleryItem(initialGalleryItem)
        setIsLoading(false)
    }


    function updateGalleryItem(url) {

        setGalleryItem(galleryItem["image"] = url)

        axios.put(import.meta.env.VITE_BACKEND_URL + '/api/gallery/' +location.state._id , galleryItem, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('Gallery item successfully updated!');
                goBack()
            }
        ).catch(
            (error) => {
                toast.error("Failed to update gallery item.");
            }
        )
    }


    function handleSubmit(e) {
        e.preventDefault()

        if (isLoading) {
            // prevent button click while form processing
            return
        } else {
            // set form loading state
            setIsLoading(true)
        }

        if (image != null) {
            uploadMedia(image).then(
                (snapshot) => {
                    getDownloadURL(snapshot.ref).then(
                        (url) => {
                            // console.log(url)
                            updateGalleryItem(url)
                        }
                    )
                }
            )
        }
        else {
            const url = initialGalleryItem.image
            updateGalleryItem(url)
        }
    }


    return (
        <>
            <PageHeader to="/admin/gallery" name="Gallery" title="Update gallery item" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-2xl ' />
                    <span className='text-base pr-2'>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form onSubmit={handleSubmit} className="bg-white min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Update Gallery Item</h3>

                    <Input name="name" required="required" value={galleryItem.name} label="Name*" onChange={handleChange} />

                    <FileSelector name="image" label="Image" value={image} onChange={handleFileChange} />

                    <Textarea name="description"  value={galleryItem.description} label="Description*" onChange={handleChange} ></Textarea>

                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 flex justify-center hover:bg-blue-600" >
                        {
                            isLoading ?
                                (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                :
                                (<span> Update Gallery Item</span>)
                        }

                    </button>
                </form>
            </div>

        </>
    )
}
