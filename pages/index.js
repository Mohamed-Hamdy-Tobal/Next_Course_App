import ProductList from "@/src/Components/Products/ProductList";

export default function Home() {

  const products = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Product 1',
        price: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/209573/pexels-photo-209573.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Product 2',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
  ]

  return (
    <div className='products'>
      <ProductList products={products}/>
    </div>
  )
}