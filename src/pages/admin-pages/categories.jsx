import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"

function Categories() {

    const [categories, setCategories] = useState([])
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false)

    useEffect(() => {
        // read categories
        const token = localStorage.getItem('token')

        if (token != null && !isCategoriesLoaded) {
            // console.log("started")
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/categories', {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (cats) => {
                    // console.log(cats)
                    setCategories(cats.data.list)
                    setIsCategoriesLoaded(true)
                }
            )
        }
    }, [isCategoriesLoaded])

    function deleteItem(name) {
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/categories/' + name, {}).then(
                (res) => {
                    setIsCategoriesLoaded(false)
                }
            )
        }
    }



    return (
        <>
            <PageHeader to="/admin/categories" name="Categories" title="Category list" />

            <div className="booking-data">
                <AdminTable>

                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(
                                (category, index) => {
                                    return (
                                        <tr key={index} className="border-b">
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                <img className="w-[100px]" src={category.image} alt="Image" />
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{category.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{category.price}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{category.description.substring(0, 50)}...</td>

                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { deleteItem(category.name) }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }

                    </tbody>
                </AdminTable>
            </div>

        </>
    )
}

export default Categories