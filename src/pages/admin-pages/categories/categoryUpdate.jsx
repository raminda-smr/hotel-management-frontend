import { useLocation, useNavigate } from "react-router-dom"
import { MdOutlineArrowBack } from "react-icons/md"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"
import FileSelector from "../../../components/common/file-selector/fileSelector"
import Textarea from "../../../components/common/textarea/textarea"
import uploadMedia from "../../../utils/mediaUpload"

import { useState } from "react"
import { getDownloadURL } from "firebase/storage"
import axios from "axios"
import toast from "react-hot-toast"

export default function CategoryUpdate(props) {

    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const location = useLocation()
    const navigate = useNavigate()

    if(location.state == null){
        window.location.href="/admin/categories"
    }

    const [image, setImage] = useState(null)

    const initialCategory = {
        name: location.state.name,
        price: location.state.price, 
        features: location.state.features.join(),
        image: location.state.image,
        description: location.state.description
    }

    const [category, setCategory ] = useState(initialCategory)
    const [isLoading, setIsLoading] = useState(false);


    function handleChange(e){
        const {name, value} = e.target
        setCategory((prevData)=> ({ ...prevData,[name]:value }))
    }
    
    // make image selected
    function handleFileChange(e) {
        console.log(e)
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0])
        } else {
            setImage(null)
        }
    };

    // send back
    function goBack() {
        navigate("/admin/categories")
    }


    function resetForm() {
        setIsLoading(false)
        goBack()
    }


    function updateCategory(url) {

        // prevent changing category name
        setCategory(category["name"] = initialCategory.name)
        setCategory(category["image"] = url)
        
        axios.put(import.meta.env.VITE_BACKEND_URL + '/api/categories/' +initialCategory.name , category, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('Category successfully updated!');
                resetForm()
            }
        ).catch(
            (error) => {
                console.error("Error updating category:", error);
                toast.error("Failed to update category.");
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

        if(image != null) {
            uploadMedia(image).then(
                (snapshot) => {
                    getDownloadURL(snapshot.ref).then(
                        (url) => {
                            // console.log(url)
                            updateCategory(url)
                        }
                    )
                }
            )
        }
        else{
            const url = initialCategory.image
            updateCategory(url)
        }
    }


    return (
        <>
            <PageHeader to="/admin/categories" name="Categories" title="Update Category" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-md ' />
                    <span className='text-sm '>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form onSubmit={handleSubmit} className="min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Update Category</h3>

                    <Input name="name" required="required" value={category.name} label="Name*" onChange={handleChange} disabled />

                    <Input name="price" type="number" required="required" min="0" step="0.01" value={category.price} label="Price*" onChange={handleChange} />

                    <Input name="features" type="text" value={category.features} onChange={handleChange} label="Features" helper="Comma seperated list" />

                    <FileSelector name="image" label="Image" value={image} onChange={handleFileChange} />

                    <Textarea name="description" required="required" value={category.description} label="Description*"  onChange={handleChange} ></Textarea>

                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 flex justify-center hover:bg-blue-600" >
                        {
                            isLoading ?
                                (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                :
                                (<span> Update Category</span>)
                        }
                    </button>
                </form>
            </div>

        </>
    )
}
