import { Link } from 'react-router-dom'
import PageWrapper from '../../../components/client/page-wrapper/pageWrapper'
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'

function ContactUs() {

    return (
        <>
            <PageWrapper title="Contact us" image="/images/wrappers/about-us.jpg" />

            <section className='contact-us w-full bg-gray-50 py-10'>

                <h3 className="text-gray-500 text-2xl text-center pt-10">Get In Touch</h3>
                <h1 className="text-gray-500 text-5xl text-center pb-10">Our Contact Information</h1>

                <div className="max-w-[1200px] grid grid-cols-1 gap-4 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 ">

                    <div className="contact-item flex items-center bg-white rounded-lg p-4 mb-5 border border-gray-300 group transition-all">
                        <div className="icon text-5xl bg-sky-900 text-white rounded-full p-2 group-hover:bg-sky-600 ">
                            <CiLocationOn />
                        </div>
                        <div className="content ml-3">
                            <h5 className='text-gray-700 text-xl font-medium'>Our Address</h5>
                            <p className='text-gray-600'>1234 , Puttalam -Colombo Rd, Negombo, Sri Lanka.</p>
                        </div>
                    </div>

                    <div className="contact-item flex items-center bg-white rounded-lg p-4 mb-5 border border-gray-300 group transition-all">
                        <div className="icon text-5xl bg-sky-900 text-white rounded-full p-2 group-hover:bg-sky-600">
                            <CiPhone />
                        </div>
                        <div className="content ml-3">
                            <h5 className='text-gray-700 text-xl font-medium'>Phone Number</h5>
                            <p className='text-gray-600'>+94 (033) 456-7890</p>
                            <p className='text-gray-600'>+94 (033) 456-7892</p>
                        </div>
                    </div>

                    <div className="contact-item flex items-center bg-white rounded-lg p-4 mb-5 border border-gray-300 group transition-all">
                        <div className="icon text-5xl bg-sky-900 text-white rounded-full p-2 group-hover:bg-sky-600">
                            <CiMail />
                        </div>
                        <div className="content ml-3">
                            <h5 className='text-gray-700 text-xl font-medium'>Email Address</h5>
                            <p className='text-gray-600'>info@leonine.com</p>
                        </div>
                    </div>

                </div>
            </section>


            <section className="w-full">
                <div className="w-[1200px] flex mx-auto ">
                    <div className="grid grid-cols-2 gap-4">
                       

                        <div className='p-4'>

                            <div className="contact-form bg-white flex flex-col p-4 rounded-lg">
                                <h2 className='text-3xl mb-5'>Send your message</h2>

                                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="text" name="name" placeholder='Name' />

                                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="text" name="subject" placeholder='Subject' />

                                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="emai" name='email' placeholder='Email' />

                                <input className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg ' type="phone" name='phone' placeholder='phone' />

                                <textarea className='bg-gray-100 border border-gray-300 mb-2 px-4 py-3 rounded-lg' name="message" id="" placeholder='Message'></textarea>

                                <button className='bg-blue-600 text-white px-5 py-3 inline-block mr-0 ml-auto rounded-lg hover:bg-blue-500'>
                                    Send Now
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className='map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12580.78211163128!2d145.053135!3d-37.972566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1731678356375!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0, display: "block" }} allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

        </>
    )
}


export default ContactUs