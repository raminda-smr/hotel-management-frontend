

export default function RoomSearchBar() {
    return (
        <div className='bg-blue-500 flex flex-col rounded-lg justify-center items-center p-4  min-w-[260px]'>
            <div className="flex flex-col w-full md:flex-row">
                <input type="date" name='start_date' className="w-full rounded py-2 px-4 mb-2 mr-2" />
                <input type="date" name='end_date' className="w-full rounded py-2 px-4 mb-2" />
            </div>
            <select name="room-category" id="" className="w-full rounded py-2 px-4 mb-2">
                <option value="Standard">Standard</option>
                <option value="Luxuary">Luxuary</option>
                <option value="Supreme">Supreme</option>
            </select>
            <button className="bg-amber-400 px-6 py-2 rounded-lg  transition-all duration-300 overflow-hidden outline-amber-400 hover:bg-yellow-600 hover:outline-white hover:outline hover:outline-2 hover:-outline-offset-4 hover:text-white">Book Now</button>
        </div>
    )
}
