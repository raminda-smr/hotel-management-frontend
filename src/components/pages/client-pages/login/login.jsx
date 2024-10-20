import { Link } from 'react-router-dom'

function Login() {

    return (
        <div className='w-full h-screen bg-blue-900'>
            <h1 className="text-white text-5xl text-center pt-10 pb-10">Login</h1>


            <div className="container w-[400px] mx-auto  bg-white flex flex-col p-4 rounded-lg">
                <img className='w-[200px] mx-auto mb-5' src="https://cdn-icons-png.freepik.com/512/6681/6681204.png" alt="" />
    

                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="emai" name='email' placeholder='Email' />

                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="password" name='password' placeholder='Password' />

              

                <button className='bg-blue-600 text-white px-10 py-3 inline-block  mx-auto mt-5 rounded-full hover:bg-blue-500'>
                    Login
                </button>

            </div>
        </div>
    )
}


export default Login