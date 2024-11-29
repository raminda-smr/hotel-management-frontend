import { Route, Routes } from "react-router-dom";
import Footer from "../../components/client/footer/footer";
import Header from "../../components/client/header/header";
import PageNotFound from "../404-page/pageNotFound";


export default function CustomerPage() {
    return (
        <>
            <Header />

            <Routes path="/*">
                <Route path="/" element={<div></div>} />
           
                <Route path="/*" element={<PageNotFound />} />
            </Routes>

            <Footer />
        </>
    )
}
