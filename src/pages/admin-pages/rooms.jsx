import axios from "axios"
import { useEffect, useState } from "react"
import { CiHome } from "react-icons/ci"
import { TfiAngleRight } from "react-icons/tfi"



function Rooms(){

    const[rooms, setRooms] = useState([])
    const[isRoomsLoaded, setIsRoomsLoaded] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token != null && !isRoomsLoaded){
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/rooms',{}).then(
                (res)=>{
                    // console.log(cats)
                    setRooms(res.data.list)
                    setIsRoomsLoaded(true)
                }
            )
        }

    },[isRoomsLoaded])


    function deleteItem(roomNumber){
        const token = localStorage.getItem('token')

        if(token != null){
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/rooms/'+ roomNumber,{
                headers:{
                    "Authorization" : 'Bearer ' + token,
                    "Content-Type" : "application/json"
                }
            }).then(
                (res)=>{
                    setIsRoomsLoaded(false)                  
                }
            )
        }
    }


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
                                        
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={ ()=>{ deleteItem(room.roomNumber)} }>Delete</button>
                                        </td>
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