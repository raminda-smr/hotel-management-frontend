export default function AdminTableBody(props) {
  return (
    <tbody className={props.className} >
        {props.children}
    </tbody>
  )
}
