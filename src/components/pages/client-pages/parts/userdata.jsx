function UserTag(props){
    console.log(props)
    return(
        <div className="absolute right-0 flex items-center cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="rounded-full w-[50px] h-[50px]"/>
            <span className="text-white mr-2 text-xl">John Doe</span>
        </div>
    )
}

export default UserTag