import ProductDetails from "@/src/Components/Products/ProductDetails"

const ProductDetailsPage = (props) => {
    return (
        <div className="flex justify-center items-center py-10">
            <ProductDetails id={props.productData.id} 
            img = {props.productData.img} 
            name = {props.productData.name} 
            price = {props.productData.price} 
            description = {props.productData.description} 
            />
        </div>
    )
}

export default ProductDetailsPage


// export async function getStaticPaths() {
//     // Fetch product data from your API
//     const response = await fetch('https://api.example.com/products');
//     const data = await response.json();
  
//     // Generate paths based on the product data
//     const paths = data.map((product) => ({
//       params: { productID: product.id.toString() },
//     }));
  
//     return {
//       paths,
//       fallback: false, // or 'blocking' or true
//     };
//  }

export function getStaticPaths() {
    return {
        fallback: false, // mean that only accepts id's that in paths object, that i get from database, and pass it to function redux
        paths: [
            {
                params: {
                    productID: '1'
                }
            },
            {
                params: {
                    productID: '2'
                },
            }
        ]
    }
}

// export async function getStaticProps(context) {
//     const productId = context.params.productID;

//     // Fetch product data from your database or API using the productId
//     const response = await fetch(`https://api.example.com/products/${productId}`);
//     const productData = await response.json();

//     return {
//         props: {
//             productData,
//         },
//     };
// }

export function getStaticProps(context) {
    const productId = context.params.productID
    // Select Product From Database
    return {
        props: {
        productData : {
            id:productId, 
            img : 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name : 'Product 1',
            price : '10',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            
        }
        }
    }
}

// With Redux 
// import { fetchProductData } from './yourProductDataSlice'; // Import your Redux action creator

// export async function getStaticProps(context) {
//   const productId = context.params.productID;

//   // Dispatch the Redux action to fetch product data
//   await fetchProductData(productId);

//   // Return an empty object for props (data will be available in Redux store)
//   return {
//     props: {},
//   };
// }