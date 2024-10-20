import IndexPage from "./index/indexPage";
import Header from "./parts/header";
import { Routes, Route } from "react-router-dom";


function HomePage() {

    return (
        <>
            <Header />

            <Routes path="/*">
                <Route path="/" element={<IndexPage />} />

            </Routes>
            
        </>
    )
}

export default HomePage