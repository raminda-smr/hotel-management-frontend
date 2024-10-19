import "./userData.css"

function UserTag(props){
    console.log(props)
    return(
        <div className="user-data-div">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            <span>John Doe</span>
        </div>
    )
}

export default UserTag