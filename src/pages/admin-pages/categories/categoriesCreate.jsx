import Input from "../../../components/common/input/input";
import Modal from "../../../components/common/modal/modal";

export default function CategoriesCreate(props) {
    return (
        <Modal setIsModalOpen={props.setIsModalOpen} title="Create a category"  >
            <div className="inputs w-[350px]">

                <Input label="Name" placeholder="Your category name" type="text" />

                <Input label="Price" placeholder="Your category name" type="number" />
                
                <Input label="Price" placeholder="Your category name" type="number" />


            </div>
        </Modal>
    )
}
