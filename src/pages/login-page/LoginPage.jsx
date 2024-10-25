import { useState } from "react"
import "./LoginPage.css"
import axios from "axios"

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin() {
        axios.post("http://localhost:3000/api/users/login", {
            email: email,
            password: password
        }).then(
            (res)=>{
                console.log(res)
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    }

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center pic-bg ">

                <div className="w-[400px] h-[400px] backdrop-blur-lg rounded-lg m-auto flex flex-col items-center">
                    <h3 className="text-white text-3xl mt-20 mb-5 ">Login</h3>

                    <input type="text" placeholder="Enter your name" className="w-[80%] mb-3 px-4 py-2 border-white border-[2px] rounded-lg bg-transparent text-white " defaultValue={email} onChange={
                        (e) => {
                            setEmail(e.target.value)
                        }
                    } />

                    <input type="password" placeholder="Enter your password" className="w-[80%] mb-3 px-4 py-2 border-white border-[2px] rounded-lg bg-transparent text-white " defaultValue={password} onChange={
                        (e) => {
                            setPassword(e.target.value)
                        }
                    } />


                    <button className="w-[80%] bg-red-500 text-white px-4 py-4 mt-10" onClick={handleLogin}>Submit</button>

                </div>
            </div>

        </>
    )
}
