import { MdOutlineCreate } from 'react-icons/md'

export default function PageHeaderButton(props) {
  return (
    <button onClick={props.onClick} className="bg-blue-500 text-white  py-2 px-3 rounded flex items-center hover:bg-blue-600">
        <MdOutlineCreate  className='text-md ' />
        <span className='text-sm '>{props.children}</span>
    </button>
  )
}
