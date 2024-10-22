import { CiHome } from "react-icons/ci"
import { TfiAngleRight } from "react-icons/tfi"

const rooms = [
    {
        "roomNumber": 101,
        "category": "Deluxe Room",
        "description": "A comfortable room with modern amenities and a view of the city.",
        "maxGuests": 2,
        "disabled": false,
        "images": [
            "https://example.com/images/room101-1.jpg",
            "https://example.com/images/room101-2.jpg"
        ],
        "notes": "Recently renovated, includes a minibar."
    },
    {
        "roomNumber": 102,
        "category": "Standard Room",
        "description": "A budget-friendly room suitable for solo travelers.",
        "maxGuests": 1,
        "disabled": false,
        "images": [
            "https://example.com/images/room102-1.jpg"
        ],
        "notes": ""
    },
    {
        "roomNumber": 201,
        "category": "Suite",
        "description": "Spacious suite with a separate living area and luxury amenities.",
        "maxGuests": 4,
        "disabled": true,
        "images": [
            "https://example.com/images/room201-1.jpg",
            "https://example.com/images/room201-2.jpg",
            "https://example.com/images/room201-3.jpg"
        ],
        "notes": "Under maintenance until next month."
    }
]



function Rooms(){

    return (
        <>
        <div className="page-header mb-6 ">
            <h2 className="text-gray-700 text-2xl mb-2">Rooms</h2>
            <div className="path flex items-center text-sm border-b border-gray-300 pb-3 text-gray-500">
                <span ><CiHome /></span> <TfiAngleRight />
                <span >Admin</span><TfiAngleRight />
                <span >Rooms</span>
            </div>
        </div>


        <div className="booking-data">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Guests</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disabled</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rooms.map(
                            (room, index) => {
                                return (
                                    <tr key={index}  className="border-b">
                                        <td className="px-6 py-4 text-sm text-gray-700">{room.roomNumber}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{room.category}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{room.maxGuests}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{room.disabled? "Yes": "No"}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{room.description.substring(0,50)}</td>
                                        
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

export default Rooms