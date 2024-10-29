export default function AdminTable(props) {
    return (
        <>
            {
                props.data != null && props.data.length > 0 ? (
                    <table className="min-w-full bg-white rounded-md overflow-hidden border border-gray-200 shadow-xl">
                        {
                            props.dataFields != null && Array.isArray(props.dataFields) && props.dataFields.length > 0 ? (
                                <AdminTableHead className="rounded-lg overflow-hidden">
                                    <AdminTableRow className="bg-blue-500">
                                        {
                                            props.tableFields.map(
                                                (tableField, index) => <AdminTableTH key={index}>{tableField}</AdminTableTH>
                                            )
                                        }
                                    </AdminTableRow>
                                </AdminTableHead>
                            ) : ""
                        }

                        {props.children}
                    </table>
                ) : (
                    <div>
                        <p className="text-gray-500">No data found.</p>
                        <span className="text-gray-400 text-sm"> Create a new item to view the item list.</span>
                    </div>
                )
            }

        </>

    )
}
