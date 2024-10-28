import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableHead from "../../components/admin/admin-table/adminTableHead"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableTH from "../../components/admin/admin-table/adminTableTH"

function Categories() {

    const [categories, setCategories] = useState([])
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false)

    const tableFields = ['Image', 'Name', 'Price', 'Description', 'Action']

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

                    <AdminTableHead className="rounded-lg overflow-hidden">
                        <AdminTableRow className="bg-blue-500">
                            {
                                tableFields.map(
                                    (tableField, index) => <AdminTableTH key={index}>{tableField}</AdminTableTH>
                                )
                            }
                        </AdminTableRow>
                    </AdminTableHead>
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