import axios from "axios";
import { useEffect, useState } from "react"
import { CiCalendar, CiCalendarDate, CiGrid41 } from "react-icons/ci"
import { useNavigate } from "react-router-dom";


export default function RoomSearchBar(props) {
    
    const specialClass = props.className ? props.className : ""

    const navigate = useNavigate()

    const initialSearchData = {start:"", end:"", category:"" }

    const localdata = JSON.parse(localStorage.getItem("searchData"));
    if(localdata && localdata.start && localdata.end && localdata.category){
        initialSearchData.start = localdata.start
        initialSearchData.end = localdata.end
        initialSearchData.category = localdata.category
    }

    const [searchData, setSearchData] = useState(initialSearchData)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/categories', {}).then(
            (result) => {
                setCategories(result.data.list)
            }
        )
       
    }, [])

    function handleChange(e){
        const { name, value } = e.target; 
        const updatedSearchData = { ...searchData, [name]: value }; 
        setSearchData(updatedSearchData); 
       
    };

    function handleSearch(e){
        e.preventDefault()
        
        if(searchData.start != "" &&  searchData.end != "" && searchData.category != ""){
            localStorage.setItem("searchData", JSON.stringify(searchData)); // Save to localStorage
            navigate("/room-search");
        }
    }

    return (
        <>
        <form className={`bg-sky-600 flex flex-col lg:flex-row rounded-lg justify-center items-center py-2 px-1 min-w-[260px] ${specialClass}`  }  onSubmit={(e) => {handleSearch(e)}}  >
            <div className="flex flex-col w-full md:flex-row">

                <div className="input-group flex items-center border-b border-gray-300 bg-white py-2 px-3 mb-2 mx-1 lg:mb-0 focus-within:bg-gray-50">
                    <div className="icon text-3xl text-gray-500">
                        <CiCalendarDate />
                    </div>
                    <div className="input w-full flex flex-col px-2">
                        <label htmlFor="" className="text-xs text-gray-400">Check-in Date</label>
                        <input type="date" name="start" className="w-full text-sm outline-none bg-transparent" required value={searchData.start} onChange={handleChange} />
                    </div>
                </div>

                <div className="input-group flex items-center border-b border-gray-300 bg-white py-2 px-3 mb-2 mx-1 lg:mb-0 focus-within:bg-gray-50">
                    <div className="icon text-3xl text-gray-500">
                        <CiCalendar />
                    </div>
                    <div className="input w-full flex flex-col px-2">
                        <label htmlFor="" className="text-xs text-gray-400">Check-out Date</label>
                        <input type="date" name="end" className="w-full text-sm outline-none bg-transparent" required value={searchData.end} onChange={handleChange}  />
                    </div>
                </div>

            </div>

            <div className="flex w-full">
                <div className="input-group flex w-full items-center border-b border-gray-300 bg-white py-2 px-3 mb-2 mx-1 lg:mb-0 focus-within:bg-gray-50">
                    <div className="icon text-3xl text-gray-500">
                        <CiGrid41 />
                    </div>
                    <div className="input w-full flex flex-col px-2">
                        <label htmlFor="" className="text-xs text-gray-400">Category</label>
                        <select className="outline-none bg-transparent" name="category" id="" value={searchData.category} onChange={handleChange} >
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

                <button type="submit" className="bg-amber-400 px-6 py-4 w-full min-w-[200px] lg:rounded-none mx-1 font-medium uppercase  rounded-lg transition-all duration-300 overflow-hidden hover:bg-amber-500 hover:text-white ">Book Now</button>

            </div>
        </form>
        </>
    )
}
