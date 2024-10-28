export default function AdminTableRow(props) {
  return (
    <tr className={`border-b ${props.className}`}>
        {props.children}
    </tr>    
  )
}
