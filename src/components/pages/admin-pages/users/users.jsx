import { CiHome } from "react-icons/ci"
import { TfiAngleRight } from "react-icons/tfi"

const users = [
    {
        "email": "john.doe@example.com",
        "password": "hashedpassword123",
        "firstName": "John",
        "lastName": "Doe",
        "type": "customer",
        "whatsapp": "+1234567890",
        "phone": "123-456-7890",
        "desabled": false,
        "emailVerified": true,
        "img": ""
    },
    {
        "email": "jane.smith@example.com",
        "password": "hashedpassword456",
        "firstName": "Jane",
        "lastName": "Smith",
        "type": "admin",
        "whatsapp": "+0987654321",
        "phone": "987-654-3210",
        "desabled": false,
        "emailVerified": true,
        "img": ""
    },
    {
        "email": "michael.brown@example.com",
        "password": "hashedpassword789",
        "firstName": "Michael",
        "lastName": "Brown",
        "type": "customer",
        "whatsapp": "+1122334455",
        "phone": "555-123-4567",
        "desabled": true,
        "emailVerified": false,
        "img": ""
    }
]



export default function Users(){

    return (
        <>
        <div className="page-header mb-6 ">
            <h2 className="text-gray-700 text-2xl mb-2">Users</h2>
            <div className="path flex items-center text-sm border-b border-gray-300 pb-3 text-gray-500">
                <span ><CiHome /></span> <TfiAngleRight />
                <span >Admin</span><TfiAngleRight />
                <span >Users</span>
            </div>
        </div>


        <div className="booking-data">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Whatsapp</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disabled</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Verified</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            (user, index) => {
                                return (
                                    <tr key={index}  className="border-b">
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <img src={user.img ? user.img: "https://cdn-icons-png.flaticon.com/512/149/149071.png" } className="w-[50px]" alt="" />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{user.firstName}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{user.lastName}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{user.type}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{user.whatsapp}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{user.phone}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{user.disabled? "Yes": "No"}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{user.emailVerified? "Yes": "No"}</td>
                                        
                                        <td className="px-6 py-4 text-sm text-gray-700">View Edit Delete</td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table>
        </div>

    </>
    )
}