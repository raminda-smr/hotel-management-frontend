export default function AdminTableHead(props) {
    return (
        <thead className={props.className}>
            {props.children}
        </thead>
    )
}
