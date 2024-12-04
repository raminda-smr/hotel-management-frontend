import { Link } from "react-router-dom";

export default function RoomCategory(props) {

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    }

    return (
        <div className="room-category bg-gray-100 rounded-lg overflow-hidden flex flex-col md:flex-row md:items-center lg:flex-col">
            <div className="image md:max-w-[50%] lg:max-w-full">
                <img src={props.category.image} alt="" className="w-full" />
            </div>
            <div className="content flex flex-col">
                <h2 className="pt-3 pb-2 text-center text-3xl text-gray-500">{props.category.name}</h2>
                <p className="px-4 pb-4 text-center text-sm text-gray-500">{truncateText(props.category.description,100)}</p>
                
                <p className="text-center">
                    {props.category.features.map((feature, index) => (<span key={index} className="bg-gray-300 inline-block mr-1 mb-1 px-2 py-1 text-xs text-gray-500 rounded">{feature}</span>))}
                </p>

                <Link className='text-white bg-blue-600 px-5 py-2 rounded-full inline-block mx-auto mt-3 mb-4 transition-all hover:bg-amber-500' to="/"> View more</Link>
            </div>
        </div>
    )
}
