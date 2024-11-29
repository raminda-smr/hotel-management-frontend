import { useContext } from "react";
import UserContext from "../../../context/userContext";

export default function Dashboard() {
    
    const {user} = useContext(UserContext)

    return (
        <>
            <header className="mb-6">
                <h4 className="text-lg text-gray-400">Hi , {user.firstName}</h4>
                <h1 className="text-3xl font-bold text-gray-600">
                    Welcome to Your Dashboard
                </h1>
                <p className="text-gray-600">
                    Here is an overview of your account and activities.
                </p>
            </header>

            <section className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-700">
                    Add your dashboard content here. This could include
                    stats, graphs, or any relevant customer information.
                </p>
            </section>

        </>
    )
}
