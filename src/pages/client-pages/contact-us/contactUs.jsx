import { Link } from 'react-router-dom'
import PageWrapper from '../../../components/client/page-wrapper/pageWrapper'
import { CiBookmark, CiLocationOn, CiMail, CiPaperplane, CiPhone, CiUser } from 'react-icons/ci'
import { useState } from 'react';
import axios from 'axios';

function ContactUs() {

    const [formData, setFormData] = useState({ name: '', subject: '', email: '', phone: '', message: '', })
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };


    function handleSubmit(e) {
        e.preventDefault()

        if (isLoading) {
            return
        }

        setIsLoading(true)
        setSuccessMessage('')
        setErrorMessage('')

        axios.post(import.meta.env.VITE_BACKEND_URL + '/api/public/send-contact', formData)
            .then((response) => {
                setSuccessMessage('Your message has been sent successfully!')
                setFormData({ name: '', subject: '', email: '', phone: '', message: '', })
            })
            .catch((error) => {
                setErrorMessage(
                    error.response?.data?.message || 'Failed to send the message. Please try again.'
                )
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <>
            <PageWrapper title="Contact us" image="/images/wrappers/contact-us.jpg" />

            <section className='contact-us w-full bg-gray-50 py-10'>

                <h3 className="text-gray-500 text-2xl text-center pt-10">Get In Touch</h3>
                <h1 className="text-gray-500 text-5xl text-center pb-10">Our Contact Information</h1>

                <div className="max-w-[1200px] grid grid-cols-1 gap-4 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:px-0 ">

                    <div className="contact-item flex items-center bg-white rounded-lg p-4 mb-5 border border-gray-300 group transition-all">
                        <div className="icon text-5xl bg-sky-900 text-white rounded-full p-2 group-hover:bg-sky-600 ">
                            <CiLocationOn />
                        </div>
                        <div className="content ml-3">
                            <h5 className='text-gray-700 text-xl font-medium'>Address</h5>
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


            <section className="w-full py-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/images/wrappers/contact-us-form.jpg")' }}>
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                    <div className="contact-form w-full bg-white flex flex-col p-8 rounded-lg">
                        <h2 className='text-3xl text-slate-500'>Send Your Message</h2>
                        <p className='text-slate-400 mb-5'>Connect, Communicate, Inspire.</p>

                        {successMessage && (
                            <p className="text-green-600 text-sm mb-3">{successMessage}</p>
                        )}
                        {errorMessage && (
                            <p className="text-red-600 text-sm mb-3">{errorMessage}</p>
                        )}


                        <form action="" className='flex flex-col ' onSubmit={(e)=>{handleSubmit(e)}}>

                            <div className="form-control flex items-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden mb-2 ">
                                <CiUser className='text-2xl mx-3 text-gray-500 ' />
                                <input className='w-full px-4 py-3 outline-none focus-visible::outline-none ' type="text" name="name" placeholder='Name' required value={formData.name} onChange={handleInputChange} />
                            </div>

                            <div className="form-control flex items-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden mb-2 ">
                                <CiBookmark className='text-2xl mx-3 text-gray-500 ' />
                                <input className='w-full px-4 py-3 outline-none focus-visible::outline-none ' type="text" name="subject" placeholder='Subject' required value={formData.subject} onChange={handleInputChange} />
                            </div>

                            <div className="form-control flex items-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden mb-2 ">
                                <CiMail className='text-2xl mx-3 text-gray-500 ' />
                                <input className='w-full px-4 py-3 outline-none focus-visible::outline-none ' type="email" name="email" placeholder='Email' required value={formData.email} onChange={handleInputChange} />
                            </div>

                            <div className="form-control flex items-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden mb-2 ">
                                <CiPhone className='text-2xl mx-3 text-gray-500 ' />
                                <input className='w-full px-4 py-3 outline-none focus-visible::outline-none ' type="telephone" name="phone" placeholder='Phone' value={formData.phone} onChange={handleInputChange} />
                            </div>

                            <textarea className='border border-gray-300 mb-2 px-4 py-3 rounded-lg' name="message" id="" placeholder='Message' required rows={5} value={formData.message} onChange={handleInputChange} ></textarea>

                            <button type='submit' className='bg-blue-600 text-white px-4 py-2 flex items-center mr-0 ml-auto rounded hover:bg-blue-500' disabled={isLoading}>
                                <CiPaperplane className='text-2xl mr-1 -rotate-45 ' />
                                {isLoading ? 'Sending...' : 'Send Now'}
                            </button>
                        </form>

                    </div>

                    <div className="message text-white">
                        <h2 className="text-2xl">Get in Touch</h2>
                        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Fill out the form below, and we’ll get back to you as soon as possible.</p>
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