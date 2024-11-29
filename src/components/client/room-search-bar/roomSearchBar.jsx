import axios from "axios";
import { useEffect, useState } from "react"
import { CiCalendar, CiCalendarDate, CiGrid41 } from "react-icons/ci"


export default function RoomSearchBar() {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/categories', {}).then(
            (result) => {
                setCategories(result.data.list)
            }
        )
    }, [categories])

    return (
        <form className='bg-blue-500 flex flex-col lg:flex-row rounded-lg justify-center items-center py-2 px-1   min-w-[260px]'>
            <div className="flex flex-col w-full md:flex-row">

                <div className="input-group flex items-center border-b border-gray-300 bg-white py-2 px-3 mb-2 mx-1 focus-within:bg-gray-50">
                    <div className="icon text-3xl text-gray-500">
                        <CiCalendarDate />
                    </div>
                    <div className="input w-full flex flex-col px-2">
                        <label htmlFor="" className="text-xs text-gray-400">Check-in Date</label>
                        <input type="date" name="start" className="w-full text-sm outline-none bg-transparent" required />
                    </div>
                </div>

                <div className="input-group flex items-center border-b border-gray-300 bg-white py-2 px-3 mb-2 mx-1 focus-within:bg-gray-50">
                    <div className="icon text-3xl text-gray-500">
                        <CiCalendar />
                    </div>
                    <div className="input w-full flex flex-col px-2">
                        <label htmlFor="" className="text-xs text-gray-400">Check-out Date</label>
                        <input type="date" name="end" className="w-full text-sm outline-none bg-transparent" required />
                    </div>
                </div>

            </div>

            <div className="flex w-full">
                <div className="input-group flex w-full items-center border-b border-gray-300 bg-white py-2 px-3 mb-2 mx-1 focus-within:bg-gray-50">
                    <div className="icon text-3xl text-gray-500">
                        <CiGrid41 />
                    </div>
                    <div className="input w-full flex flex-col px-2">
                        <label htmlFor="" className="text-xs text-gray-400">Category</label>
                        <select className="outline-none bg-transparent" name="category" id="">
                            {categories.map((category, index) => (
                                <option key={index} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>
            </div>
            <div className="flex w-full">

                <button className="bg-amber-400 px-6 py-4 w-full min-w-[200px] lg:mb-2 lg:rounded-none mx-1 font-medium uppercase  rounded-lg transition-all duration-300 overflow-hidden hover:bg-amber-500 hover:text-white ">Book Now</button>

            </div>
        </form>
    )
}
