
export default function Room(props) {

    const room = props.room

    return (
        <div>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p>Price: {room.price}</p>

        </div>
    )
}
