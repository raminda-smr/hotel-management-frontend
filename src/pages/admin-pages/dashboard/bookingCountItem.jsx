export default function BookingCountItem(props) {
    return (
        <p className="bg-amber-300  p-1 px-3 mb-1 rounded-md flex justify-between">
            <span>{props.title}</span>
            <span className="bg-amber-500 px-2 py-0 ml-2 rounded-sm text-black">{props.data}</span>
        </p>
    )
}
