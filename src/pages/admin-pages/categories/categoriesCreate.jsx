import { useNavigate } from "react-router-dom"
import { MdOutlineArrowBack } from "react-icons/md"
import PageHeader from "../../../components/admin/page-header/pageHeader"
import PageHeaderButton from "../../../components/admin/page-header/pageHeaderButton"
import Input from "../../../components/common/input/input"
import FileSelector from "../../../components/common/file-selector/fileSelector"
import Textarea from "../../../components/common/textarea/textarea"

export default function CategoriesCreate(props) {

    const navigate = useNavigate()

    function goBack() {
        navigate("/admin/categories")
    }

    function handleSubmit(e){
        e.preventDefault()


    }


    return (
        <>

            <PageHeader to="/admin/categories" name="Categories" title="Create Categories" >
                <PageHeaderButton onClick={goBack}>
                    <MdOutlineArrowBack className='text-md ' />
                    <span className='text-sm '>Back</span>
                </PageHeaderButton>
            </PageHeader>

            <div className="form-container flex justify-center mt-8">
                <form className="min-w-[450px] shadow-md p-5 rounded-md border-t-4 border-blue-500" action="">
                    <h3 className="text-lg font-medium mb-3">Create Category</h3>
                    <Input name="name" defaultValue="" label="Name"  />

                    <Input name="price" type="number" defaultValue="" label="Price"  />

                    <Input name="features" type="text" defaultValue="" label="Features" helper="Comma seperated list"  />

                    <FileSelector name="image" label="Image" />

                    <Textarea name="description" label="Description"></Textarea>

                    <button type="submit" onClick={handleSubmit}  className="w-full bg-blue-500 text-white rounded-md font-medium px-4 py-2 mt-2 hover:bg-blue-600" >Submit</button>

                </form>
            </div>

        </>
    )
}
