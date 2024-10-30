import axios from "axios"
import { useEffect, useState } from "react"
import PageHeader from "../../components/admin/page-header/pageHeader"
import AdminTable from "../../components/admin/admin-table/adminTable"
import AdminTableRow from "../../components/admin/admin-table/adminTableRow"
import AdminTableBody from "../../components/admin/admin-table/adminTableBody"
import AdminTableTD from "../../components/admin/admin-table/adminTableTD"

export default function Gallery() {

    const [galleryItems, setGalleryItems] = useState([])
    const [isGalleryItemsLoaded, setIsGalleryItemsLoaded] = useState(false)

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


    function deleteItem(id) {
        const token = localStorage.getItem('token')

        if (token != null) {
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/gallery/' + id, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            }).then(
                (res) => {
                    setIsGalleryItemsLoaded(false)
                }
            )
        }
    }


    return (
        <>
            <PageHeader to="/admin/gallery" name="Gallery" title="Gallery" />

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
                                                <button className="bg-red-400 text-white text-xs px-2 py-1 rounded-md" onClick={() => { deleteItem(galleryItem._id) }}>Delete</button>
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