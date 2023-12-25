import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {

    return (
        <div className='productsContainer flex flex-wrap justify-center items-center flex-col gap-8 py-8'>
            {products.map((product, idx) => (
                <ProductItem key={idx} id={product.id} img={product.img} name={product.name} price={product.price} />
            ))}
        </div>
    )
}

export default ProductList