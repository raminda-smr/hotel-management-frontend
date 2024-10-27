import { CiHome } from "react-icons/ci"
import { TfiAngleRight } from "react-icons/tfi"

const categories = [
    {
        "name": "Deluxe Room",
        "description": "A spacious room with a king-size bed, sea view, and modern amenities.",
        "price": 150,
        "features": [
            "King-size bed",
            "Sea view",
            "Air conditioning",
            "Free Wi-Fi",
            "Complimentary breakfast"
        ],
        "image": "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Standard-Room1-e1464286427430.jpg"
    },
    {
        "name": "Standard Room",
        "description": "A cozy room with a queen-size bed, ideal for budget-conscious travelers.",
        "price": 80,
        "features": [
            "Queen-size bed",
            "Air conditioning",
            "Free Wi-Fi",
            "Flat-screen TV"
        ],
        "image": "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Superior-Room1-e1464286461356.jpg"
    },
    {
        "name": "Suite",
        "description": "Luxurious suite with a separate living area, perfect for families or special occasions.",
        "price": 250,
        "features": [
            "King-size bed",
            "Living room",
            "Private balcony",
            "Jacuzzi",
            "Mini-bar",
            "Complimentary breakfast"
        ],
        "image": "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg"
    }
]


function Categories() {

    return (
        <>
            <div className="page-header mb-6 ">
                <h2 className="text-gray-700 text-2xl mb-2">Categories</h2>
                <div className="path flex items-center text-sm border-b border-gray-300 pb-3 text-gray-500">
                    <span ><CiHome /></span> <TfiAngleRight />
                    <span >Admin</span><TfiAngleRight />
                    <span >Categories</span>
                </div>
            </div>


            <div className="booking-data">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(
                                (category, index) => {
                                    return (
                                        <tr key={index} className="border-b">
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                <img className="w-[100px]" src={category.image} alt="" />
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{category.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{category.price}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{category.description.substring(0,50)}...</td>

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

export default Categories