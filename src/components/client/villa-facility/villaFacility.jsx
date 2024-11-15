export default function VillaFacility(props) {
    
    const facility = props.facility

    return (
        <div className="flex flex-col items-start space-x-4 p-4 bg-gray-100 shadow-md rounded-lg hover:shadow-lg text-center group hover:bg-teal-600 transition-all duration-300 ">
            <div className="text-teal-600 text-4xl w-full flex justify-center group-hover:text-white">{facility.icon}</div>
            <div>
                <h3 className="text-lg font-semibold text-gray-500 group-hover:text-gray-100">{facility.name}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-100">{facility.description}</p>
            </div>
        </div>
    )
}
