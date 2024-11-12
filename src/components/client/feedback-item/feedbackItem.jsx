
export default function FeedbackItem(props) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="user flex items-center mb-1">
                <img src="/default-user.png" alt="User" className="max-w-[60px] rounded-full z-10" />
                <h5 className="name px-3 pl-6 -m-3 text-lg text-white bg-teal-600 rounded-r-lg ">{props.item.username}</h5>
            </div>
            <div className="content">
                <h6 className="text-lg text-gray-500 font-medium mb-1">{props.item.title}</h6>
                <p className="text-sm text-justify text-gray-500">{props.item.description}</p>
                <p className="text-xs text-justify text-gray-400 mt-1">Posted: {props.item.date.split('T')[0]}</p>
            </div>
        </div>
    )
}
