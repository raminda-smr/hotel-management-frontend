import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../components/admin/admin-table/adminTableTD"
import Modal from "../../components/common/modal/modal"
import ModalButton from "../../components/common/modal/modalButton"

function Categories() {

    const [categories, setCategories] = useState([])
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")

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

    function getDeleteConfirmation(name) {
        
        setSelectedItem(name)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }


    function deleteItem() {

        const name = selectedItem
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/categories/' + name, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setSelectedItem("")
                    setIsCategoriesLoaded(false)
                    setIsDeleteModalOpen(false)
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
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { getDeleteConfirmation(category.name) }}>Delete</button>
                                            </AdminTableTD>
                                        </AdminTableRow>
                                    )
                                }
                            )
                        }

                    </AdminTableBody>
                </AdminTable>
            </div>

            {
                isDeleteModalOpen && (
                    <Modal setIsModalOpen={setIsDeleteModalOpen} title="Delete category item"  >
                        <p>Are you sure you want to delete this item?</p>
                        <div className="confirmation-buttons flex justify-end mt-2">
                            <ModalButton type="danger" onClick={deleteItem} >Yes</ModalButton>
                            <ModalButton type="primary" onClick={()=>{ 
                                setSelectedItem("") 
                                setIsDeleteModalOpen(false)
                                }} >No</ModalButton>
                            
                        </div>
                    </Modal>
                )
            }

        </>
    )
}

export default Categories