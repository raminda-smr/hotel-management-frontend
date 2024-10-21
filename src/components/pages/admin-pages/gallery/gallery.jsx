import { CiHome } from "react-icons/ci"
import { TfiAngleRight } from "react-icons/tfi"

const galleryItems = [
    {
        "name": "Sunset Beach",
        "image": "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg",
        "description": "A beautiful sunset view over the beach, with orange and pink hues lighting up the sky."
    },
    {
        "name": "Mountain Retreat",
        "image": "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg",
        "description": "A cozy cabin nestled in the mountains, surrounded by tall pine trees and a clear blue sky."
    },
    {
        "name": "City Lights",
        "image": "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg",
        "description": "A stunning view of the city skyline at night, with lights shimmering from skyscrapers and streets below."
    },
    {
        "name": "Desert Dunes",
        "image": "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg",
        "description": "Endless sand dunes stretching into the horizon, with a warm golden glow under the midday sun."
    },
    {
        "name": "Tropical Paradise",
        "image": "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg",
        "description": "A tranquil island setting with crystal-clear turquoise waters, palm trees, and white sandy beaches."
    }
]




export default function Gallery(){

    return (
        <>
        <div className="page-header mb-6 ">
            <h2 className="text-gray-700 text-2xl mb-2">Gallery</h2>
            <div className="path flex items-center text-sm border-b border-gray-300 pb-3 text-gray-500">
                <span ><CiHome /></span> <TfiAngleRight />
                <span >Admin</span><TfiAngleRight />
                <span >Gallery</span>
            </div>
        </div>


        <div className="booking-data">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        galleryItems.map(
                            (galleryItem, index) => {
                                return (
                                    <tr key={index}  className="border-b">
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <img src={galleryItem.image} className="w-[100px]" alt="" />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{galleryItem.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{galleryItem.description.substring(0,50)}</td>
                                        
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
