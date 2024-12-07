import { FaStar } from "react-icons/fa";

export default function FeedbackItem(props) {

    const image = props.item.userImage || "/default-user.png"

    function renderStars(rating){
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar key={i} className="mr-1 text-amber-400" />
            );
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="user flex items-center mb-1">
                <img src={image} alt="User" className="max-w-[60px] rounded-full z-10" />
                <h5 className="name px-3 pl-6 -m-3 text-lg text-white bg-teal-600 rounded-r-lg ">{props.item.username}</h5>
            </div>
            <div className="content">
                <h6 className="text-lg text-gray-500 font-medium mb-1">{props.item.title}</h6>
                <div className="flex items-center mb-2">
                    {renderStars(props.item.rating)}
                </div>
                <p className="text-sm text-justify text-gray-500">{props.item.description}</p>
                <p className="text-xs text-justify text-gray-400 mt-1">Posted: {props.item.date.split('T')[0]}</p>
            </div>
        </div>
    )
}
