const PostDetails = (props) => {
    // console.log(props.PostDetails)
    return (
        <h1>djskfl</h1>
        // <div>
        //     <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //         <h1>Number Of Post {props.productData.id}</h1>
        //         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.productData.title}</h5>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.productData.body}</p>
        //     </div>
        // </div>
    )
}

export default PostDetails

export async function getStaticProps(context) {
    const productId = context.params.index;

    // Fetch product data from your database or API using the productId
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
    const PostDetails = await response.json();

    return {
        props: {
            PostDetails,
        },
    };
}