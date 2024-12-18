import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import AdminTable from "../../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD"
import Modal from "../../../components/common/modal/modal"
import ModalButton from "../../../components/common/modal/modalButton"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import toast from "react-hot-toast"
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa"
import Pagination from "../../../components/common/pagination/pagination"

function Categories() {

    const [categories, setCategories] = useState([])
    const [pagination, setPagination] = useState(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")
    const [listUpdated, setListUpdated] = useState(0)

    const navigate = useNavigate()

    const tableFields = ['Image', 'Name', 'Price', 'Description', 'Action']
    
    const [searchParams] = useSearchParams()
    const currentPage = parseInt(searchParams.get("page") || "1")

    useEffect(() => {
        // read categories
        const token = localStorage.getItem('token')

        if (token) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/categories?page='+ currentPage, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (cats) => {
                    setCategories(cats.data.list)
                    setPagination(cats.data.pagination)
                }
            )
        }
    }, [currentPage])

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
                    setListUpdated(listUpdated + 1)
                    setIsDeleteModalOpen(false)
                    toast.success("Category deleted successfully!")
                }
            ).catch(
                (err) => {
                    toast.error("Category delete failed")
                }
            )
        }
    }

    function handleCreate() {
        navigate("/admin/categories/create")
    }



    return (
        <>
            <PageHeader to="/admin/categories" name="Categories" title="Categories" >
                <PageHeaderButton onClick={handleCreate}>
                    <FaPlus  className="text-xl m-1" />
                </PageHeaderButton>
            </PageHeader>

            <div className="category-data p-4">
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
                                                <div className="flex items-center">
                                                    <Link to="/admin/categories/update" state={category} className="inline-block text-gray-500 rounded-full text-lg hover:text-green-600">
                                                        <FaEdit />
                                                    </Link>
                                                    <button className=" text-gray-500 text-lg ml-3 hover:text-red-600" onClick={() => { getDeleteConfirmation(category.name) }} >
                                                        <FaRegTrashAlt />
                                                    </button>
                                                </div>
                                            </AdminTableTD>
                                        </AdminTableRow>
                                    )
                                }
                            )
                        }

                    </AdminTableBody>
                </AdminTable>
            </div>

            <Pagination base="/admin/categories" paginateData={pagination} />

            {

                isDeleteModalOpen && (
                    <Modal setIsModalOpen={setIsDeleteModalOpen} title="Delete category item"  >
                        <p>Are you sure you want to delete this item?</p>
                        <div className="confirmation-buttons flex justify-end mt-2">
                            <ModalButton type="danger" onClick={deleteItem} >Yes</ModalButton>
                            <ModalButton type="primary" onClick={() => {
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