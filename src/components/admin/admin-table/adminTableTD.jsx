export default function AdminTableTD(props) {
  return (
    <td className={`px-6 py-4 text-sm text-gray-700 ${props.className}`}>
        {props.children}
    </td>
  )
}
