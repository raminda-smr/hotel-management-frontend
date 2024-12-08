import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {

    const [user, setUser] = useState(null)

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
                        setUser(res.data.user)
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

    if (user == null) {
        return <div>Loading...</div>
    }

    return (
        <>
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-600">
                    Your Profile
                </h1>
                <p className="text-gray-600">
                    Welcome to your profile
                </p>
            </header>

            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                <div className="flex items-center space-x-4">
                    <div className="w-40 h-40">
                        <img
                            src={user.img || "/default-avatar.png"} // Replace with a default avatar image
                            alt="User Avatar"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
                        <p className="text-gray-600">{user.type}</p>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-medium">Email:</h3>
                        <p className="text-gray-700">{user.email}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Phone:</h3>
                        <p className="text-gray-700">{user.phone || "N/A"}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">WhatsApp:</h3>
                        <p className="text-gray-700">{user.whatsapp || "N/A"}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Account Status:</h3>
                        <p className="text-gray-700">{user.disabled ? "Disabled" : "Active"}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Email Verified:</h3>
                        <p className="text-gray-700">{user.emailVerified ? "Yes" : "No"}</p>
                    </div>
                </div>

                <div className="edit-button w-full flex justify-end">
                    <Link to="/customer/profile/edit" className="bg-blue-600 text-white px-10 py-2 -mb-10 rounded transition-all hover:bg-amber-500">Edit Profile</Link>
                </div>
            </div>


        </>
    )
}
