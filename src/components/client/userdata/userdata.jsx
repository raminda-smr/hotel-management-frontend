import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UserTag(props){

    const [name, setName] = useState("")
    const [userFound, setUserFound] = useState(false)

    useEffect(()=>{
        
        const token = localStorage.getItem('token')

        if(token != null){
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/users/logged',{
                headers:{
                    "Authorization" : 'Bearer ' + token,
                    "Content-Type" : "application/json"
                }
            })
            .then(
                (res)=>{
                    console.log(res)
                    setName(res.data.user.lastName)
                    setUserFound(true)
                }
            )
        }
        else{
            setName("")
        }
    },[userFound])
    
    return(
        <div className="flex items-center cursor-pointer ml-2 bg-gray-100 rounded-lg px-3 py-2">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="rounded-full w-[30px] h-[30px]"/>
            <span className="ml-2 ">{name}</span>

            <button onClick={()=>{
                localStorage.removeItem('token')
                setUserFound(false)
            }}></button>
        </div>
    )
}