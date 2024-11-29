import React from 'react'

export default function Sidebar() {
    return (
        <aside className="w-64 bg-blue-900 text-white flex flex-col">
            <div className="p-6 text-lg font-semibold">
                Customer Dashboard
            </div>
            <nav className="flex-1 px-4">
                <ul>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Overview
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Orders
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Settings
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Support
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="p-4">
                <button
                    className="w-full bg-red-600 px-4 py-2 rounded text-white hover:bg-red-500"
                >
                    Logout
                </button>
            </div>
        </aside>
    )
}
