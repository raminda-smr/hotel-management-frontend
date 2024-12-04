import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../components/client/page-wrapper/pageWrapper'
import GalleryItem from '../../../components/client/gallery-item/galleryItem'
import axios from 'axios'

export default function Gallery() {

    const [galleryItems, setGalleryItems] = useState([])

    // get gallery items  
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/gallery?limit=100', {}).then(
            (res) => {
                if (res) {
                    setGalleryItems(res.data.list)
                }
            }
        )
    }, [])

    return (
        <>
            <PageWrapper title="Gallery" image="/images/wrappers/gallery.jpg" />

            {galleryItems && galleryItems.length > 0 && (
                <section className="our-gallery py-20 bg-gray-100">

                    <div className="max-w-[768px] mx-auto px-4 mb-8">
                        <p className="text-center text-gray-500 text-xl font-thin ">Capture the Beauty of Every Moment – Explore Leonine Villa's Stunning Spaces</p>
                    </div>

                    <div className="max-w-[1200px] mx-auto">
                        <div className="gallery-items grid gap-4 grid-cols-2 px-4 lg:grid-cols-4">

                            {galleryItems.map((item, index) => <GalleryItem key={index} item={item} />)}

                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
