export default function VillaFacility(props) {
    
    const facility = props.facility

    return (
        <div key={index} className="flex items-start space-x-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-blue-500 text-3xl">{facility.icon}</div>
            <div>
                <h3 className="text-lg font-semibold">{facility.name}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
            </div>
        </div>
    )
}
