import { Link } from "react-router-dom";

export default function  Pagination (props){

    const { base, paginateData } = props

    if (!paginateData || !paginateData.pages) return null;

    return (
        <div className="flex items-center justify-center space-x-1 mt-4">
            {paginateData.pages.map((page,index) => (
                <Link
                    key={index}
                    to={`${base}?page=${page.id}`}
                    className={`px-3 py-1 rounded-sm text-sm font-medium transition-colors ${
                        page.current
                            ? 'bg-blue-500 text-white'
                            : page.isDisabled
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-white text-gray-500 hover:bg-amber-500 hover:text-white'
                    }`}
                    aria-disabled={page.isDisabled}
                >
                    {page.name}
                </Link>
            ))}
        </div>
    )
}