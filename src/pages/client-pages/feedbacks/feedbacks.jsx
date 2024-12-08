import { Link } from 'react-router-dom'
import PageWrapper from '../../../components/client/page-wrapper/pageWrapper'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FeedbackItem from '../../../components/client/feedback-item/feedbackItem'

export default function Feedbacks() {

    const [feedbacks, setFeedbacks] = useState([])

    // get feedbacks
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/feedbacks/public?limit=40', {}).then(
            (res) => {
                if (res) {
                    setFeedbacks(res.data.list)
                }
            }
        )
    }, [])

    return (
        <>
            <PageWrapper title="Feedbacks" image="/images/wrappers/contact-us.jpg" />

            {feedbacks && feedbacks.length > 0 && (
                <section className="our-feedbacks py-20 bg-gray-100">

                    <div className="max-w-[768px] mx-auto px-4 mb-8">
                        <h2 className="text-gray-600 text-5xl text-center mb-3">Guest Experiences</h2>
                        <p className="text-center text-gray-600 text-xl font-thin ">Hear from Our Guests – Your Stories Inspire Us to Serve Better</p>
                    </div>

                    <div className="max-w-[1200px] mx-auto">
                        <div className="feedback-items grid gap-4 grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4">

                            {feedbacks.map((item, index) => <FeedbackItem key={index} item={item} />)}

                        </div>
                    </div>
                </section>
            )}

            

        </>
    )
}