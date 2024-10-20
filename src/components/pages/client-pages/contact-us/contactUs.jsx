import {Link} from 'react-router-dom'

function ContactUs() {

    return (
        <div className='w-full h-screen bg-blue-900'>
            <h1 className="text-white text-5xl text-center pt-10 pb-10">Contact us</h1>

           
           <div className="container w-[1200px] mx-auto bg-gray-200 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                    <div className='p-4'>
                        <div className="contact-item flex items-center bg-white rounded-lg p-4 mb-5">
                            <div className="image">
                                <img className='w-[50px]' src="https://cdn-icons-png.freepik.com/256/535/535239.png?semt=ais_hybrid" alt="" />
                            </div>
                            <div className="content ml-3">
                                <p>Bokale, pitakoratuwa, Heenatigala</p>
                            </div>
                        </div>

                        <div className="contact-item flex items-center bg-white rounded-lg p-4 mb-5">
                            <div className="image">
                                <img className='w-[50px]' src="https://img.freepik.com/premium-vector/phone-call-icon-vector-illustration-design-telephone_373520-4523.jpg" alt="" />
                            </div>
                            <div className="content ml-3">
                                <p>+94 77 761 2199</p>
                            </div>
                        </div>

                        <div className="contact-item flex items-center bg-white rounded-lg p-4 mb-5">
                            <div className="image">
                                <img className='w-[50px]' src="https://cdn-icons-png.freepik.com/256/561/561127.png?semt=ais_hybrid" alt="" />
                            </div>
                            <div className="content ml-3">
                                <p>thedivinevillaslk@gmail.com</p>
                            </div>
                        </div>



                    </div>

                    <div className='p-4'>
                        
                        <div className="contact-form bg-white flex flex-col p-4 rounded-lg">
                            <h2 className='text-3xl mb-5'>Send your message</h2>

                            <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="text" name="name" placeholder='Name' />
                            
                            <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="text" name="subject" placeholder='Subject' />

                            <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="emai" name='email' placeholder='Email' />

                            <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="phone" name='phone' placeholder='phone' />

                            <textarea className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg' name="message"  id="" placeholder='Message'></textarea>

                            <button className='bg-blue-600 text-white px-5 py-3 inline-block mr-0 ml-auto rounded-lg hover:bg-blue-500'>
                                Send Now
                            </button>

                        </div>

                    </div>
                </div>

           </div>

        </div>
    )
}


export default ContactUs