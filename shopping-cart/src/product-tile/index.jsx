export default function ProductTile({ product }) {

    return (
        <div>
            <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
                <div className="flex flex-col items-center h-full justify-between">
                    <div className="h-[200px] flex items-center">
                        <img 
                            src={product?.image}
                            alt={product?.title}
                            className="object-cover h-full w-full"
                        />
                    </div>
                    <div>
                        <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg text-center">{product?.title}</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-auto">
                    <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
