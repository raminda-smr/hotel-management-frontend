import { Route, Routes } from "react-router-dom";
import Footer from "../../components/client/footer/footer";
import Header from "../../components/client/header/header";
import PageNotFound from "../404-page/pageNotFound";
import Dashboard from "./dashboard/Dashboard";
import Sidebar from "../../components/customer/sidebar/sidebar";
import { useContext } from "react";
import UserContext from "../../context/userContext";


export default function CustomerPage() {

    const token = localStorage.getItem("token")
    if (token == null) {
        window.location.href = "/login"
    }

    const { user } = useContext(UserContext);
    if (!user) return <div>Loading...</div>;

    return (
        <>
            <Header />

            <section className="customer-area py-20">

                <div className="max-w-[1200px] mx-auto">

                    <div className="main flex">

                        <Sidebar />

                        <div className="content px-8">
                            <Routes path="/*">
                                <Route path="/" element={<Dashboard />} />

                                <Route path="/*" element={<PageNotFound />} />
                            </Routes>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}
