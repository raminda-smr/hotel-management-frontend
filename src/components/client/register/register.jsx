import { Link } from 'react-router-dom'

function Register() {

    return (
        <div className='w-full h-screen bg-blue-900'>
            <h1 className="text-white text-5xl text-center pt-10 pb-10">Register</h1>


            <div className="container w-[400px] mx-auto  bg-white flex flex-col p-4 rounded-lg pt-10">


                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="text" name="first-name" placeholder='First Name' />

                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="text" name="last-name" placeholder='Last Name' />

                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="emai" name='email' placeholder='Email' />

                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="password" name='password' placeholder='Password' />

                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="password" name='confirm-password' placeholder='Confirm Password' />


                <button className='bg-blue-600 text-white px-10 py-3 inline-block  mx-auto mt-5 rounded-full hover:bg-blue-500'>
                Register Now
                </button>

            </div>
        </div>
    )
}


export default Register