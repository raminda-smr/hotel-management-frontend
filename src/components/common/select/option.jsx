export default function Option(props) {
  return (
    <>
        <option onClick={props.onClick} onChange={props.onChange}  value={props.value} >{props.children}</option>
    </>
  )
}
