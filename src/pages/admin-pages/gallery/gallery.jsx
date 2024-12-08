import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import AdminTable from "../../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../../components/admin/admin-table/adminTableTD"
import Modal from "../../../components/common/modal/modal"
import ModalButton from "../../../components/common/modal/modalButton"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Pagination from "../../../components/common/pagination/pagination"


export default function Gallery() {

    const [galleryItems, setGalleryItems] = useState([])
    const [pagination, setPagination] = useState(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")
    const [listUpdated, setListUpdated] = useState(0)

    const navigate = useNavigate()

    const tableFields = ['Image', 'Name', 'Description', 'Actions']

    const [searchParams] = useSearchParams()
    const currentPage = parseInt(searchParams.get("page") || "1")


    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/gallery?page=' + currentPage, {}).then(
                (res) => {
                    // console.log(cats)
                    setGalleryItems(res.data.list)
                    setPagination(res.data.pagination)
                }
            )
        }

    }, [currentPage,listUpdated])

    function getDeleteConfirmation(id) {

        setSelectedItem(id)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }

    function deleteItem() {

        const id = selectedItem
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/gallery/' + id, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setSelectedItem("")
                    setListUpdated(listUpdated + 1)
                    setIsDeleteModalOpen(false)
                }
            )
        }
    }

    function handleCreate() {
        navigate("/admin/gallery/create")
    }

    return (
        <>
            <PageHeader to="/admin/gallery" name="Gallery" title="Gallery" >
                <PageHeaderButton onClick={handleCreate}>
                    <FaPlus className="text-xl m-1" />
                </PageHeaderButton>
            </PageHeader>

            <div className="gallery-data p-4">
                <AdminTable data={galleryItems} tableFields={tableFields}>
                    <AdminTableBody>
                        {
                            galleryItems.map(
                                (galleryItem, index) => {
                                    return (
                                        <AdminTableRow key={index}>
                                            <AdminTableTD>
                                                <img src={galleryItem.image} className="w-[100px]" alt="" />
                                            </AdminTableTD>
                                            <AdminTableTD>{galleryItem.name}</AdminTableTD>
                                            <AdminTableTD>{galleryItem.description.substring(0, 50)}</AdminTableTD>

                                            <AdminTableTD>
                                                <div className="flex items-center">
                                                    <Link to="/admin/gallery/update" state={galleryItem} className="inline-block text-gray-500 rounded-full text-lg hover:text-green-600">
                                                        <FaEdit />
                                                    </Link>
                                                    <button className="text-gray-500 text-lg ml-3 hover:text-red-600" onClick={() => { getDeleteConfirmation(galleryItem._id) }} >
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

            <Pagination base="/admin/gallery" paginateData={pagination} />

            {
                isDeleteModalOpen && (
                    <Modal setIsModalOpen={setIsDeleteModalOpen} title="Delete gallery item"  >
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