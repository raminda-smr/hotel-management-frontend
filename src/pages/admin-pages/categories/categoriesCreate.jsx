import { useNavigate } from "react-router-dom"
import { MdOutlineArrowBack } from "react-icons/md"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"

export default function CategoriesCreate(props) {

    const navigate = useNavigate()

    function goBack() {
        navigate("/admin/categories")
    }


    return (
        <>

            <PageHeader to="/admin/categories" name="Categories" title="Create Categories" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-md ' />
                    <span className='text-sm '>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-5">
                <form className="min-w-[450px] shadow-md p-4 rounded-md" action="">
                    <Input name="name"  />

                </form>
            </div>

        </>
    )
}
