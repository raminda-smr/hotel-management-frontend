import { CiHome } from "react-icons/ci"
import { TfiAngleRight } from "react-icons/tfi"

const feedbacks = [
    {
        "email": "alice.jones@example.com",
        "username": "alicej",
        "title": "Great Service",
        "description": "I had a wonderful experience with the customer service team. They were prompt and helpful.",
        "date": "2024-10-15T10:30:00.000Z",
        "approved": true
    },
    {
        "email": "bob.smith@example.com",
        "username": "bobster",
        "title": "Website Issues",
        "description": "The website was slow and unresponsive on mobile. It made it difficult to complete my booking.",
        "date": "2024-10-18T14:00:00.000Z",
        "approved": false
    },
    {
        "email": "carla.brown@example.com",
        "username": "carlab",
        "title": "Room Cleanliness",
        "description": "The room was clean and well-maintained. I appreciated the attention to detail.",
        "date": "2024-10-17T09:15:00.000Z",
        "approved": true
    },
    {
        "email": "david.wilson@example.com",
        "username": "davew",
        "title": "Unresolved Complaint",
        "description": "I reported an issue with the air conditioning, but it was not fixed during my stay.",
        "date": "2024-10-19T16:45:00.000Z",
        "approved": false
    },
    {
        "email": "emily.davis@example.com",
        "username": "emilyd",
        "title": "Amazing Location",
        "description": "The hotel’s location was perfect for sightseeing. I could walk to most attractions.",
        "date": "2024-10-20T11:00:00.000Z",
        "approved": true
    }
]



export default function Feedbacks(){

    return (
        <>
        <div className="page-header mb-6 ">
            <h2 className="text-gray-700 text-2xl mb-2">Feedbacks</h2>
            <div className="path flex items-center text-sm border-b border-gray-300 pb-3 text-gray-500">
                <span ><CiHome /></span> <TfiAngleRight />
                <span >Admin</span><TfiAngleRight />
                <span >Feedbacks</span>
            </div>
        </div>


        <div className="booking-data">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created at</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved</th>
                        
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        feedbacks.map(
                            (feedback, index) => {
                                return (
                                    <tr key={index}  className="border-b">
                                        <td className="px-6 py-4 text-sm text-gray-700">{feedback.username}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{feedback.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{feedback.title}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{feedback.description.substring(0,50)}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{new Date(feedback.date).toDateString()}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{feedback.disabled? "Yes": "No"}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">View Edit Delete</td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table>
        </div>

    </>
    )
}
