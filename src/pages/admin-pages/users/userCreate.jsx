import toast from "react-hot-toast"
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


export default function UserCreate() {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const initialUser = { 
        email: "", 
        password: "", 
        firstName: "", 
        lastName: "", 
        type: "customer", 
        whatsapp: "", 
        phone: "", 
        disabled: false,
        emailVerified: false,
        images: ""
    }

    const [user, setUser] = useState(initialUser)
    const [image, setImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const userTypes = [
        { value: "customer", label: "Customer" },
        { value: "admin", label: "Admin" }
    ]

    // send back
    function goBack() {
        navigate("/admin/users")
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }

    function handleCheckChange(e) {
        const { name, checked } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: checked
        }));
    }


    function handleFileChange(e) {
        const { files } = e.target;
        if (files && files.length > 0) {
            setImage(files[0]);
        } else {
            setImage(null);
        }
    }

    function resetForm(){
        setUser(initialUser)
        setIsLoading(false)
        setImage(null)
    }


    function saveUser() {
        
        axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/', user, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                toast.success('User successfully created!');
                resetForm()
               
            }
        ).catch(
            (error) => {
                toast.error("Failed to create user.");
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
            <PageHeader to="/admin/users" name="User" title="Create a user" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-2xl ' />
                    <span className='text-base pr-2'>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form onSubmit={handleSubmit} className="bg-white min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">

                    <h3 className="text-lg font-medium mb-3">Create a User</h3>

                    <Input name="firstName" type="text" label="First name*" required="required" onChange={handleChange} value={user.firstName} />

                    <Input name="lastName" type="text" label="Last name"  onChange={handleChange} value={user.lastName} />

                    <Input name="email" type="email" label="Email*" required="required" onChange={handleChange} value={user.email} />

                    <Input name="password" type="password" label="Password*" required="required" onChange={handleChange} value={user.password} error="Password Must contain 8 charactors" />
                    
                    <Input name="confirmPassword" type="password" label="Password Confirmation*" required="required" onChange={handleChange} value={user.email} />

                    <Select name="type" required="required" label="User Type*" onChange={handleChange} >
                        <option value="">Select a user type</option>
                        {userTypes.map((item, index) =>
                            <option key={index} value={item.value} >{item.label}</option>
                        )}
                    </Select>

                    <Input name="whatsapp" type="telephone" label="Whatsapp"  onChange={handleChange} value={user.whatsapp} />

                    <Input name="phone" type="telephone" label="Phone"  onChange={handleChange} value={user.phone} />

                    <CheckBox name="disabled" label="Disabled" onChange={handleCheckChange} checked={user.disabled} />

                    <FileSelector name="img" label="Image" onChange={handleFileChange} value={image}  />


                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 flex justify-center hover:bg-blue-600" >
                        {
                            isLoading ?
                                (<div className="border-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>)
                                :
                                (<span> Add User</span>)
                        }

                    </button>
                </form>
            </div>

        </>
    )
}
