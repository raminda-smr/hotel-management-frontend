import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/common/input/input";
import uploadMedia from "../../../utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
import UserContext from "../../../context/userContext"

export default function EditProfile() {

    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()
    const [customer, setCustomer] = useState(null)
    const [customerImage, setCustomerImage] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setCustomer((prevData) => ({ ...prevData, [name]: value }))
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setCustomerImage(URL.createObjectURL(file)); // Preview the selected image
            setImageFile(file); // Store the image file for upload
        }
    }

    

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (token != null) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/users/profile', {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            })
                .then(
                    (res) => {
                        setCustomer(res.data.user)
                        setCustomerImage(res.data.user.img || "/default-avatar.png")
                    }
                ).catch(
                    (err) => {
                        if (err) {
                            localStorage.removeItem('token')
                        }
                    }
                )
        }
        else {
            window.location.href = "/"
        }
    }, [])

    function saveProfile(userData, url) {

        const token = localStorage.getItem('token')

        const newUser = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            whatsapp: userData.whatsapp,
            img: url
        }

        axios.put(import.meta.env.VITE_BACKEND_URL + '/api/users/profile/', newUser, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('Profile updated!');
                setIsLoading(false)
                localStorage.removeItem('token')
                window.location.href="/"
            }
        ).catch(
            (error) => {
                console.error("Error creating category:", error);
                toast.error("Failed to update profile.");
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

        if(imageFile != null) {
            uploadMedia(imageFile).then(
                (snapshot) => {
                    getDownloadURL(snapshot.ref).then(
                        (url) => {
                            // console.log(url)
                            saveProfile(customer, url)
                        }
                    )
                }
            )
        }
        else{
            const url = null
            saveProfile(customer, url)
        }
    }

    if (customer == null) {
        return <div>Loading...</div>
    }

    return (
        <>
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-600">
                    Edit Your Profile
                </h1>
                <p className="text-gray-600">
                    Update your profile details
                </p>
            </header>

            <form className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg" onSubmit={(e) => handleSubmit(e)}>
                <div className="flex items-center space-x-4 w-full">
                    <div className="w-40 h-40 max-w-full">
                        <label htmlFor="upload-image" className="cursor-pointer">
                            <img
                                src={customerImage || "/default-avatar.png"} // Replace with a default avatar image
                                alt="User Avatar"
                                className="w-full h-full rounded-full object-cover"
                            />
                            <input type="file" id="upload-image" accept="image/*" onChange={handleImageChange} className="hidden"
                            />
                        </label>
                    </div>
                    <div >
                        <h2 className="text-2xl font-bold">{`${customer.firstName} ${customer.lastName}`}</h2>
                        <p className="text-gray-600">{customer.type}</p>
                        <p className="text-gray-400">*Click on the image to change profile picture</p>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="firstName" required="required" value={customer.firstName} label="First Name" onChange={handleChange} ></Input>

                    <Input name="lastName" required="required" value={customer.lastName} label="Last Name" onChange={handleChange} ></Input>

                    <Input name="phone" required="required" value={customer.phone} label="Phone" onChange={handleChange} ></Input>

                    <Input name="phone" required="required" value={customer.whatsapp} label="Whatsapp" onChange={handleChange} ></Input>
                    
                </div>

                <div className="mt-3 text-red-500">*This action will log you out soon as you update the profile</div>
                <div className="edit-button w-full flex justify-end mt-5">
                    <button type="submit" className="bg-blue-600 text-white px-10 py-2 -mb-10 rounded transition-all hover:bg-amber-500">
                        {isLoading ? (
                            <div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>
                        ):(
                            <span>Update Profile</span>
                        ) }
                    </button>
                </div>
            </form>


        </>
    )
}
