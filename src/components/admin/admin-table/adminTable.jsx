export default function AdminTable(props) {
    return (
        <>
            {
                props.data.length > 0 ? (
                    <table className="min-w-full bg-white rounded-md overflow-hidden border border-gray-200 shadow-xl">
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
