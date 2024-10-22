import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(){
        
    }

    return (
        <div className='w-full h-screen bg-blue-900'>
            <h1 className="text-white text-5xl text-center pt-10 pb-10">Login</h1>


            <div className="container w-[400px] mx-auto  bg-white flex flex-col p-4 rounded-lg">
                <img className='w-[100px] mx-auto mb-5' src="https://cdn-icons-png.freepik.com/512/6681/6681204.png" alt="" />
    

                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="emai" name='email' placeholder='Email' defaultValue={email} onChange={
                    (e)=>{
                        setEmail(e.target.value)
                    }
                } />

                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="password" name='password' placeholder='Password' defaultValue={password} onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                } />

              

                <button className='bg-blue-600 text-white px-10 py-3 inline-block  mx-auto mt-5 rounded-full hover:bg-blue-500'>
                    Login
                </button>

            </div>
        </div>
    )
}


export default Login