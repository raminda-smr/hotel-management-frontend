
export default function AdminTable(props) {
    return (
        <table className="min-w-full bg-white rounded-md overflow-hidden border border-gray-200 shadow-xl">
            {props.children}
        </table>
    )
}
