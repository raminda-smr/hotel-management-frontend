
export default function Room(props) {

    const room = props.room

    return (
        <div className="room flex border bg-slate-200 border-gray-300 rounded-lg mb-3 ">
            <div className="image w-2/5 p-2 ">
                <img src={room.category.image} alt="" className="rounded-lg overflow-hidden" />
            </div>
            <div className="data w-3/5 p-2">
                <div className="header flex justify-between">
                    <div className="title">
                        <h3 className="text-2xl uppercase font-semibold text-gray-500">{room.category.name} Room</h3>
                        <h3 className="uppercase text-gray-500">
                            <span>Room Number: </span>
                            <span className="bg-green-500 text-white px-2 py-0 inline-block rounded">{room.roomNumber}</span>
                        </h3>
                    </div>
                    <div className="price">
                    <h3 className="text-2xl uppercase  text-gray-500">
                        <span className="text-sm">LKR</span> 
                        <span className="text-red-500">{room.category.price}</span>
                    </h3>
                    </div>
                </div>

                <p className="text-sm mt-2 pt-2 border-t border-gray-300 text-gray-500">{room.category.description}</p>


            </div>
        </div>
    )
}
