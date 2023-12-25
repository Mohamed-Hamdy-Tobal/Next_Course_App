import ProductDetails from "@/src/Components/Products/ProductDetails"

const ProductDetailsPage = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <ProductDetails id={1} 
            img = 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            name = 'Product 1'
            price = '10'
            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
            />
        </div>
    )
}

export default ProductDetailsPage
