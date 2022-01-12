export default function Search() {
    return(
        <div className="text-black mx-auto">
            <div className="my-4">
                <input type="text" placeholder="Rechercher..." className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-80 rounded-md" required/>
            </div>
            <div>
                <button type="submit" className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white my-2 w-72 rounded-md">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}