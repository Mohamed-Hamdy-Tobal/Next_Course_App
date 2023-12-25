const ProductDetailsInfo = ({ id, img, name, price, description }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={img} alt="img" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">${price}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default ProductDetailsInfo