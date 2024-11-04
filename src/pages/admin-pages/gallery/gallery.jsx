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
import { MdOutlineCreate } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom"
import { FaEdit, FaTrashAlt } from "react-icons/fa"

export default function Gallery() {

    const [galleryItems, setGalleryItems] = useState([])
    const [isGalleryItemsLoaded, setIsGalleryItemsLoaded] = useState(false)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")

    const navigate = useNavigate()

    const tableFields = ['Image', 'Name', 'Description', 'Actions']

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token != null && !isGalleryItemsLoaded) {
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/gallery', {}).then(
                (res) => {
                    // console.log(cats)
                    setGalleryItems(res.data.list)
                    setIsGalleryItemsLoaded(true)
                }
            )
        }

    }, [isGalleryItemsLoaded])

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
                    setIsGalleryItemsLoaded(false)
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
                    <MdOutlineCreate className='text-md ' />
                    <span className='text-sm '>Create</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="gallery-data">
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
                                                    <Link to="/admin/categories/update" state={galleryItem} className="bg-blue-400 inline-block text-white text-xs p-2 rounded-md">
                                                        <FaEdit />
                                                    </Link>
                                                    <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { getDeleteConfirmation(galleryItem._id) }}><FaTrashAlt /></button>
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