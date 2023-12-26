import ProductList from "@/src/Components/Products/ProductList";
import Link from "next/link";
// import { useEffect, useState } from "react";

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
export default function Home(props) {

  // const [loadedData, setLoadedData] = useState([])

  // useEffect(() => {
  //   setLoadedData(products)
  // }, [])
  {console.log(props.posts)}

  return (
    <div className='products'>
      <div className="container">
        <ProductList products={props.products}/>
        <hr className="my-10" />
        <div className="main-test flex justify-center items-center gap-3 flex-wrap">
          {props.posts.map((item, idx) => {
            return (
              <div key={idx} className="w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.body}</p>
                  <Link href={`/posts/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await req.json()
  return {
    props: {
      products,
      posts: data
    }
  }
}