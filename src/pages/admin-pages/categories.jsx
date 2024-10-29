import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableHead from "../../components/admin/admin-table/adminTableHead"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableTH from "../../components/admin/admin-table/adminTableTH"
import AdminTableBody from "../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../components/admin/admin-table/adminTableTD"

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
            <PageHeader to="/admin/categories" name="Categories" title="Categories" />

            <div className="category-data">
                <AdminTable data={categories} tableFields={tableFields}>
                    <AdminTableBody>
                        {
                            categories.map(
                                (category, index) => {
                                    return (
                                        <AdminTableRow key={index}>
                                            <AdminTableTD>
                                                <img className="w-[100px]" src={category.image} alt="Image" />
                                            </AdminTableTD>
                                            <AdminTableTD>{category.name}</AdminTableTD>
                                            <AdminTableTD>{category.price}</AdminTableTD>
                                            <AdminTableTD>{category.description.substring(0, 50)}...</AdminTableTD>

                                            <AdminTableTD>
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { deleteItem(category.name) }}>Delete</button>
                                            </AdminTableTD>
                                        </AdminTableRow>
                                    )
                                }
                            )
                        }

                    </AdminTableBody>
                </AdminTable>
            </div>

        </>
    )
}

export default Categories